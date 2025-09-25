import React, { useState, useEffect } from "react";
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
import NavbarSkeleton from "./Components/Skeleton/NavbarSkeleton.jsx";
import AboutSkeleton from "./Components/Skeleton/AboutSkeleton.jsx"; // ✅ new import
import ProjectsSkeleto from "./Components/Skeleton/ProjectsSkeleton.jsx"
import BlogListSkeleton from "./Components/Skeleton/BlogListSkeleton.jsx";
import ContactSkeleton from "./Components/Skeleton/ContactSkeleton.jsx";
import BlogPostSkeleton from "./Components/Skeleton/BlogPostSkeleton.jsx";
function ProgressHandler() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 500);
  }, [location]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Router>
      <ProgressHandler />
      {/* Navbar Skeleton */}
      {loading ? <NavbarSkeleton /> : <Navbar />}

      <LiveChat />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ✅ About skeleton lag gaya */}
        <Route path="/about" element={loading ? <AboutSkeleton /> : <About />} />
        <Route path="/projects" element={loading ? <ProjectsSkeleto/> : <Projects />} />
        <Route path="/articles" element={loading ? <BlogListSkeleton/> : <Articles />} />
        <Route path="/blog/:id" element={loading ? <BlogPostSkeleton/> : <BlogPost />} />
        <Route path="/contact" element={loading ? <ContactSkeleton/> : <Contact />} />
      </Routes>
      
      {loading ? <NavbarSkeleton /> : <Footer />}
      <Chatbot />
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