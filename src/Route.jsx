import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/home";
import ChatPage from "./pages/chats";
import ProfilePage from "./pages/profile";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFoundPage from "./components/Shared/notFound";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
                path="/chat"
                element={
                    <ProtectedRoute>
                        <ChatPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
        </Routes>
    );
}

export default AppRoutes;
