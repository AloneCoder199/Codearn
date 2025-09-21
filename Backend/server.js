import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";
import fs from "fs";
import path from "path";
import cron from "node-cron";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// ============================
// ✅ Middlewares
// ============================
app.use(express.json());
app.use(cors());

// JSON file path
const EMAIL_JSON_PATH = path.join(process.cwd(), "subscribedEmails.json");

// ============================
// 🔹 Helper Functions
// ============================
const readEmails = () => {
  if (!fs.existsSync(EMAIL_JSON_PATH)) {
    fs.writeFileSync(EMAIL_JSON_PATH, JSON.stringify([]));
    return [];
  }
  const data = fs.readFileSync(EMAIL_JSON_PATH, "utf-8");
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const saveEmail = (email) => {
  const emails = readEmails();
  if (!emails.includes(email)) {
    emails.push(email);
    fs.writeFileSync(EMAIL_JSON_PATH, JSON.stringify(emails, null, 2));
  }
};

// ============================
// 📩 Contact Form Route
// ============================
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to company inbox
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: subject || "New Contact Form Message",
      html: `
        <div style="font-family: Arial, sans-serif; color: #0D1B2A; background: #FFFFFF; padding: 20px; border-radius: 15px; border:1px solid #eee;">
          <h2 style="color: #00BCD4;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"CodEarn Tech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thanks for contacting CodEarn Tech",
      html: `
        <div style="font-family: Arial, sans-serif; color: #0D1B2A; background: #FFFFFF; padding: 25px; border-radius: 15px; border:1px solid #eee;">
          <h2 style="color: #00BCD4; text-align:center; transition: all 0.3s;">Hi ${name},</h2>
          <p style="text-align:center;">Thank you for reaching out to <strong>CodEarn Tech</strong>. 🙌</p>
          <p style="text-align:center;">We’ve received your message and our team will respond within <strong>24 hours</strong>.</p>
          <div style="text-align:center; margin: 30px 0;">
            <a href="https://yourdomain.com" 
               style="background: #FF9800; color: white; text-decoration: none; padding: 12px 25px; border-radius: 8px; font-weight: bold; display: inline-block; transition: all 0.3s;">
               🚀 Visit CodEarn Tech
            </a>
          </div>
          <p style="text-align:center;">Best Regards,<br/><strong>CodEarn Tech Team</strong></p>
          <hr style="margin:30px 0;"/>
          <p style="font-size:12px; color:gray; text-align:center;">
            You are receiving this email because you contacted CodEarn Tech.
          </p>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("❌ Email Error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// ============================
// 📧 Subscribe Route
// ============================
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  try {
    saveEmail(email);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"CodEarn Tech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Subscription Confirmed",
      html: `
        <div style="font-family: Arial, sans-serif; color: #0D1B2A; background: #FFFFFF; padding: 25px; border-radius: 15px; border:1px solid #eee;">
          <h2 style="color:#00BCD4; text-align:center;">Hi there!</h2>
          <p style="text-align:center;">Thanks for subscribing to <strong>CodEarn Tech</strong> daily updates. 🚀</p>
          <p style="text-align:center;">You will receive daily emails with the latest news and tutorials. 💡</p>
          <div style="text-align:center; margin-top:25px;">
            <a href="https://yourdomain.com"
               style="background:#FF9800; color:white; text-decoration:none; padding:12px 25px; border-radius:8px; font-weight:bold; display:inline-block; transition:all 0.3s;">
               🚀 Visit CodEarn Tech
            </a>
          </div>
          <p style="text-align:center; margin-top:20px;">Best Regards,<br/><strong>CodEarn Tech Team</strong></p>
          <hr style="margin:30px 0;"/>
          <p style="font-size:12px; color:gray; text-align:center;">
            You are receiving this email because you subscribed to CodEarn Tech.
          </p>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: "Subscribed successfully" });
  } catch (err) {
    console.error("❌ Subscribe Error:", err);
    res.status(500).json({ error: "Failed to subscribe" });
  }
});

// ============================
// 📅 Daily Update Mail Cron
// ============================
cron.schedule("0 9 * * *", async () => {
  console.log("🚀 Running daily email job...");

  try {
    const emails = readEmails();
    if (emails.length === 0) return console.log("No subscribed emails.");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    for (const email of emails) {
      await transporter.sendMail({
        from: `"CodEarn Tech" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "🌟 Daily Updates from CodEarn Tech",
        html: `
          <div style="font-family: Arial, sans-serif; color:#0D1B2A; background:#FFFFFF; padding:25px; border-radius:15px; border:1px solid #eee;">
            <h2 style="color:#00BCD4; text-align:center;">Hello Subscriber!</h2>
            <p style="text-align:center;">Here are your daily updates from <strong>CodEarn Tech</strong>. 🚀</p>
            <div style="margin:20px 0; padding:15px; background:#f9f9f9; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1); transition:all 0.3s;">
              <ul style="margin-left:20px;">
                <li>💡 Latest MERN stack tutorials</li>
                <li>⚡ Rapid prototyping tips</li>
                <li>🌐 Web development insights</li>
              </ul>
              <div style="text-align:center; margin-top:15px;">
                <a href="https://yourdomain.com"
                  style="background:#FF9800; color:white; text-decoration:none; padding:12px 25px; border-radius:8px; font-weight:bold; display:inline-block; transition:all 0.3s;">
                  🚀 Visit CodEarn Tech
                </a>
              </div>
            </div>
            <p style="text-align:center; margin-top:20px;">Best Regards,<br/><strong>CodEarn Tech Team</strong></p>
            <hr style="margin:30px 0;"/>
            <p style="font-size:12px; color:gray; text-align:center;">
              You are receiving this email because you subscribed to CodEarn Tech.
            </p>
          </div>
        `,
      });
      console.log(`✅ Sent daily email to: ${email}`);
    }
  } catch (err) {
    console.error("❌ Daily Email Error:", err);
  }
});

// ============================
// 🔗 GitHub Repos Route
// ============================
app.get("/api/repos", async (req, res) => {
  try {
    const response = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "GitHub API error" });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("❌ GitHub API Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ============================
// 🚀 Start Server
// ============================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
