// components/Home.js
import { useState, useEffect } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaGithub } from "react-icons/fa";
import Lottie from "lottie-react";
import LotteAnimation from "../assets/lotte.json";
import BgLottie from "../assets/home.json"; // 👈 নতুন background lottie

const Home = () => {
  const text = "Frontend Developer";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 60 : 120;
    const timer = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);
      } else if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <section
      id="home"
      className="bg-gray-900 relative overflow-hidden min-h-screen flex items-center 
                
                 px-4 sm:px-6 lg:px-8"
    >
      {/* 🔵 Background Lottie */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Lottie
          animationData={BgLottie}
          loop
          className="w-full h-full scale-125"
        />
      </div>

      {/* 🔵 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <p className="text-lg sm:text-xl text-slate-500 font-medium">
            👋 Hello, I’m
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 uppercase">
            Shariyar Kobir
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mt-3 text-blue-500 ">
            {displayText}
            <span className="border-r-4 border-slate-900 ml-1 animate-pulse"></span>
          </h2>

          <p className="text-gray-300 mt-5 max-w-md sm:max-w-lg mx-auto md:mx-0 text-base sm:text-lg">
            I am a Frontend Developer specializing in React, Tailwind CSS, HTML,
            and JavaScript. I build modern, responsive, and high-performance web
            applications, and I also have basic knowledge of Node.js, Express.js,
            and MongoDB.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
            {[IoLogoInstagram, FaFacebook, FaGithub].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-xl sm:text-2xl p-2 rounded-full border border-blue-600 
                           text-slate-200 hover:text-white hover:bg-blue-600 
                           transition shadow-sm"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a href="/assets/CV.pdf" download>
              <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-full 
                                 bg-blue-600 text-white font-semibold 
                                 hover:bg-blue-700 transition">
                Download Resume
              </button>
            </a>

            <a href="#about">
              <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-full 
                                 border border-blue-600 text-white 
                                 font-semibold hover:bg-blue-600 
                                 transition">
                About Me
              </button>
            </a>
          </div>
        </div>

        {/* Right Lottie */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="w-64 sm:w-80 md:w-[420px] lg:w-[480px]">
            <Lottie animationData={LotteAnimation} loop />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
