import bitmoji from '../assets/bitmoji.png';
import BackgroundShape from './BackgroundShape';
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaPhp, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Hero() {
  const name = "Abedin Sokoli";
  const description =
    "Finishing school at UBT (University for Business and Technology, Kosovo). Skills: React.js, Tailwind CSS, HTML, CSS, PHP.";

  const skills = [
    { name: "HTML", color: "#E44D26", icon: <FaHtml5 /> },
    { name: "CSS", color: "#1572B6", icon: <FaCss3Alt /> },
    { name: "PHP", color: "#8993be", icon: <FaPhp /> },
    { name: "React", color: "#61DAFB", icon: <FaReact /> },
    { name: "Tailwind", color: "#38B2AC", icon: <SiTailwindcss /> },
  ];

  return (
   <section className="relative pt-32 min-h-screen flex flex-col items-center px-8 bg-white dark:bg-gray-900 overflow-hidden">
  <BackgroundShape />
  <div className="flex flex-col md:flex-row justify-center items-start w-full z-10" 
       style={{ pointerEvents: 'none' }}>
    <div className="flex-1 mt-12" style={{ pointerEvents: 'auto' }}>
          <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.03 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </h1>

          <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl whitespace-pre-line break-words mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex flex-wrap"
            >
              {description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="inline-block"
                >
                  {word}
                  <span>&nbsp;</span>
                </motion.span>
              ))}
            </motion.div>
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center mt-16 md:mt-12 z-10 relative">
          <motion.img
            src={bitmoji}
            alt="Bitmoji of Abedin Sokoli"
            className="w-64 h-64 rounded-full shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Skills icons section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8 z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center transition-transform duration-500 hover:scale-110 hover:brightness-125 hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <motion.div
              whileHover={{ rotateY: 15, rotateX: 5, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-6xl mb-4"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </motion.div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              {skill.name}
            </p>
          </motion.div>
        ))}
           {/* Play with shape prompt */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="flex items-center space-x-2 bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <motion.span
            className="text-blue-700 dark:text-blue-200 text-sm font-medium"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ←→ Play with the shape in background! ←→
          </motion.span>
          <motion.div
            className="w-5 h-5"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 16L18 12L14 8M10 8L6 12L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}