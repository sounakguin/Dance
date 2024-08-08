import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Logo</div>
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <a href="/" className="nav-link" id="gapping">
            Home
          </a>
          <a href="/product" className="nav-link">
            Product
          </a>
          <a href="/promo" className="nav-link">
            Promo
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
          <FontAwesomeIcon icon={faSearch} />
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="handel"> 
            <div>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            <div className="handel1">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
