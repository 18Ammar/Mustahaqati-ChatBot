import { apiWithoutInterceptor } from "../api";

async function GetChatsbyId(chatId) {
  // try {
  //   const response = apiWithoutInterceptor.get(`/chats/${chatId}`);
  //   return response; // response => {sender: "bot" or "user", content: response, chatId: 1..}
  // } catch (error) {
  //   console.error("Error fetching chats:", error);
  //   return null;
  // }
}

async function createNewChat(chat) {
  // try {
  //   const response = apiWithoutInterceptor.post("/chats", chat);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error creating chat:", error);
  //   return null;
  // }
}

async function getAllChatHistory() {
  // try {
  //   const response = apiWithoutInterceptor.get("/chats");
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching chat history:", error);
  //   return null;
  // }
}

async function deleteChatById(chatId) {
  // console.log("deleting chat", chatId);
  // try {
  //   const response = apiWithoutInterceptor.delete(`/chats/${chatId}`);
  //   return response.status === 200;
  // } catch (error) {
  //   console.error("Error deleting chat:", error);
  //   return false;
  // }
}
async function generateAnswers(question) {
  try {
    const response = await apiWithoutInterceptor.post('/generate-answer/?question=' + question)
    return response.data.answer;
  } catch (error) {
    console.error('Error generating answers:', error);
    return null;
  }
}
const fetchQuestions = async () => {
  try {
    const response = await fetch("https://api.digitaljustice.app/questions");

    const data = await response.json(); 
    const questions = data.questions;  
    console.log(questions) ;
    return questions;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};
export { createNewChat, getAllChatHistory, deleteChatById,generateAnswers,fetchQuestions };
export default GetChatsbyId;
