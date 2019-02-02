import { WS_URL } from "../utils";

var socket = new WebSocket(WS_URL);

socket.onopen = (event) => { console.log("Event:", event); }
socket.onerror = (error) => alert("Erro de conexão no socket.");
socket.onmessage = (message) => console.log("Server Message:", message);

export default socket;