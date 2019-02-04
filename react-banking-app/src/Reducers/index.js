import { combineReducers } from "redux";
import AppReducer from './AppReducer';
import AccountsReducer from './AccountsReducer';
import BanksReducer from './BanksReducer';
import TransactionsReducer from './TransactionsReducer';

const rootReducer = combineReducers({
    AppReducer,
    AccountsReducer,
    BanksReducer,
    TransactionsReducer,
});

export default rootReducer;