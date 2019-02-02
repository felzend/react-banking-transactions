import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand mx-auto" to="/">{this.props.title}</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/accounts">Listar Contas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/transactions">Listar Transações</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/accounts/add">Cadastrar Conta</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/transactions/add">Importar Transações</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
