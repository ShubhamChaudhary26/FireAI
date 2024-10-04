  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import './Navbar.css'; 

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
      <nav className="navbar">
        <div className="logo">
         <a href="/">
          <img src="https://www.fireai.in/images/logo.png" alt="Logo" />

         </a>
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/analytics" onClick={() => setIsOpen(false)}>Analytics</Link>
          <Link to="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </div>
      </nav>
    );
  };

  export default Navbar;
