import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import "../../assets/styles/Chat.css";
import { IoSend } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import {
  sendMessage,
  receiveMessage,
  removeListeners,
} from "../../service/sendReceiveApi";
import GetChatsbyId from "../../service/chatApi";
import { useNavigate } from "react-router-dom";

export default function ChatWindow({
  onClearChat,
  activeChatId,
  selectedChatId,
  onFirstMessage,
}) {
  const { user } = useAuth();
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [chatId, setChatId] = useState(activeChatId);
  const [firstMessageSent, setFirstMessageSent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setChatId(selectedChatId);
  }, [selectedChatId]);

  useEffect(() => {
    async function fetchChats() {
      const data = await GetChatsbyId(selectedChatId);
      if (data) {
        setChats(data);
      }
    }

    if (selectedChatId) {
      fetchChats();
    }
  }, [selectedChatId]);

  const handleReceiveMessage = useCallback(
    (response) => {
      setChats((prevChats) => [
        ...prevChats,
        { sender: "bot", content: response, chatId: chatId },
      ]);

      requestAnimationFrame(() => {
        const ulElement = document.querySelector("ul");
        ulElement.scrollTop = ulElement.scrollHeight;
      });
    },
    [chatId]
  );

  useEffect(() => {
    receiveMessage(handleReceiveMessage);

    return () => {
      removeListeners();
    };
  }, [handleReceiveMessage]);

  const clearChat = () => {
    setChats([]);
  };

  useEffect(() => {
    if (onClearChat) {
      onClearChat(clearChat);
    }
  }, [onClearChat]);

  const userMessage = () => {
    const inputElement = document.querySelector(".input-msg");

    if (message.trim()) {
      setChats((prevChats) => [
        ...prevChats,
        { sender: "user", content: message.trim(), chatId: selectedChatId },
      ]);
      setMessage("");

      inputElement.style.height = "60px";

      requestAnimationFrame(() => {
        const ulElement = document.querySelector("ul");
        ulElement.scrollTop = ulElement.scrollHeight;
      });

      sendMessage(message.trim());

      if (
        onFirstMessage &&
        !chats.some((chat) => chat.chatId === chatId && firstMessageSent)
      ) {
        setFirstMessageSent(true);
        onFirstMessage([message.trim(), chatId]);
      }
    }
  };

  const handleInput = (event) => {
    setMessage(event.target.value);
    const textarea = event.target;
    textarea.style.height = "auto";

    textarea.style.height = `${textarea.scrollHeight}px`;
    textarea.style.lineHeight = "1"
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.shiftKey) {
        return;
      } else {
        event.preventDefault();
        userMessage();
      }
    }
  };

  const toProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="mainView">
      {user ? (
        <img
          src={user.picture}
          alt="Profile"
          className="profile-image"
          onClick={toProfile}
        />
      ) : (
        <CgProfile className="profile-image" />
      )}
      <div className="conversation">

        <ul>
          {chats
            .filter((chat) => chat.chatId === selectedChatId)
            .map((chat, index) => (
              <li key={index} id={chat.sender}>
                {chat.content}
              </li>
            ))}
        </ul>
      </div>
      <div className="send-container">
        <textarea
          className="input-msg"
          placeholder="اكتب رسالتك"
          value={message}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          style={{ height: "60px" }}
        />
        <IoSend className="send-btn" onClick={userMessage} />
      </div>
    </div>
  );
}
