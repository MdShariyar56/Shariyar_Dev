// components/Navbar.js
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 100; // navbar height offset
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (window.scrollY >= top && window.scrollY < top + height) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle =
    "px-4 py-2 rounded-full font-medium hover:bg-blue-400 hover:text-white transition-all";
  const activeStyle = "bg-blue-600 text-white";

  const sections = ["home", "about", "skills", "education", "project", "contact"];

  return (
    <nav className="sticky top-0 bg-slate-700 shadow-md z-50">
      <div className="max-w-9xl mx-auto flex justify-between items-center p-4 sm:px-6 lg:px-28">
       <div className="flex items-center gap-2 sm:gap-3 shrink-0">
  <img
    src="https://i.ibb.co/LzfD3XYr/Gemini-Generated-Image-5i6z1t5i6z1t5i6z-1.png"
    alt="Logo"
    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
  />

  <h1 className="text-sm sm:text-lg lg:text-2xl font-bold uppercase text-blue-600 whitespace-nowrap leading-none">
    Shariyar Kobir
  </h1>
</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 justify-end flex-1">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`${linkStyle} ${
                  activeSection === section ? activeStyle : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end flex-1">
          <button
            className="text-2xl font-bold"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden absolute bg-slate-700 text-white  w-full left-0 top-full p-4 flex flex-col gap-2 transition-all duration-300  ${
            open ? "block" : "hidden"
          }`}
        >
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => setOpen(false)}
                className={`${linkStyle} ${
                  activeSection === section ? activeStyle : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
