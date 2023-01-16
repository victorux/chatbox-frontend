import { io } from "socket.io-client";
const ENDPOINT = "ws://localhost:8900";

export const socket = io(ENDPOINT);

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