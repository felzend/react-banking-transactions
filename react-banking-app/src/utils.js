export const API_URL = 'https://localhost:44339/api/';
export const WS_URL = 'wss://localhost:44339/ws';

export var handleApiErrors = (response, success, error) => {
    if(!response.ok) {
        alert(error.concat(` (${response.status})`));
        return;
    }
    return alert(success);
}