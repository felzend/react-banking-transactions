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
export function fetchAccounts(accounts) {
    return { type: FETCH_ACCOUNTS, accounts };
}
export function fetchAccountTypes(types) {
    return { type: FETCH_ACCOUNT_TYPES, types };
}
export function addTransactions(file) { // Useless
    return { type: ADD_TRANSACTIONS, file };
}
export function fetchTransactions(transactions) {
    return { type: FETCH_TRANSACTIONS, transactions };
}
export function fetchTransactionTypes(types) {
    return { type: FETCH_TRANSACTION_TYPES, types };
}
export function setTitle(title) {
    return { type: SET_TITLE, title };
}