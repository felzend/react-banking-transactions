import React, { Component } from 'react'
import Loading from '../Components/Loading';
import { API_URL } from '../utils';
import { fetchTransactions, setLoading } from '../Actions';
import { connect } from 'react-redux';
import Paginator from '../Components/Paginator';
import moment from 'moment';

class TransactionsDashboard extends Component {
  componentWillMount() {
    this.fetchTransactions();
  }
  fetchTransactions(page) {
    if(page === undefined) page = 1;
    this.props.fetchTransactions(page);
  }
  handlePageChange = (e) => {
    this.props.setLoading('transactions-dashboard', true);
    this.fetchTransactions(e.target.value);
  }
  render() {
    return (
      <div className="transactions-dashboard">
        <div className="card">
          <div className="card-header">Lista de Transações Realizadas</div>
          {(this.props.loading['transactions-dashboard'] !== undefined && !this.props.loading['transactions-dashboard']) ? (
          <div className="table-responsive">
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-center" scope="col">#</th>
                    <th className="text-center" scope="col">Conta</th>
                    <th className="text-center" scope="col">Tipo</th>
                    <th className="text-center" scope="col">Valor</th>
                    <th className="text-center" style={{"width": "30%"}} scope="col">Descrição</th>
                    <th className="text-center" scope="col">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.transactions.data.map(transaction =>
                    <tr key={transaction.id}>
                      <td className="text-center">{transaction.id}</td>
                      <td className="text-center">(ID #{transaction.account.id}) Agência: {transaction.account.agency} - Conta: {transaction.account.number}</td>
                      <td className="text-center">{transaction.transactionType.name}</td>
                      <td className="text-center">R$ {transaction.value}</td>
                      <td className="text-center">{transaction.description}</td>
                      <td className="text-center">{moment(transaction.date).format("DD/MM/YYYY")}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <Paginator transactions={this.props.transactions} handlePageChange={this.handlePageChange}/>
          </div>
          ) : <Loading/>}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.AppReducer,
    transactions: state.TransactionsReducer.transactions,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTransactions: (page) => {
      fetch(API_URL.concat(`transactions?page=${page}`))
      .then(response => response.json())
      .then(transactions => {
        dispatch(fetchTransactions(transactions))
        dispatch(setLoading('transactions-dashboard', false))
      });
    },
    setLoading: (component, load) => dispatch(setLoading('transactions-dashboard', load))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsDashboard);
