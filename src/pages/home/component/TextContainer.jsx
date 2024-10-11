import React from "react";
import { Button, Box, Text, Title, Grid } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const TextContainer = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/chat');
    }
    return (

        <Grid style={{ padding: '20px', position: "relative", top: "20px" }}>
            <Grid.Col span={4} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '400px',
                        width: '100%',
                        alignItems: 'center'
                    }}
                >
                    <Title
                        order={1}
                        style={(theme) => ({
                            fontSize: 'calc(1rem + 0.8vw)',
                            color: "#FFFFFF",
                            marginBottom: "20px",
                            textAlign: "center",
                        })}
                    >
                        Digital Justice مرحبا بك في منصة
                    </Title>
                    <Text
                        style={(theme) => ({
                            color: "#ebc6f7",
                            fontSize: 'calc(1rem + 0.7vw)',
                            marginBottom: "20px",
                            backgroundColor: "#220236",
                            padding: "10px",
                            borderRadius: "4%",
                            textAlign: "center",
                        })}
                    >
                        من خلال هذه المنصة نسعى إلى مساعدة أهالي سنجار في معرفة استحقاقهم
                        للتعويضات الحكومية بعد الحرب
                        إذا كنت قد تعرضت لأضرار في الممتلكات أو إصابات أو خسائر، تتيح لك
                        منصتنا التحقق بسهولة مما إذا كنت مؤهلاً للحصول على المساعدة
                    </Text>
                    <Button
                        fullWidth
                        color="rgba(110, 0, 104, 1)"
                        radius="xl"
                        size="lg"

                        onClick={handleButtonClick}
                    >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;بدء المحادثة&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    </Button>

                </Box>
            </Grid.Col>
        </Grid>
    )
};
