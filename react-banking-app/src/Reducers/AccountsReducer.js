import { FETCH_ACCOUNTS, FETCH_ACCOUNT_TYPES } from "../Actions";

const initialState = {
    accounts: [],
    accountTypes: [],
}

const AccountsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ACCOUNTS: {
            return {
                ...state,
                accounts: action.accounts,
            }
        }
        case FETCH_ACCOUNT_TYPES: {
            return {
                ...state,
                accountTypes: action.types,
            }
        }
        default: {
            return state;
        }
    }
}

export default AccountsReducer;