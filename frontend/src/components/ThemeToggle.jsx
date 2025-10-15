import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "lemonade" ? "forest" : "lemonade");
  };

  return (
    <button className="btn btn-sm" onClick={toggleTheme}>
      {theme === "lemonade" ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
};

export default ThemeToggle;
