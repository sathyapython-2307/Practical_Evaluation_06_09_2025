import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [activeLink, setActiveLink] = useState('home')

  const handleLinkClick = (clickedLink) => {
    setActiveLink(clickedLink)
  }

  return (
    <div className="nav-wrapper">
      <nav className="modern-nav">
        <div className="nav-brand">
          <span className="brand-text">Brand</span>
        </div>
        <div className="nav-links">
          <a 
            className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
            href="#"
          >
            <i className="nav-icon">🏠</i>
            <span>Home</span>
          </a>

          <a 
            className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
            href="#"
          >
            <i className="nav-icon">👤</i>
            <span>About</span>
          </a>

          <a 
            className={`nav-item ${activeLink === 'services' ? 'active' : ''}`}
            onClick={() => handleLinkClick('services')}
            href="#"
          >
            <i className="nav-icon">⚡</i>
            <span>Services</span>
          </a>

          <a 
            className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
            href="#"
          >
            <i className="nav-icon">✉️</i>
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default App
