import { apiWithInterceptor } from "../api";

async function GetChatsbyId(chatId) {
  try {
    const response = apiWithInterceptor.get(`url/chats/${chatId}`);
    return response; // response => {sender: "bot" or "user", content: response, chatId: 1..}
  } catch (error) {
    console.error("Error fetching chats:", error);
    return null;
  }
}

async function createNewChat(chat) {
  try {
    const response = apiWithInterceptor.post("url/create", chat);
    return response.data;
  } catch (error) {
    console.error("Error creating chat:", error);
    return null;
  }
}

async function getAllChatHistory() {
  try {
    const response = apiWithInterceptor.get("url/chats");
    return response.data;
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return null;
  }
}

async function deleteChatById(chatId) {
  console.log("deleting chat", chatId);
  try {
    const response = apiWithInterceptor.delete(`url/chats/${chatId}`);
    return response.status === 200;
  } catch (error) {
    console.error("Error deleting chat:", error);
    return false;
  }
}

export { createNewChat, getAllChatHistory, deleteChatById };
export default GetChatsbyId;
