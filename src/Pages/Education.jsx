import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import EducationBg from "../assets/education.json"; // 👉 তোমার lottie json

const education = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institute: "Northern University Bangladesh [NUB]",
    year: "2025 - Running (Weekend)",
    image: "https://i.ibb.co/kVXfZmpw/Campus-Image.png",
    link: "https://nub.ac.bd/",
  },
  {
    degree: "Diploma in Computer Science & Technology",
    institute: "Brahmanbariya Polytechnic Institute [BBPI]",
    year: "2021 - 2022 | Passed",
    details: "CGPA: 3.40 out of 4.00",
    image:
      "https://i.ibb.co/WNqvp5yP/475787058-655704360318836-604595313590966038-n.png",
    link: "https://www.facebook.com/BBPIT",
  },
  {
    degree: "Secondary School Certificate (Science)",
    institute: "Dhap Satgara B.M. Model kamil Madrasha [DSM]",
    year: "2015 - 2020 | Passed",
    details: "GPA: 4.69 out of 5.00",
    image: "https://i.ibb.co/mr5qwFjm/image.jpg",
    link: "https://dsmkmr.edu.bd/",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-gray-900 relative overflow-hidden py-8 px-4"
    >
      {/* 🔵 Background Lottie */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-12">
        <div className="w-[500px] sm:w-[700px] lg:w-[900px]">
          <Lottie animationData={EducationBg} loop />
        </div>
      </div>

      {/* 🔵 Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center uppercase">
          Education
        </h2>

        <p className="text-center text-lg sm:text-xl font-medium text-blue-400 mb-10 uppercase">
          <strong>Education is not the learning of facts, but the training of the mind to think.</strong>
        </p>

        {/* Education Cards with Motion */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-6 p-5 border border-blue-300 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }} // <-- যতবার scroll হবে ততবার animation
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image */}
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <img
                  src={edu.image}
                  alt={edu.institute}
                  className="w-80 h-40 object-cover rounded-xl border border-blue-600"
                />
              </a>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-blue-400 mb-1">
                  {edu.degree}
                </h3>

                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline block mb-1"
                >
                  {edu.institute}
                </a>

                <p className="text-green-400 font-semibold mb-1">
                  {edu.year}
                </p>

                {edu.details && (
                  <p className="text-sm text-blue-400">
                    {edu.details.split(/(\d+\.\d+)/).map((part, idx) =>
                      /\d+\.\d+/.test(part) ? (
                        <span key={idx} className="font-bold text-white">{part}</span>
                      ) : (
                        <span key={idx}>{part}</span>
                      )
                    )}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
