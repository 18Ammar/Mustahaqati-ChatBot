import React, { useState } from "react";
import { Menu, Button, TextInput, rem } from '@mantine/core';
// import { IconEdit, IconTrash } from '@tabler/icons-react';
// import { deleteChatById } from "../../../service/chatApi";
import "../../../assets/styles/historySection.css";
import "@mantine/core/styles.css";

export function HistoryList({
    histories,
    editableChatId,
    menuRef,
    activeMenu,
    updateChatTitle,
    getChats,
    toggleMenu,
    handleRename,
    selectedChatId,
    setHistories,
}) {
    const [openedMenuId, setOpenedMenuId] = useState(null);
    const [isRenamingChat, setIsRenamingChat] = useState(false);

    const handleChatRename = (chatId) => {
        handleRename(chatId);
        setIsRenamingChat(true);
    };

    const completeChatRename = () => {
        setIsRenamingChat(false);
        handleRename(null);
    };

    const handleDelete = async (chatId) => {
        // const isDeleted = await deleteChatById(chatId);
        // if (isDeleted) {
        //     console.error("Failed to delete chat with ID:", chatId);
        // } else {
        //     setHistories((prevHistories) =>
        //         prevHistories.filter((history) => history.id !== chatId)
        //     );
        // }
    };

    const handleChatSelection = (chatId) => {
        if (!isRenamingChat) {
            getChats(chatId);
        }
    };

    return (
        <ul className="history-list" ref={menuRef}>
            {histories.map((history) => (
                <li
                    key={history.id}
                    className={`historyList ${selectedChatId === history.id ? "selected-chat" : ""}`}
                    onClick={() => handleChatSelection(history.id)}
                    style={{ cursor: "pointer" }}                >
                    {editableChatId === history.id ? (
                        <TextInput
                            value={history.title}
                            variant="filled"
                            onChange={(e) => updateChatTitle(history.id, e.target.value)}
                            onBlur={completeChatRename}
                            onKeyDown={(e) => e.key === "Enter" && completeChatRename()}
                            styles={{
                                input: {
                                    backgroundColor: "transparent",
                                    border: "#2e0845 3px solid",
                                    color: "#fff",
                                    padding: "5px 5px",
                                },
                            }}
                        />
                    ) : (
                        <div
                            className={`historyist ${selectedChatId === history.id ? "selected-chat" : ""}`}
                        >
                            {history.title}
                        </div>
                    )}

                    {/* <Menu
                        shadow="md"
                        width={200}
                        opened={openedMenuId === history.id}
                        onClose={() => setOpenedMenuId(null)}
                        trigger="click"
                    >
                        <Menu.Target>
                            <Button
                                size="xs"
                                variant="subtle"
                                style={{ color: "#9b9999", fontSize: 30, bottom: 10 }}
                                styles={{
                                    root: {
                                        backgroundColor: "transparent",
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                    },
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenedMenuId(openedMenuId === history.id ? null : history.id);
                                }}
                            >
                                ...
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Label>{`Chat ${history.id}`}</Menu.Label>
                            <Menu.Item
                                leftSection={<IconEdit style={{ width: rem(14), height: rem(14) }} />}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleChatRename(history.id);
                                }}
                            >
                                Rename
                            </Menu.Item>
                            <Menu.Item
                                color="red"
                                leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(history.id);
                                }}
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu> */}
                </li>
            ))}
        </ul>
    );
}
