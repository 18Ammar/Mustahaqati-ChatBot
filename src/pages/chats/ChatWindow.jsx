import React, { useState, useEffect, useCallback, useRef } from "react";
import "../../assets/styles/Chat.css";
import { IoSend } from "react-icons/io5";
import { generateAnswers, fetchQuestions } from "../../service/chatApi";
import { Chip, Group, MantineProvider } from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import "@mantine/core/styles.css"
export default function ChatWindow({
  onClearChat,
  activeChatId,
  selectedChatId,
  onFirstMessage,
}) {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [chatId, setChatId] = useState(activeChatId);
  const [firstMessageSent, setFirstMessageSent] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [containerHeight, setContainerHeight] = useState(100);
  const lastMessageRef = useRef(null);
  const conversationRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    setChatId(selectedChatId);
  }, [selectedChatId]);

  useEffect(() => {
    async function loadQuestions() {
      const questionsData = await fetchQuestions();
      setQuestions(questionsData);
    }
    loadQuestions();
  }, []);

  const handleReceiveMessage = useCallback(
    (response) => {
      setIsTyping(false);
      setChats((prevChats) => [
        ...prevChats,
        { sender: "bot", content: response, chatId: chatId },
      ]);
    },
    [chatId]
  );

  const scrollToLastMessage = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [chats]);

  const userMessage = async () => {
    const inputElement = document.querySelector(".input-msg");
    if (message.trim()) {
      setChats((prevChats) => [
        ...prevChats,
        { sender: "user", content: message.trim(), chatId: selectedChatId },
      ]);
      setMessage("");
      inputElement.style.height = "60px";
      setContainerHeight(100)
      const trimmedMessage = message.trim();
      setIsTyping(true);
      try {
        const response = await generateAnswers(trimmedMessage);
        setTimeout(() => {
          handleReceiveMessage(response);
        }, 1000);
      } catch (error) {
        setIsTyping(false);
        console.error("Error generating response:", error);
      }

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
    const newHeight = Math.max(100, textarea.scrollHeight + 20);
    setContainerHeight(newHeight);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.shiftKey || window.matchMedia("(max-width: 960px)").matches) {
        return;
      } else {
        event.preventDefault();
        userMessage();
        setContainerHeight(100);
      }
    }
  };

  const handleQuestionClick = (question) => {
    setMessage(question);
  };




  const suggestionRef = useRef(null);
  const handleMouseDown = (e) => {
    const startX = e.pageX - suggestionRef.current.offsetLeft;
    const scrollLeft = suggestionRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - suggestionRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      suggestionRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      suggestionRef.current.removeEventListener("mousemove", handleMouseMove);
      suggestionRef.current.removeEventListener("mouseup", handleMouseUp);
      suggestionRef.current.removeEventListener("mouseleave", handleMouseUp);
    };

    suggestionRef.current.addEventListener("mousemove", handleMouseMove);
    suggestionRef.current.addEventListener("mouseup", handleMouseUp);
    suggestionRef.current.addEventListener("mouseleave", handleMouseUp);
  };

  const navToAbout = () => {
    navigate('/about');
  }

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      defaultColorScheme='dark'
    >
      <div className="mainView">

        <IconQuestionMark className="profile-image" onClick={navToAbout} />


        <div className="conversation" ref={conversationRef}>
          <ul>
            {chats
              .filter((chat) => chat.chatId === selectedChatId)
              .map((chat, index) => (
                <li
                  key={index}
                  id={chat.sender}
                  ref={index === chats.length - 1 ? lastMessageRef : null}
                >
                  {chat.content}
                </li>

              ))}
            {isTyping && (
              <li id="bot-typing" className="typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </li>
            )}
          </ul>
        </div>
        <div className="send-wrapper" >
          <div className="send-container" style={{ height: `${containerHeight}px`, maxHeight: "220px" }}>
            <textarea
              className="input-msg"
              placeholder="اكتب رسالتك"
              value={message}
              onInput={handleInput}
              onKeyDown={handleKeyDown}
            />
            <IoSend className="send-btn" onClick={userMessage} />

            <div
              className="suggestion-container"
              ref={suggestionRef}
              onMouseDown={handleMouseDown}
              style={{ position: "absolute", bottom: `${Math.min(containerHeight - 19, 205)}px` }}

            >
              {questions.map((q, index) => (
                <Chip.Group>
                  <Group  >
                    <Chip
                      key={index}
                      variant="outline"
                      onClick={() => handleQuestionClick(q)}
                      styles={{
                        checkIcon: {
                          display: "none",
                        },
                      }}
                      style={{
                        margin: "0 1px",
                      }}
                    >
                      {q}
                    </Chip>
                  </Group>
                </Chip.Group>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
