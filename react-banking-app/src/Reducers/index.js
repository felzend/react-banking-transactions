import { combineReducers } from "redux";
import AppReducer from './AppReducer';
import AccountsReducer from './AccountsReducer';

const rootReducer = combineReducers({
    AppReducer,
    AccountsReducer
});

export default rootReducer;