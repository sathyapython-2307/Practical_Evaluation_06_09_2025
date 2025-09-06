import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [activeLink, setActiveLink] = useState('home')

  const handleLinkClick = (clickedLink) => {
    setActiveLink(clickedLink)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="navbar-nav">
          <a 
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
            href="#"
          >
            Home
          </a>

          <a 
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
            href="#"
          >
            About
          </a>

          <a 
            className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
            onClick={() => handleLinkClick('services')}
            href="#"
          >
            Services
          </a>

          <a 
            className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default App
