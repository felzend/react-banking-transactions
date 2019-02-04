import { FETCH_TRANSACTIONS } from "../Actions";

const initialState = {
    transactions: [],
}

const TransactionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TRANSACTIONS: {
            return {
                ...state,
                transactions: action.transactions
            }
        }        
        default: {
            return state;
        }
    }
}

export default TransactionsReducer;