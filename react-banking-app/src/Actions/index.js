export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const FETCH_ACCOUNT_TYPES = 'FETCH_ACCOUNT_TYPES';

export const ADD_TRANSACTIONS = 'ADD_TRANSACTIONS';
export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTION_TYPES = 'FETCH_TRANSACTION_TYPES';

export const SET_TITLE = 'SET_TITLE';


export function addAccount(account) { // Useless
    return { type: ADD_ACCOUNT, account };
}
export function fetchAccounts() {
    return { type: FETCH_ACCOUNTS };
}
export function fetchAccountTypes() {
    return { type: FETCH_ACCOUNT_TYPES };
}
export function addTransactions(file) { // Useless
    return { type: ADD_TRANSACTIONS, file };
}
export function fetchTransactions() {
    return { type: FETCH_TRANSACTIONS };
}
export function fetchTransactionTypes() {
    return { type: FETCH_TRANSACTION_TYPES };
}
export function setTitle(title) {
    return { type: SET_TITLE, title };
}