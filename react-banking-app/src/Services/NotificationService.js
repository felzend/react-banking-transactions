import { WS_URL } from "../utils";
import { toast } from 'react-toastify';

var socket = new WebSocket(WS_URL);
const notifyPosition = toast.POSITION_BOTTOM_RIGHT;
const autoCloseSeconds = 2000;

socket.onopen = (event) => toast.success('Conectado ao Socket.', {position: notifyPosition, autoClose: autoCloseSeconds})
socket.onerror = (error) => toast.danger("Erro de conexão: ", {position: notifyPosition, autoClose: autoCloseSeconds})
socket.onmessage = (message) => toast.info(message.data, {position: notifyPosition, autoClose: autoCloseSeconds})
socket.onclose = (event) => toast.warn("Desconectado do Socket.", {position: notifyPosition, autoClose: autoCloseSeconds})

export default socket;