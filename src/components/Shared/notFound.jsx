import React from "react";
import { Container, Title, Text, Button, Group, Space } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { MantineProvider } from '@mantine/core';

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <MantineProvider>
            <Container style={{ textAlign: "center", marginTop: "50px" }}>

                <Space h="xl" />
                <Title
                    order={1}
                    style={{
                        fontSize: "4rem",
                        fontWeight: 900,
                        background: "-webkit-linear-gradient(45deg, #0072ff, #00c6ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: "20px",
                    }}
                >
                    Oops! Page Not Found
                </Title>
                <Text size="lg" color="dimmed" style={{ marginBottom: "30px", fontSize: "1.2rem" }}>
                    We can't seem to find the page you're looking for. It may have been moved or never existed.
                </Text>
                <Group position="center" style={{ marginTop: "30px" }}>
                    <Button
                        variant="gradient"
                        gradient={{ from: 'violet', to: 'indigo', deg: 119 }}

                        onClick={() => navigate("/")}
                    >
                        Take me Home
                    </Button>
                </Group>
            </Container>
        </MantineProvider>

    );
}

export default NotFoundPage;
