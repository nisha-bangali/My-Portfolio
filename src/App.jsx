import About from "./components/About"
import ContactPage from "./components/Contact"
import Home from "./components/Home"
import ServicesPage from "./components/Services"
import SkillsPage from "./components/Skills"
import Footer from "./layouts/Footer"
import Navbar from "./layouts/Navbar"


function App() {

  return (
    <div>
     <Navbar />
     <Home />
     <About />
     <SkillsPage />
     <ServicesPage />
    <ContactPage />
     <Footer />
    </div>
  )
}

export default App
