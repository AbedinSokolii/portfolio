// src/components/Navbar.jsx
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import mycv from "./mycv/CV.pdf"

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [navOpen, setNavOpen] = React.useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
   <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a href="#hero" className="text-2xl font-bold text-blue-600 dark:text-blue-400">Abedin Sokoli</a>

        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-blue-500" />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400">Contact</a></li>
            <li>
              <a href={mycv} download className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
>
  Get my CV
</a>

            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div onClick={toggleNav} className="md:hidden cursor-pointer">
            {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile side drawer */}
      <ul className={`md:hidden fixed top-0 left-0 h-full w-2/3 bg-white dark:bg-gray-800 transform ${
        navOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}>
        <li className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <a href="#projects" onClick={toggleNav}>Projects</a>
        </li>
        <li className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <a href="#contact" onClick={toggleNav}>Contact</a>
        </li>
        <li className="px-4 py-4">
          <a href="#contact" className="block text-white bg-blue-600 px-4 py-2 rounded" onClick={toggleNav}>
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  );
}
