// LoginPage.js
import React from "react";
import backgroundImage from "../../../assets/images/image.png";
import "../../../assets/styles/Login.css";
import Header from "../../../components/Shared/Header";
import { TextContainer } from "./TextContainer";
import { useLogin } from "./useLogin";

export default function LoginPage() {
  const { isLoggedIn, handleButtonClick } = useLogin();

  return (
    <div className="main">
      <img src={backgroundImage} alt="background" className="backgroundImage" />
      <Header />
      <div className="contentContainer">
        <TextContainer
          isLoggedIn={isLoggedIn}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
}
