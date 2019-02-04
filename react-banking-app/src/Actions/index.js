export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const FETCH_ACCOUNT_TYPES = 'FETCH_ACCOUNT_TYPES';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTION_TYPES = 'FETCH_TRANSACTION_TYPES';

export const FETCH_BANKS = 'FETCH_BANKS';

export const SET_TITLE = 'SET_TITLE';
export const SET_LOADING = 'SET_LOADING';


export function fetchBanks(banks) {
    return { type: FETCH_BANKS, banks };
}
export function fetchAccounts(accounts) {
    return { type: FETCH_ACCOUNTS, accounts };
}
export function fetchAccountTypes(types) {
    return { type: FETCH_ACCOUNT_TYPES, types };
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
export function setLoading(prop, loading) {
    return { type: SET_LOADING, prop, loading };
}