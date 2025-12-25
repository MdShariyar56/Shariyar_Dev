import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-slate-800 relative overflow-hidden  text-gray-300 pt-16">

      {/* Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 
        w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] 
         blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-3 uppercase">
            Md Shariyar Kobir
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Frontend Developer specializing in React, Tailwind CSS and modern UI
            development. I build clean, responsive and user-friendly web
            applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              <span>+880 1764-841333</span>
            </li>

            <li className="flex items-center gap-3">
              <MdEmail className="text-blue-600 text-lg" />
              <span>shariyarkobir2005@gmail.com</span>
            </li>

            <li className="flex items-center gap-3">
              <FaLocationDot className="text-blue-600" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-4 mt-5 flex-wrap">
            {[
              { icon: <FaGithub />, link: "https://github.com/" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com/" },
              { icon: <FaFacebookF />, link: "https://facebook.com/" },
              { icon: <FaEnvelope />, link: "mailto:shariyarkobir2005@gmail.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-600 bg-[#1e293b] hover:bg-blue-600 hover:scale-110 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-14" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <strong className="text-blue-600">Md Shariyar Kobir</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
