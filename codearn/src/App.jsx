import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Articles from "./Pages/Articles.jsx";
import Contact from "./Pages/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Chatbot from "./Components/Chatbot.jsx";
import BlogPost from "./Components/BlogPost.jsx";
import LiveChat from "./Components/Chatbot.jsx";

// NProgress.configure({
//   showSpinner: false, // disable default circle
// });

// // Counter add karna
// const speedEl = document.createElement("div");
// speedEl.classList.add("custom-speed");
// document.body.appendChild(speedEl);

// // Progress update hook
// const originalSet = NProgress.set;
// NProgress.set = function (n) {
//   speedEl.innerText = `Loading ${Math.round(n * 100)}%`;
//   return originalSet.call(this, n);
// };

// // Complete hone par hide karna
// const originalDone = NProgress.done;
// NProgress.done = function () {
//   speedEl.innerText = "Done ✅";
//   setTimeout(() => {
//     speedEl.style.display = "none";
//   }, 800);
//   return originalDone.call(this);
// };
// Ye component sirf NProgress handle karega
function ProgressHandler() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 500);
  }, [location]);

  return null; // ye kuch render nahi karega, sirf NProgress control karega
}

function App() {
  return (
    <Router>
      <ProgressHandler /> {/* Router ke andar rakha */}
      <Navbar />
       <LiveChat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
         <Route path="/blog/:id" element={<BlogPost/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      <Chatbot/>
    </Router>
  );
}

export default App;

// "Primary: #00BCD4

// Secondary:  #FF9800

// Text: #0D1B2A

// Background: #FFFFFF"



















// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/68cf061ed398c31925307b42/1j5kavprr';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->