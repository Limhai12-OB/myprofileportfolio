import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const TroggleDarkLight = ({
  size = "medium",
  onThemeChange = null,
  initialTheme = "light",
  className = "absolute ",
  style = {},
}) => {
  const [isDark, setIsDark] = useState(initialTheme === "dark");

  const sizes = {
    small: { container: "w-12 h-6", circle: "w-5 h-5", icon: "w-3 h-3" },
    medium: { container: "w-16 h-8", circle: "w-7 h-7", icon: "w-4 h-4" },
    large: { container: "w-20 h-10", circle: "w-8 h-8", icon: "w-5 h-5" },
  };

  const currentSize = sizes[size] || sizes.medium;

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("little-dark");

      body.className = body.className.replace(/bg-\S+/g, "");
      body.classList.add(
        "bg-gradient-to-br",
        "from-gray-900",
        "via-purple-900",
        "to-gray-800"
      );

      root.style.setProperty(
        "--theme-bg",
        "linear-gradient(to bottom right, #111827, #581c87, #1f2937)"
      );
      root.style.setProperty("--theme-text", "#ffffff");
      root.style.setProperty("--theme-card", "rgba(75, 85, 99, 0.3)");
      root.style.setProperty("--theme-card-hover", "rgba(75, 85, 99, 0.5)");
      root.style.setProperty("--theme-border", "rgba(147, 51, 234, 0.3)");
      root.style.setProperty("--theme-accent", "#a855f7");
      root.style.setProperty("--theme-accent-hover", "#9333ea");
      root.style.setProperty("--theme-shadow", "rgba(147, 51, 234, 0.2)");
    } else {
      root.classList.add("little-dark");
      root.classList.remove("dark");

      body.className = body.className.replace(/bg-\S+/g, "");
      body.classList.add("bg-gray-800");

      root.style.setProperty("--theme-bg", "");
      root.style.setProperty("--theme-text", "#e5e7eb");
      root.style.setProperty("--theme-card", "#374151");
      root.style.setProperty("--theme-card-hover", "#4b5563");
      root.style.setProperty("--theme-border", "#6b7280");
      root.style.setProperty("--theme-accent", "#60a5fa");
      root.style.setProperty("--theme-accent-hover", "#3b82f6");
      root.style.setProperty("--theme-shadow", "rgba(96, 165, 250, 0.2)");
    }
    if (onThemeChange) {
      onThemeChange(isDark ? "dark" : "little-dark");
    }
  }, [isDark, onThemeChange]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        
        ${currentSize.container}
        relative inline-flex items-center justify-center rounded-full 
        transition-all duration-300 transform hover:scale-105 focus:outline-none 
        focus:ring-4 focus:ring-opacity-50
        ${
          isDark
            ? "bg-purple-600 hover:bg-purple-500 focus:ring-purple-400 cursor-pointer"
            : "bg-blue-500 hover:bg-blue-400 focus:ring-blue-300 cursor-pointer"
        }
        ${className}
      `}
      style={style}
      aria-label={`Switch to ${isDark ? "little-dark" : "dark"} mode`}
    >
      <div
        className={`
          absolute ${currentSize.circle} bg-white rounded-full shadow-lg 
          transform transition-transform duration-300 flex items-center justify-center
          ${isDark ? "translate-x-4" : "-translate-x-4"}
        `}
      >
        {isDark ? (
          <Moon className={`${currentSize.icon} text-purple-600`} />
        ) : (
          <Sun className={`${currentSize.icon} text-blue-500`} />
        )}
      </div>
    </button>
  );
};

const DemoPage = () => {
  const [currentTheme, setCurrentTheme] = useState("little-dark");

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    console.log("Theme changed to:", theme);
  };

  return (
    <div className="transition-all duration-500 ">
      <TroggleDarkLight
        position="top-right"
        size="medium"
        initialTheme="little-dark"
        onThemeChange={handleThemeChange}
      />
    </div>
  );
};

export default DemoPage;
