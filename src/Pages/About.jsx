import { motion } from "framer-motion";
import Lottie from "lottie-react";
import BgLottie from "../assets/About.json"; // তোমার background lottie

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-8 px-2 flex flex-col items-center 
      scroll-mt-20 overflow-hidden"
    >
      {/* 🔵 Background Lottie */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-[500px] sm:w-[650px]  lg:w-[800px] ">
          <Lottie animationData={BgLottie} loop />
        </div>
      </motion.div>

      {/* 🔹 Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center uppercase">
          About Me
        </h2>

        <p className="text-lg sm:text-xl font-medium mb-10 text-slate-600 text-center uppercase">
          <strong className="text-white" >Frontend Developer</strong> <strong className="text-blue-400" >• React</strong> <strong className="text-blue-500">• Tailwind CSS</strong> <strong className="text-yellow-300">• JavaScript</strong>
        </p>

        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-5 lg:gap-30 items-center lg:items-start">
          {/* Profile Image Animation */}
          <div className="relative w-72 h-96 lg:w-96 lg:h-[450px] flex-shrink-0 overflow-hidden rounded-2xl">
            <motion.img
              src="https://i.ibb.co/YFsPYgh4/Gemini-Generated-Image-6orxur6orxur6orx-removebg-preview.png"
              className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl border-4 border-blue-200"
              whileHover={{ opacity: 0, scale: 0.9, x: -30 }}
              transition={{ duration: 0.6 }}
            />

            <motion.img
              src="https://i.ibb.co/rKtptnNL/Untitled-2.png"
              className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl border-4 border-blue-200"
              initial={{ opacity: 0, scale: 1.1, x: 30 }}
              whileHover={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          {/* Text Content */}{" "}
          <div className="flex-1 mt-8 lg:mt-0">
            {" "}
            <div className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {" "}
              <p className="pb-4">
                {" "}
                I am a passionate{" "}
                <span className="font-semibold text-blue-400">
                  Frontend Developer
                </span>{" "}
                with strong skills in{" "}
                <span className="font-semibold text-blue-400">
                  React.js, Tailwind CSS, HTML, and JavaScript
                </span>
                . I specialize in creating modern, responsive, and
                high-performance web applications with clean and maintainable
                code.{" "}
              </p>{" "}
              <p className="pb-4">
                {" "}
                I also have basic experience with{" "}
                <span className="font-semibold text-blue-400">
                  backend
                </span>{" "}
                technologies such as{" "}
                <span className="font-semibold text-blue-400">
                  {" "}
                  Node.js, Express.js, and MongoDB
                </span>
                , allowing me to understand full-stack development and integrate
                frontend with APIs effectively.{" "}
              </p>{" "}
              <p className="pb-4">
                {" "}
                I enjoy translating{" "}
                <span className="font-semibold text-blue-400">
                  UI/UX designs{" "}
                </span>{" "}
                into functional web applications, optimizing performance, and
                continuously learning new technologies to deliver polished and
                user-friendly digital experiences.{" "}
              </p>{" "}
              <p>
                {" "}
                My goal is to create web applications that not only look great
                but also provide seamless experiences for users, following best
                practices in accessibility, performance, and maintainability.{" "}
              </p>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
