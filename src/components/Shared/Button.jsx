// Button.js
import React from "react";
import googleImg from "../../assets/images/google.png";

export default function Button({ onClick, text }) {
  return (
    <button className="google-login-btn" onClick={onClick}>
      {text === "تسجيل الدخول بستخدام" && (
        <img src={googleImg} alt="Google" className="google-icon" />
      )}
      {text}
    </button>
  );
}
