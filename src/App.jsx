import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import GitHubSection from './components/GitHubSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
