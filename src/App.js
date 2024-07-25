import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/Aboutus';
import Home from './Pages/Home';
import img3 from './Asset/IMG_20240724_235838.jpg'; // Ensure this path is correct
import Academics from './Pages/Academics';
import Admissions from './Pages/Admission';
import Faculty from './Pages/Faculty';
import Students from './Pages/Students';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contactus';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    
    <Router>
      
      <nav className="navbar">
         <Link to="/" className="navbar-logo-link">
          <img src={img3} alt="Logo" className="navbar-logo" />
        </Link>
        <div className="menu-toggle" onClick={toggleMenu}>
         
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/academics" onClick={() => setMenuOpen(false)}>Academics</Link></li>
            <li><Link to="/admissions" onClick={() => setMenuOpen(false)}>Admissions</Link></li>
            <li><Link to="/faculty" onClick={() => setMenuOpen(false)}>Faculty</Link></li>
            <li><Link to="/students" onClick={() => setMenuOpen(false)}>Students</Link></li>
            <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Add other routes as needed */}
      </Routes>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Springdale Public School is dedicated to providing a nurturing educational environment where students can excel in academics, sports, and extracurricular activities.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section about">
          <h3>Contact Us</h3>
          <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: <a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
        </div>
        <div className="footer-section social">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </div>
     
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
      </div>
    </footer>
    </Router>
    


    
  );
}

export default App;
