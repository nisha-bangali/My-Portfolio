import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
