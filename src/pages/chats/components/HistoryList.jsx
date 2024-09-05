import React from "react";
import { Menu, Button, TextInput, rem } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { deleteChatById } from "../../../service/chatApi"; // Import the deleteChatById function
import "../../../assets/styles/historySection.css";
import "@mantine/core/styles.css";

export function HistoryList({ histories, editableChatId, activeMenu, menuRef, updateChatTitle, getChats, toggleMenu, handleRename, selectedChatId, setHistories }) {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleRename(null);
        }
    };

    const handleDelete = async (chatId) => {
        const isDeleted = await deleteChatById(chatId);
        if (!isDeleted) {
            setHistories((prevHistories) => prevHistories.filter(history => history.id !== chatId));
        } else {
            console.error("Failed to delete chat with ID:", chatId);
        }
    };

    return (
        <ul className="history-list" ref={menuRef}>
            {histories.map((history) => (
                <li
                    key={history.id}
                    className={`historyList ${selectedChatId === history.id ? "selected-chat" : ""}`}
                >
                    {editableChatId === history.id ? (
                        <TextInput
                            value={history.title}
                            variant="filled"
                            onChange={(e) => updateChatTitle(history.id, e.target.value)}
                            onBlur={() => handleRename(null)}
                            onKeyDown={(e) => handleKeyDown(e, history.id)}
                            styles={{
                                input: {
                                    backgroundColor: 'transparent',
                                    border: '#220236 2px solid',
                                    color: '#fff',
                                    padding: '5px 5px',
                                },
                            }}
                        />
                    ) : (
                        <div className={`historyist ${selectedChatId === history.id ? "selected-chat" : ""}`} onClick={() => {
                            getChats(history.id);
                        }}
                        >
                            {history.title}
                        </div>
                    )}

                    <Menu shadow="md" width={200} opened={activeMenu === history.id} >
                        <Menu.Target>
                            <Button
                                size="xs"
                                variant="subtle"
                                style={{ color: "#9b9999", fontSize: 30, bottom: 10 }}
                                styles={{
                                    root: {
                                        backgroundColor: 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    },
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleMenu(history.id);
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
                                    handleRename(history.id);
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
                    </Menu>
                </li>
            ))}
        </ul>
    );
}
