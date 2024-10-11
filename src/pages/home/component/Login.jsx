// LoginPage.js
import React from "react";
import { Box, Image } from "@mantine/core";
import backgroundImage from "../../../assets/images/image.png";
import Header from "../../../components/Shared/Header";
import { TextContainer } from "./TextContainer";
// import { useLogin } from "../hooks/useLogin";

export default function LoginPage() {
  // const { logged, handleButtonClick } = useLogin();
  return (
    <Box
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Image
        src={backgroundImage}
        alt="background"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />

      <Header />

      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          padding: '0 50px',
        }}
      >
        <TextContainer
        // isLoggedIn={logged}
        // handleButtonClick={handleButtonClick}
        />
      </Box>
    </Box>
  );
}
