import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <button
      className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full cursor-pointer"
      onClick={() => setDark(!dark)}
    >
      {dark ? <i className="fas fa-sun text-yellow-400"></i> : <i className="fas fa-moon text-blue-500"></i>}
    </button>
  );
}