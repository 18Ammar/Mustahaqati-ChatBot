import React, { useState } from "react";
import { Link } from "react-router-dom";  // Add this import
import "../../assets/styles/Login.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="header">
      <div className="logo">
        <span className="site-name">مستحقاتي</span>
      </div>
      <div
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></div>
      <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-text">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/chat">Chat</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </div>
  );
};
