import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Login.css";
import { Image } from "@mantine/core";
import logo from "../../assets/images/file.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <Image
          style={{ width: "170px", height: "70px", position: "relative", right: "30px", bottom: "10px" }}
          src={logo}
        />
      </div>
      <div
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></div>
      <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-text">
          <Link to="/" >
            Home
          </Link>
          <Link to="/chat">Chat</Link>
          <Link to="/about">about</Link>
        </div>
      </nav>
    </div>
  );
};
