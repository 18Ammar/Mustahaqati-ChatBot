import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Login.css";
import { Image } from "@mantine/core";
export default function Header({ about }: { about?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(about)
  return (
    <div className="header" style={{
      background: about ? "linear-gradient(135deg, #2f193d, #0d0909)" : "",
      width: "100%",
      height: "80px",
    }}>

      <div className="logo">
        <Image
          style={{ width: "190px", height: "75px", position: "relative", right: "30px", bottom: "10px" }}
          src={"/file.png"}
        />
      </div>
      <div
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></div>
      <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`} style={{ background: about && isMenuOpen ? "linear-gradient(135deg, #2f193d, #0d0909)" : "" }}>
        <div className="nav-text" style={{ background: "" }}>
          <Link to="/" >
            الصفحة الرئيسية
          </Link>
          <Link to="/chat">الدردشة</Link>
          <Link to="/about">عن المنصة</Link>
        </div>
      </nav>
    </div>
  );
};

