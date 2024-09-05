import React from "react";
import { Button, Group } from '@mantine/core';
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import "../../../assets/styles/historySection.css";
import "@mantine/core/styles.css";

export function HeaderButtons({ isOpen, handleClose, handleOpen, handleNewChat }) {
    return (
        <Group justify="space-between" gap="xl" style={{ marginBottom: 20 }}>
            <Button
                size="xs"
                styles={{ root: { backgroundColor: 'transparent', '&:hover': { backgroundColor: 'transparent' } } }}
                compact
                variant="subtle"
                onClick={isOpen ? handleClose : handleOpen}
                className="closeButton"
                style={{ color: "#9b9999", fontSize: 30 }}
            >
                {isOpen ? <GoSidebarExpand /> : <GoSidebarCollapse />}
            </Button>
            <Button
                size="xs"
                compact
                variant="subtle"
                onClick={() => {
                    handleNewChat();

                }}
                styles={{ root: { backgroundColor: 'transparent', '&:hover': { backgroundColor: 'transparent' } } }}
                style={{ color: "#9b9999", fontSize: 30 }}
            >
                <FaRegEdit />
            </Button>
        </Group>
    );
}
