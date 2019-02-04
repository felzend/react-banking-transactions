import React, { Component } from 'react'
import { connect } from 'react-redux';
import { API_URL, handleApiErrors } from '../utils';
import { fetchAccounts } from '../Actions';

class TransactionsImporter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Account_id: '',
            Csv: '',
            Processing: false,
        };
    }
    componentWillMount() {
        this.fetchAccounts();
    }
    fetchAccounts() {
        this.props.fetchAccounts();
    }
    handleChanges = (e) => {
        if(e.target.name === 'Csv') {
            this.setState({'Csv': e.target.files[0]});
            return;
        }
        this.setState({[e.target.name]: e.target.value});
    }
    formSubmit = (e) => {
        e.preventDefault();
        var data = new FormData();        
        data.append('Account', this.state.Account_id);
        data.append('File', this.state.Csv);
        this.setState({Processing: true});
        fetch(API_URL.concat("transactions/add"), {
            'body': data,
            'method': 'POST',            
        })
        .then(response => handleApiErrors(response, "Transações importadas com sucesso.", "Falha ao importar transações."))
        .then(response => {
            this.setState({Processing: false});
        });
    }
    render() {
        return (
            <div className="transactions-importer">
                <div className="card">
                    <div className="card-header">Importar Transações</div>
                    <div className="card-body">
                        <form encType="multipart/form-data" onSubmit={this.formSubmit}>
                            <div className="form-group">
                                <label htmlFor="Account_id">Conta Associada</label>
                                <select className="form-control" name="Account_id" onChange={this.handleChanges} required={true}>
                                    <option value="">Escolha uma Conta</option>
                                    {this.props.accounts.map(account => 
                                        <option key={account.id} value={account.id}>
                                            Agência: {account.agency} - Conta: {account.number} - {account.bank.name}
                                        </option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Csv">Arquivo CSV</label>
                                <input name="Csv" className="form-control" type="file" onChange={this.handleChanges} required={true}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-block" disabled={!this.props.accounts.length || this.state.Processing}>Importar</button>
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
      accounts: state.AccountsReducer.accounts,
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAccounts: () => {
            fetch(API_URL.concat("accounts"))
            .then(response => response.json())
            .then(accounts => dispatch(fetchAccounts(accounts)));
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsImporter);