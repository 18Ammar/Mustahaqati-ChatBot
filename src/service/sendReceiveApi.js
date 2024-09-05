import io from "socket.io-client";

const socket = io("");

export const sendMessage = (message) => {
  socket.emit("message", message);
};

export const receiveMessage = (callback) => {
  socket.on("message", (response) => {
    response = "hello";
    callback(response);
  });
};

export const removeListeners = () => {
  socket.off("message");
};
