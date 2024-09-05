import axios from "axios";

async function GetChatsbyId(chatId) {
  console.log(" getting chat", chatId);
  try {
    const response = await axios.get(`url/chats/${chatId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
      },
    });
    return response; // response => {sender: "bot" or "user", content: response, chatId: 1..}
  } catch (error) {
    console.error("Error fetching chats:", error);
    return null;
  }
}

async function createNewChat(chat) {
  console.log("creating chat", chat);
  try {
    const response = await axios.post("url/create", chat, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating chat:", error);
    return null;
  }
}

async function getAllChatHistory() {
  console.log("getting all chat history");
  try {
    const response = await axios.get("url/chats", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return null;
  }
}

async function deleteChatById(chatId) {
  console.log("deleting chat", chatId);
  try {
    const response = await axios.delete(`url/chats/${chatId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
      },
    });
    return response.status === 200; // Return true if deletion is successful
  } catch (error) {
    console.error("Error deleting chat:", error);
    return false;
  }
}

export { createNewChat, getAllChatHistory, deleteChatById };
export default GetChatsbyId;
