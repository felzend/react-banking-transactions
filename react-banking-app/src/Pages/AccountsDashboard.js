import React, { Component } from 'react'
import Loading from '../Components/Loading';
import { connect } from 'react-redux';
import { fetchAccounts, setLoading } from '../Actions';
import { API_URL } from '../utils';

class AccountsDashboard extends Component {
  componentWillMount() {
    this.fetchAccounts();
  }
  fetchAccounts() {
    this.props.fetchAccounts();
  }
  render() {
    return (
      <div className="accounts-dashboard">        
        {this.props.loading['accounts-dashboard'] ? (
        <div className="card">
          <div className="card-header">Lista de Contas cadastradas</div>
          <div className="card-body table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center" scope="col">#</th>
                  <th className="text-center" scope="col">Responsável</th>
                  <th className="text-center" scope="col">Banco</th>
                  <th className="text-center" scope="col">Agência</th>
                  <th className="text-center" scope="col">Nº da Conta</th>
                  <th className="text-center" scope="col">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {this.props.accounts.map(account =>
                  <tr key={account.id}>
                    <td className="text-center">{account.id}</td>
                    <td className="text-center">{account.owner}</td>
                    <td className="text-center">{account.bank.name}</td>
                    <td className="text-center">{account.agency}</td>
                    <td className="text-center">{account.number}</td>
                    <td className="text-center">{account.accountType.name}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>          
        </div>
        ) : <Loading/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.AppReducer,
    accounts: state.AccountsReducer.accounts,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccounts: () => {
      fetch(API_URL.concat("accounts"))
      .then(response => response.json())
      .then(accounts => {
        dispatch(fetchAccounts(accounts))
        dispatch(setLoading('accounts-dashboard', true))
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsDashboard);