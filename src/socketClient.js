import { io } from "socket.io-client";
const ENDPOINT = "https://chatbox-socket-io.onrender.com";

export const socket = io(ENDPOINT, {
  transports: ["websocket"] // use webSocket only
});

export const asyncEmit = (eventName, data) => {
    return new Promise(function (resolve, reject) {
      socket.emit(eventName, data);
      socket.on(eventName, result => {
        socket.off(eventName);
        resolve(result);
      });
      setTimeout(reject, 1000);
    });
}