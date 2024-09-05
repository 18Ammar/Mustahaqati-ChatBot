import React, { useEffect, useState } from "react";
import "../../assets/styles/historySection.css";
import { MantineProvider, Paper, ScrollArea } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { createNewChat, getAllChatHistory } from "../../service/chatApi";
import { HistoryList } from "./components/HistoryList";
import { HeaderButtons } from "./components/HeaderButtons ";
import "@mantine/core/styles.css";

export default function HistorySide({ onNewChat, onClearChat, onSelectedChat, initialMessage, selectedChatId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [histories, setHistories] = useState([]);
  const [firstChat, setFirstChat] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [editableChatId, setEditableChatId] = useState(null);
  const menuRef = useClickOutside(() => {
    setActiveMenu(null);
    setEditableChatId(null);
  });
  const historyRef = useClickOutside(() => {
    setIsOpen(false);
    handleClose()
  });

  useEffect(() => {
    fetchChatsHistory();
  }, []);

  async function fetchChatsHistory() {
    const response = await getAllChatHistory();
    if (response.status === 200) {
      setHistories(response.data);
    }
    return response;
  }

  const handleNewChat = () => {
    const newId = histories.length + 1;
    const newChatTitle = "محادثة جديدة";
    setHistories([...histories, { id: newId, title: newChatTitle }]);

    if (onNewChat) {
      onNewChat(newId);
    }

    if (onClearChat) {
      onClearChat();
    }
    getChats(newId);
  };

  const updateChatTitle = (chatId, message) => {
    const title = message.length <= 15 ? message : message.substring(0, 22);
    setHistories((prevHistories) =>
      prevHistories.map((history) =>
        history.id === chatId
          ? { ...history, title: title }
          : history
      )
    );
    createNewChat({ id: chatId, title: title });
  };


  const handleRename = (id) => {
    setEditableChatId(id);
  };

  useEffect(() => {
    if (initialMessage) {
      updateChatTitle(initialMessage[1], initialMessage[0]);
    }
  }, [initialMessage]);

  const getChats = (id) => {
    if (onSelectedChat) {
      onSelectedChat(id);
      handleClose();
    }
  };

  const handleClose = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsOpen(false);
      const sendContainer = document.querySelector(".send-container");
      const conversation = document.querySelector(".conversation");

      if (sendContainer) {
        sendContainer.classList.add("shifted");
        sendContainer.classList.remove("not-shifted");
      }

      if (conversation) {
        conversation.classList.add("shifted");
        conversation.classList.remove("not-shifted");
      }
    }
  };


  const handleOpen = () => {
    setIsOpen(true);
    const sendContainer = document.querySelector(".send-container");
    const conversation = document.querySelector(".conversation");

    if (sendContainer) {
      sendContainer.classList.add("not-shifted");
      sendContainer.classList.remove("shifted");
    }

    if (conversation) {
      conversation.classList.add("not-shifted");
      conversation.classList.remove("shifted");
    }
  };

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  if (!firstChat) {
    handleNewChat();
    setFirstChat(true);
  }

  return (
    <MantineProvider>
      <Paper className={`Container ${isOpen ? "" : "hidden"}`} shadow="md" radius="md" p="sm" ref={historyRef}>
        <HeaderButtons
          isOpen={isOpen}
          handleClose={handleClose}
          handleOpen={handleOpen}
          handleNewChat={handleNewChat}
        />
        <ScrollArea style={{ height: 'calc(100vh - 80px)' }} type="auto">
          <HistoryList
            histories={histories}
            editableChatId={editableChatId}
            activeMenu={activeMenu}
            menuRef={menuRef}
            updateChatTitle={updateChatTitle}
            getChats={getChats}
            toggleMenu={toggleMenu}
            handleRename={handleRename}
            selectedChatId={selectedChatId}
            setHistories={setHistories}
          />
        </ScrollArea>
      </Paper>
      {!isOpen && (
        <div className="closedMenu">
          <HeaderButtons
            isOpen={false}
            handleClose={handleClose}
            handleOpen={handleOpen}
            handleNewChat={handleNewChat}
          />
        </div>
      )}
    </MantineProvider>
  );
}
