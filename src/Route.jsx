import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/home";
import ChatPage from "./pages/chats";
import ProfilePage from "./pages/profile";
// import ProtectedRoute from "./components/ProtectedRoute";
import NotFoundPage from "./components/Shared/notFound";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
                path="/chat"
                element={
                    <ChatPage />
                }
            />
            <Route
                path="/about"
                element={
                    <ProfilePage />
                }
            />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;
