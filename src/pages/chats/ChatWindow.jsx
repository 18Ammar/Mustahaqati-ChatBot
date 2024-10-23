import React, { useState, useEffect, useCallback, useRef } from "react";
import "../../assets/styles/Chat.css";
import { IoSend } from "react-icons/io5";

import { generateAnswers, fetchQuestions } from "../../service/chatApi";
import { Box, Chip, Group, MantineProvider } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconQuestionMark } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import "@mantine/core/styles.css"
export default function ChatWindow({
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
  const [showIcons, setShowIcons] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 900);
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
      setShowIcons(false)
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


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
  const handleScrollRight = () => {
    if (suggestionRef.current) {
      suggestionRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  const handleScrollLeft = () => {
    if (suggestionRef.current) {
      suggestionRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };
  const navToAbout = () => {
    navigate('/about');
  }

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS defaultColorScheme='dark'>
      <div className="mainView">
        <IconQuestionMark className="profile-image" onClick={navToAbout} />

        <div className="conversation" ref={conversationRef}>
          {showIcons && (

            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/HiiL.png`}
              alt="Logo"
              width={"270px"}
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                opacity: 0.2,
                transform: "translate(-50%, -50%)",
              }}
            />

          )}

          <ul>
            {chats
              .filter((chat) => chat.chatId === selectedChatId)
              .map((chat, index) => (
                <li key={index} id={chat.sender} ref={index === chats.length - 1 ? lastMessageRef : null}>
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

        <div className="send-wrapper">
          <div className="send-container" style={{ height: `${containerHeight}px`, maxHeight: "220px", display: 'flex', alignItems: 'center' }}>
            {isSmallScreen && (
              <>
                <IconArrowLeft
                  className="arrow-icon"
                  onClick={handleScrollLeft}
                  style={{ cursor: 'pointer', zIndex: 10000, borderRadius: "50px", left: "5%", bottom: `${Math.min(containerHeight - 45, 125)}px` }}
                />
                <IconArrowRight
                  className="arrow-icon"
                  onClick={handleScrollRight}
                  style={{ cursor: 'pointer', zIndex: 10000, borderRadius: "50px", left: "94%", bottom: `${Math.min(containerHeight - 45, 125)}px` }}
                />
              </>
            )}

            <textarea
              className="input-msg"
              placeholder="اكتب رسالتك"
              value={message}
              onInput={handleInput}
              onKeyDown={handleKeyDown}
              rows="2"
            />
            <IoSend className="send-btn" onClick={userMessage} />

            <div
              className="suggestion-container"
              ref={suggestionRef}
              onMouseDown={handleMouseDown}
              style={{
                position: "absolute", bottom: `${Math.min(containerHeight - 19, 205)}px`

              }}
            >
              {questions.map((q, index) => (
                <Chip.Group key={index}>
                  <Group>
                    <Chip
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
