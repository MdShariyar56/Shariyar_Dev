import React from "react";
import { ExternalLink, Github, Info, ArrowUp } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section id="project">
      <div className="   min-h-screen text-white p-4 sm:p-8 font-sans">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white uppercase">
            Featured Projects
          </h2>
          <p className="text-blue-400 tracking-widest text-lg sm:text-xl font-medium uppercase">
            Some of my best works
          </p>
        </div>

        {/* Project Card 1 */}

        <div className="max-w-7xl mx-auto bg-[#212230] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row mb-6">
          {/* Left Side: Image */}
          <div className="md:w-1/2 bg-white flex items-center justify-center p-4 md:p-0 overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co/wrRQVrgq/sentient-ai-interacting-with-software-developer-asking-existential-questions.jpg" // Replace with actual image URL
              alt="CreatifyAi Mockup"
              className="w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] object-cover p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-115"
            />

          </div>

          {/* Right Side: Content */}
            <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-center order-2 md:order-1">
            <span className="text-blue-300  text-xs uppercase tracking-widest mb-2 block">
              <strong>Live Project</strong>
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
             Textdetector – AI Text Humanize Generation System
            </h3>

            <span className="text-yellow-500 font-bold">Description:</span>
            <p className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
              Textdetector is an AI-powered text humanization platform that
              converts machine-like text into natural, human-like content with a
              clean and responsive interface.
            </p>

            <span className="text-yellow-500 font-bold">Challenge:</span>
            <p className="text-sm sm:text-base text-gray-300 mb-2">
              Implementing AI-based text humanization, ensuring content
              accuracy, and providing real-time feedback to users while
              maintaining a smooth and responsive interface was the most
              challenging part of this project.
            </p>

            <span className="text-yellow-500 font-bold">Goal:</span>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Build a user-friendly platform where users can generate natural,
              human-like text from AI content efficiently, quickly, and enjoy a
              seamless creative experience.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Tailwind CSS", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="badge py-1.5 px-3 rounded-full text-black font-medium bg-cyan-400 font-medium  border-none text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <a
                href="https://textdetector.aireshot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning btn-xs sm:btn-sm normal-case flex items-center gap-1 sm:gap-2 px-3 sm:px-4"
              >
                <ExternalLink size={14} /> Live
              </a>

              <a
                href="https://github.com/MdShariyar56/NaturalWrite"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost bg-[#2d2e3d] hover:bg-[#3d3e4d] btn-xs sm:btn-sm normal-case flex items-center gap-1 sm:gap-2 px-3 sm:px-4"
              >
                <Github size={14} /> Client
              </a>
            </div>
          </div>

         
        </div>

        {/* Project Card 2 */}

        <div className="max-w-7xl mx-auto bg-[#212230] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row mb-6">
          {/* Left Side: Content */}
        
               <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
            <span className="text-blue-300 text-xs uppercase tracking-widest mb-2 block">
             <strong> Live Project</strong>
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
              CreatifyAi – AI Video Generation System
            </h3>

            <span className="text-yellow-500 font-bold">Description:</span>
            <p className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
              CreatifyAi is an AI-powered video generation platform that allows
              users to create videos from text or images with a clean and
              responsive interface.
            </p>

            <span className="text-yellow-500 font-bold">Challenge:</span>
            <p className="text-sm sm:text-base text-gray-300 mb-2">
              Implementing AI-based video generation from text and images,
              handling processing time efficiently, and ensuring smooth UI/UX
              was the most challenging part of this project.
            </p>

            <span className="text-yellow-500 font-bold">Goal:</span>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Build a user-friendly platform where users can generate videos
              from text or images quickly, efficiently, and enjoy a seamless
              creative experience.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Tailwind CSS", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="badge py-1.5 px-3 rounded-full text-black font-medium bg-cyan-400 font-medium border-none text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <a
                href="https://aivideogen.aireshot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning btn-xs sm:btn-sm normal-case flex items-center gap-1 sm:gap-2 px-3 sm:px-4"
              >
                <ExternalLink size={14} /> Live
              </a>

              <a
                href="https://github.com/MdShariyar56/UpdateCreatifyAi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost bg-[#2d2e3d] hover:bg-[#3d3e4d] btn-xs sm:btn-sm normal-case flex items-center gap-1 sm:gap-2 px-3 sm:px-4"
              >
                <Github size={14} /> Client
              </a>

              <button className="btn btn-outline btn-warning btn-xs sm:btn-sm normal-case flex items-center gap-1 sm:gap-2 px-3 sm:px-4">
                <Info size={14} /> Details
              </button>
            </div>
          </div>
          {/* Right Side: Image */}
          <div className="md:w-1/2 bg-white flex items-center justify-center p-4 md:p-0 order-1 md:order-2 overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co/jZDX6JKR/7423513.jpg" // Replace with actual image URL
              alt="CreatifyAi Mockup"
              className="w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] object-cover p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-115"
            />
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="max-w-7xl mx-auto bg-[#212230] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row mb-6">
          {/* Left Side: Image */}
          <div className="md:w-1/2 bg-blue-100 flex items-center justify-center p-4 md:p-0 overflow-hidden ">
            <img
              src="https://i.ibb.co/n5jr0f7/car-showroom-04.jpg"
              alt="Project Mockup"
              className="w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] p-6 object-cover   shadow-lg  transition duration-300 transform hover:scale-115"
            />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
            <span className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
              Featured Project
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
              RentWheels – Vehicle Rental Management System
            </h3>

            <span className="text-yellow-500 font-bold">Description:</span>
            <p className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
              RentWheels is a modern vehicle rental platform allowing users to
              browse, book, and manage vehicles with a responsive and clean
              interface.
            </p>

            <span className="text-yellow-500 font-bold">Challenge:</span>
            <p className="text-sm sm:text-base text-gray-300 mb-2">
              Managing booking logic, vehicle availability, and role-based
              access between users was the toughest part of this project.
            </p>

            <span className="text-yellow-500 font-bold">Goal:</span>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Build a reliable, user-friendly rental platform with smooth
              booking flow and secure data handling.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Tailwind CSS", "Firebase", "Node.js", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="badge py-1.5 px-3 rounded-full text-black font-medium bg-cyan-400 border-none text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <a
                href="https://rent-wheels-auth-4c421.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning btn-xs sm:btn-sm normal-case flex items-center gap-1 sm:gap-2 px-3 sm:px-4"
              >
                <ExternalLink size={14} /> Live
              </a>

              <a
                href="https://github.com/MdShariyar56/Car-Client"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost bg-[#2d2e3d] hover:bg-[#3d3e4d] btn-xs sm:btn-sm normal-case flex items-center gap-1 sm:gap-2 px-3 sm:px-4"
              >
                <Github size={14} /> Client
              </a>

              <a
                href="https://github.com/MdShariyar56/Car-Server"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost bg-[#2d2e3d] hover:bg-[#3d3e4d] btn-xs sm:btn-sm normal-case flex items-center gap-1 sm:gap-2 px-3 sm:px-4"
              >
                <Github size={14} /> Server
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 4 */}

        <div className="max-w-7xl mx-auto bg-[#212230] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row mb-6">
          {/* Left Side: Content */}
          <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-center order-2 md:order-1">
            <span className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
              Featured Project
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
              GameHub – Game Management System
            </h3>

            <span className="text-yellow-500 font-bold">Description:</span>
            <p className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
              GameHub is a modern game management platform that allows users to
              browse, manage, and track their favorite games through a clean and
              responsive interface.
            </p>

            <span className="text-yellow-500 font-bold">Challenge:</span>
            <p className="text-sm sm:text-base text-gray-300 mb-2">
              Implementing secure login, sign-in, profile updates, and ensuring
              accurate data handling for users was the most challenging part of
              this project.
            </p>

            <span className="text-yellow-500 font-bold">Goal:</span>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              To build a user-friendly and interactive platform where players
              can manage games, update their profiles, and enjoy a seamless
              gaming experience.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Tailwind CSS", "Firebase"].map((tech) => (
                <span
                  key={tech}
                  className="badge py-1.5 px-3 rounded-full text-black font-medium bg-cyan-400 border-none text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <a
                href="https://game-hub-auth-e87bc.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning btn-xs sm:btn-sm normal-case flex items-center gap-1 sm:gap-2 px-3 sm:px-4"
              >
                <ExternalLink size={14} /> Live
              </a>

              <a
                href="https://github.com/MdShariyar56/Game-Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost bg-[#2d2e3d] hover:bg-[#3d3e4d] btn-xs sm:btn-sm normal-case flex items-center gap-1 sm:gap-2 px-3 sm:px-4"
              >
                <Github size={14} /> Client
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 bg-white flex items-center justify-center p-4 md:p-0 order-1 md:order-2 overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co/d41SWwc0/view-3d-video-game-controller.jpg"
              alt="GameHub Mockup"
              className="w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] object-cover p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-115"
            />
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-10 right-4 sm:bottom-10 sm:right-8 z-50">
          <button
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="btn btn-circle btn-warning shadow-lg"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
