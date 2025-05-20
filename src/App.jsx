// src/App.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  // Start in dark mode by default
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // Default to dark mode
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
