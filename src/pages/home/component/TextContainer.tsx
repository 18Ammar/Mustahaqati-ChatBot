import React from "react";
import { Button, Box, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const TextContainer = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/chat");
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "min(430px, 100%)",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Title
        order={1}
        dir="rtl"
        style={{
          fontSize: "clamp(0.1rem, 1.9vw, 1.75rem)",
          color: "#FFFFFF",
          marginBottom: "20px",
          textAlign: "center",
          lineHeight: 1.25,
          whiteSpace: "nowrap",
        }}
      >
        مرحباً بك في منصة Digital Justice
      </Title>
      <Text
        dir="rtl"
        style={{
          color: "#ebc6f7",
          fontSize: "clamp(1rem, 1.2vw, 1.35rem)",
          lineHeight: 1.8,
          marginBottom: "20px",
          backgroundColor: "#220236",
          padding: "16px",
          borderRadius: "16px",
          textAlign: "center",
          width: "100%",
        }}
      >
        من خلال هذه المنصة نسعى إلى مساعدة أهالي سنجار في معرفة استحقاقهم
        للتعويضات الحكومية بعد الحرب. إذا كنت قد تعرضت لأضرار في الممتلكات أو
        إصابات أو خسائر، تتيح لك منصتنا التحقق بسهولة مما إذا كنت مؤهلاً للحصول
        على المساعدة.
      </Text>
      <Button
        fullWidth
        color="rgba(110, 0, 104, 1)"
        radius="xl"
        size="lg"
        onClick={handleButtonClick}
      >
        بدء المحادثة
      </Button>
    </Box>
  );
};
