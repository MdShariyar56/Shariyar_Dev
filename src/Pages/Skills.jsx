import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import SkillsBg from "../assets/skills.json"; // 🔁 skills background lottie

const skillsData = [
  { name: "HTML", img: "https://i.ibb.co/MxpLfr6R/folder-11570267.png" },
  { name: "CSS", img: "https://i.ibb.co/mrw6w5Yg/css-10356624.png" },
  { name: "Tailwind", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Bootstrap", img: "https://i.ibb.co/KjcqTYGd/bold-5086969.png" },
  { name: "JavaScript", img: "https://i.ibb.co/FbYRQ3sh/js-file-9695720.png" },
  { name: "React.js", img: "https://i.ibb.co/vvgXn7pn/react-1183621.png" },
  { name: "Node.js", img: "https://i.ibb.co/Y7kp6n5D/programing-15484303.png" },
  { name: "Express.js", img: "https://i.ibb.co/rRrQvdhY/expressjs-logo.png" },
  { name: "MongoDB", img: "https://i.ibb.co/BHHXSjfp/mongodb-3-1175138.webp" },
  { name: "Firebase", img: "https://i.ibb.co/qMpn85sh/Firebase-icon-Logo-PNG-SVG-Vector.png" },
  { name: "GitHub", img: "https://i.ibb.co/W4mM8vcn/social-16065963.png" },
  { name: "Git", img: "https://i.ibb.co/1YvY2Pdg/social-15466163.png" },

];

const skillColors = {
  HTML: "text-orange-400",
  CSS: "text-blue-400",
  Tailwind: "text-cyan-400",
  Bootstrap: "text-purple-400",
  JavaScript: "text-yellow-300",
  "React.js": "text-sky-400",
  "Node.js": "text-green-400",
  "Express.js": "text-gray-300",
  MongoDB: "text-emerald-400",
  Firebase: "text-amber-400",
  Git: "text-red-400",
  GitHub: "text-white",
};


const Skills = () => {
  return (
    <section
      id="skills"
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
        <div className="w-[500px] sm:w-[650px] lg:w-[800px] 
                        ">
          <Lottie animationData={SkillsBg} loop />
        </div>
      </motion.div>

      {/* 🔹 Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center uppercase">
          My Skills
        </h2>

        <p className="text-lg sm:text-xl font-medium mb-10 text-blue-400 text-center uppercase">
          <strong>Technologies & Tools I Work With</strong>
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {skillsData.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center justify-center p-5 rounded-2xl
                          border border-blue-300
                         shadow-lg hover:shadow-2xl"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-20 w-20 object-contain mb-3"
              />
             <h3
  className={`font-semibold text-lg text-center 
  ${skillColors[skill.name] || "text-white"}`}
>
  {skill.name}
</h3>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
