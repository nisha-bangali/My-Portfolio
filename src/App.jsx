import React, { useEffect, useState } from "react";
import Header from "./components/layouts/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/layouts/Footer";
import Home from "./components/Home";

// import "./styles/globle.css";

function App() {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
   
    </>
  );
}

export default App;
