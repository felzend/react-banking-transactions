import { SET_TITLE, SET_LOADING } from "../Actions";
import socket from '../Services/NotificationService';

const initialState = {
    app_title: 'Banking Transaction App',
    loading: {},    
    socket: socket
};

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TITLE: {
            return {
                ...state,
                app_title: action.title 
            }
        }
        case SET_LOADING: {
            state.loading[action.prop] = action.loading;
            return {
                ...state,
                loading: state.loading,
            }
        }
        default: {
            return state;
        }
    }
}

export default AppReducer;