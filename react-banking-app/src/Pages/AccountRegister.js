import React, { Component } from 'react';
import { API_URL, handleApiErrors } from '../utils';
import { fetchAccountTypes, fetchBanks } from '../Actions/index';
import { connect } from 'react-redux';

class AccountRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Owner: '',
            BankId: '',
            Agency: '',
            AccountType_id: '',
        };
    }
    componentDidMount() {
        this.fetchAccountTypes();
        this.fetchBanks();
    }
    addAccount(data) {
        this.props.addAccount(data);
    }
    fetchAccountTypes() {
        this.props.fetchAccountTypes();
    }
    fetchBanks() {
        this.props.fetchBanks();
    }
    handleChanges = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    formSubmit = (e) => {
        e.preventDefault();
        this.addAccount(this.state);
    }
    render() {
        return (
            <div className="accounts-dashboard">
                <div className="card">
                    <div className="card-header">Cadastro de Conta</div>
                    <div className="card-body">
                        <form onSubmit={this.formSubmit}>
                            <div className="form-group">
                                <label htmlFor="Owner">Responsável</label>
                                <input name="Owner" className="form-control" onChange={this.handleChanges} required={true}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BankId">Banco</label>
                                <select className="form-control" name="BankId" onChange={this.handleChanges} required={true}>
                                    <option value="">Escolha uma Opção</option>
                                    {this.props.banks.map(bank => 
                                        <option key={bank.id} value={bank.id}>{bank.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Agency">Nº da Agência</label>
                                <input type="number" min="0" name="Agency" onChange={this.handleChanges} className="form-control" required={true}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Number">Nª da Conta</label>
                                <input name="Number" className="form-control" onChange={this.handleChanges} required={true}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="AccountType_id">Tipo de Conta</label>
                                <select className="form-control" name="AccountType_id" onChange={this.handleChanges} required={true}>
                                    <option value="">Escolha uma Opção</option>
                                    {this.props.accountTypes.map(accountType => 
                                        <option key={accountType.id} value={accountType.id}>{accountType.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-block" disabled={!this.props.accountTypes.length || !this.props.banks.length}>Cadastrar Conta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ...state.AppReducer,
        accountTypes: state.AccountsReducer.accountTypes,
        banks: state.BanksReducer.banks,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        addAccount: (data) => {
            fetch(API_URL.concat('accounts/add'), {
                method: 'POST', 
                body: JSON.stringify(data), 
                headers: {'Content-type': 'application/json'}
            })
            .then(response => handleApiErrors(response, "Conta criada com sucesso.", "Falha ao criar conta"))
            .then(result => window.location.reload());
        },
        fetchBanks: () => {
            fetch(API_URL.concat("banks")).then(response => response.json()).then(banks => dispatch(fetchBanks(banks)))
        },
        fetchAccountTypes: () => {
            fetch(API_URL.concat("account-types")).then(response => response.json()).then(types => dispatch(fetchAccountTypes(types)))
        }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AccountRegister);