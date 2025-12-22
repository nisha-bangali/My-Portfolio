import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import ProjectDetails from "./components/ProjectDetail";


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
      {/* <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact /> */}

      <Routes>
        <Route path="/" element={<Home />} />            
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />   
    </>
  );
}

export default App;
