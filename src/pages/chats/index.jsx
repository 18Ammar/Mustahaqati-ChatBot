import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatHistory from "./ChatHistory";

export default function ChatPage() {
  const [clearChatFunction, setClearChatFunction] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [initialMessage, setInitialMessage] = useState(null);
  const [activeChatId, setActiveChatId] = useState(0);

  const handleSelectedChat = (chatId) => {
    setSelectedChatId(chatId)
  };
  const handleNewChat = (chatId) => {
    clearChatFunction && clearChatFunction();
    setActiveChatId(chatId);
  };

  const handleFirstMessage = (message) => {
    setInitialMessage(message);
  };

  return (
    <div className="chatPage">
      <ChatHistory
        onNewChat={handleNewChat}
        onClearChat={setClearChatFunction}
        onSelectedChat={handleSelectedChat}
        initialMessage={initialMessage}
        selectedChatId={selectedChatId}
      />
      <ChatWindow
        onClearChat={clearChatFunction}
        activeChatId={activeChatId}
        selectedChatId={selectedChatId}
        onFirstMessage={handleFirstMessage}
      />
    </div>
  );
}
