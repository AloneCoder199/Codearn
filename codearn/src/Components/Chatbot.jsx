// src/components/WhatsAppChat.jsx
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const WhatsAppChat = () => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => scrollToBottom(), [input, isOpen]);

  const sendToWhatsApp = () => {
    if (!input.trim()) {
      toast.error("Please type a message first!");
      return;
    }
    const phone = "+923219515138"; // Add your WhatsApp number with country code
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(input)}`;
    window.open(url, "_blank");
    setInput("");
    toast.success("Opening WhatsApp...");
  };

  return (
    <>
      <Toaster position="top-right" />
      
      {/* Open Chat Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "#25D366", // WhatsApp green
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: 28,
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            zIndex: 9999,
          }}
        >
          💬
        </motion.button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: "90%",
            maxWidth: 400,
            borderRadius: 12,
            background: "#fff",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "Arial, sans-serif",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            background: "#25D366",
            color: "#fff",
            fontWeight: "bold",
          }}>
            WhatsApp Chat
            <button onClick={() => setIsOpen(false)} style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer" }}>❌</button>
          </div>

          {/* Input */}
          <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendToWhatsApp()}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: 10,
                border: "none",
                outline: "none",
              }}
            />
            <button
              onClick={sendToWhatsApp}
              style={{
                padding: "0 15px",
                background: "#25D366",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>

          <div ref={chatEndRef} />
        </motion.div>
      )}
    </>
  );
};

export default WhatsAppChat;
