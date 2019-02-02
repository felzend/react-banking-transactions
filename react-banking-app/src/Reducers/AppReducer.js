import { SET_TITLE } from "../Actions";
import socket from '../Services/NotificationService';

const initialState = {
    'app_title': 'Banking Transaction App',
    'socket': socket
};

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TITLE: {
            return {
                ...state,
                app_title: action.title 
            }
        }
        default: {
            return state;
        }
    }
}

export default AppReducer;