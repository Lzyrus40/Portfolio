import './App.css'
import Navbar from './components/Layout/Navbar'
import About from './components/Section/About/About'
import Contact from './components/Section/Contact/Contact'
import Experience from './components/Section/Experience/Experience'
import Projects from './components/Section/Featured-Project/Projects'
import HeroSection from './components/Section/Hero-Section/Hero-Section'
import Skills from './components/Section/Technical-Skills/Skills'
import ParticleEffect from './components/Particle'


function App() {
  return (
    <>
    <Navbar/>
     <ParticleEffect />
    <HeroSection/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default App
