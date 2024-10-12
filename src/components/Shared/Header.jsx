import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Login.css";
import { Image } from "@mantine/core";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <Image
          style={{ width: "170px", height: "70px", position: "relative", right: "30px", bottom: "10px" }}
          src={`${process.env.PUBLIC_URL}/file.png`}
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
