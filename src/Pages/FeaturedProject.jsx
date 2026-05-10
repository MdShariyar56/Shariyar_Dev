"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUp } from "lucide-react";

const projects = [
  {
    title: "PurifyGPT – AI Text Humanizer",
    type: "Live Project",
    image:
      "https://imglink.cc/cdn/YbDbMPoaZP.png",
    description:
      "AI-powered text humanization platform that converts robotic AI-generated text into natural human-like writing.",
    challenge:
      "Maintaining smooth real-time AI processing with fast and responsive UI/UX.",
    goal:
      "Build a seamless platform for generating natural and engaging human-like content.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    live: "https://textdetector.aireshot.com/",
    client: "https://github.com/MdShariyar56/NaturalWrite",
    reverse: false,
  },

  {
    title: "CreatifyAI – AI Video Generator",
    type: "Live Project",
    image: "https://imglink.cc/cdn/xnkwo9YoVv.png",
    description:
      "AI-powered platform for generating videos from text or images with a modern responsive interface.",
    challenge:
      "Optimizing AI video processing while keeping the experience smooth and fast.",
    goal:
      "Build a fast and user-friendly AI video generation platform.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    live: "https://aivideogen.aireshot.com/",
    client: "https://github.com/MdShariyar56/UpdateCreatifyAi",
    reverse: true,
  },

  {
    title: "RentWheels – Vehicle Rental System",
    type: "Featured Project",
    image: "https://imglink.cc/cdn/AQ0hQn9bzX.png",
    description:
      "Modern vehicle rental platform for browsing, booking, and managing vehicles.",
    challenge:
      "Managing booking flow, vehicle availability, and secure role-based access.",
    goal:
      "Build a reliable and user-friendly rental management platform.",
    tech: ["React", "Tailwind CSS", "Firebase", "Node.js", "MongoDB"],
    live: "https://rent-wheels-auth-4c421.web.app/",
    client: "https://github.com/MdShariyar56/Car-Client",
    server: "https://github.com/MdShariyar56/Car-Server",
    reverse: false,
  },

  {
    title: "GameHub – Game Management System",
    type: "Featured Project",
    image:
      "https://imglink.cc/cdn/lPtQlT6xYx.png",
    description:
      "Modern game management platform where users can browse and manage their favorite games.",
    challenge:
      "Implementing secure authentication and accurate user data handling.",
    goal:
      "Build an interactive and user-friendly gaming experience.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    live: "https://game-hub-auth-e87bc.web.app/",
    client: "https://github.com/MdShariyar56/Game-Hub",
    reverse: true,
  },
];

const FeaturedProject = () => {
  return (
    <section
      id="project"
      className="bg-gradient-to-b from-[#0f172a] via-[#111827] to-black text-white py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-black uppercase bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>

        <p className="text-gray-400 tracking-[4px] uppercase mt-4 text-sm">
          Some Of My Best Works
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`
              max-w-7xl mx-auto
              rounded-3xl
              overflow-hidden
              grid md:grid-cols-2
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              hover:border-cyan-400/30
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-2xl hover:shadow-cyan-500/10
            `}
          >
            {/* Image */}
            <div
              className={`
                relative group overflow-hidden
                h-[240px] sm:h-[320px] md:h-full
                ${project.reverse ? "md:order-2" : ""}
              `}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div
              className={`
                p-5 sm:p-8 flex flex-col justify-center
                ${project.reverse ? "md:order-1" : ""}
              `}
            >
              <span className="text-cyan-400 text-xs uppercase tracking-[3px] font-semibold mb-2">
                {project.type}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-5">
                {project.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-yellow-400 font-semibold text-sm mb-1">
                    Description
                  </h4>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-semibold text-sm mb-1">
                    Challenge
                  </h4>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-semibold text-sm mb-1">
                    Goal
                  </h4>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.goal}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-cyan-400 text-black text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-yellow-400 hover:bg-yellow-500 text-black border-none rounded-xl"
                >
                  <ExternalLink size={16} />
                  Live
                </a>

                <a
                  href={project.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl"
                >
                  <Github size={16} />
                  Client
                </a>

                {project.server && (
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl"
                  >
                    <Github size={16} />
                    Server
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll To Top */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="fixed bottom-6 right-5 z-50"
      >
        <button
          onClick={() =>
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="btn btn-circle bg-cyan-400 hover:bg-cyan-500 border-none text-black shadow-xl"
        >
          <ArrowUp size={20} />
        </button>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;