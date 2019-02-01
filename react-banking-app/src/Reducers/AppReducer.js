import { SET_TITLE } from "../Actions";

const initialState = {
    'app_title': 'Banking Transaction App',
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