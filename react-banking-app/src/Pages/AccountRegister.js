import React, { Component } from 'react';
import { API_URL } from '../utils';
import { fetchAccountTypes } from '../Actions/index';
import { connect } from 'react-redux';

class AccountRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Owner: '',
            Bank: '',
            Agency: '',
            AccountType_id: '',
        };
    }
    componentDidMount() {
        this.fetchAccountTypes();
    }
    addAccount(data) {
        this.props.addAccount(data);
    }
    fetchAccountTypes() {
        this.props.fetchAccountTypes();
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
            <form onSubmit={this.formSubmit}>
                <div className="form-group">
                    <label htmlFor="Owner">Responsável</label>
                    <input name="Owner" className="form-control" onChange={this.handleChanges} required={true}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="Bank">Nome do Banco</label>
                    <input name="Bank" className="form-control" onChange={this.handleChanges} required={true}></input>
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
                    <select className="form-control" name="AccountType_id" onChange={this.handleChanges} disabled={!this.props.accountTypes.length} required={true}>
                        <option value="">Escolha uma Opção</option>
                        {this.props.accountTypes.map(accountType => 
                            <option key={accountType.id} value={accountType.id}>{accountType.name}</option>
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Cadastrar Conta</button>
                </div>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      accountTypes: state.AccountsReducer.accountTypes
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        addAccount: (data) => {
            fetch(API_URL.concat('accounts/add'), {
                method: 'POST', 
                body: JSON.stringify(data), 
                headers: {'Content-type': 'application/json'}
            }).then(response => response).then(response => {
                console.log(response);
            });            
        },
        fetchAccountTypes: () => {
            fetch(API_URL.concat("account-types")).then(response => response.json()).then(types => dispatch(fetchAccountTypes(types)))
        }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AccountRegister);