import { FETCH_BANKS } from "../Actions";

const initialState = {
    banks: [],
};

var BanksReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BANKS: {
            return {
                ...state,
                banks: action.banks
            }
        }
        default: {
            return state;
        }
    }
}

export default BanksReducer;