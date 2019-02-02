import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAccounts } from '../Actions';
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
      <div className="account-dashboard">
        <p>{this.props.accounts.length}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.AccountsReducer.accounts,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccounts: () => {
      fetch(API_URL.concat("accounts")).then(response => response.json()).then(accounts => dispatch(fetchAccounts(accounts)))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsDashboard);