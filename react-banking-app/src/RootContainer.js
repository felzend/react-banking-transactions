import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from './Components/Header';
import { setTitle } from './Actions';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AccountRegister from './Pages/AccountRegister';
import AccountsDashboard from './Pages/AccountsDashboard';
import createHistory from 'history/createBrowserHistory'
import TransactionsImporter from './Pages/TransactionsImporter';
import NotificationsArea from './Components/NotificationsArea';
import TransactionsDashboard from './Pages/TransactionsDashboard';

class RootContainer extends Component {
    
    sendMessage = (message) => {
        this.props.socket.send(message);
    }
    render() {
        return (
            <Router>
                <div className="app">
                    <Header title={this.props.app_title}/>            
                    <div className="content container">
                        <div className="current-view">
                            <Switch>
                                <Route path="/" exact component={AccountsDashboard}></Route>
                                <Route path="/accounts" exact component={AccountsDashboard}></Route>
                                <Route path="/accounts/add" component={AccountRegister}></Route>
                                <Route path="/transactions" exact component={TransactionsDashboard}></Route>
                                <Route path="/transactions/add" component={TransactionsImporter}></Route>
                            </Switch>
                        </div>
                        <NotificationsArea/>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        app_title: state.AppReducer.app_title,
        history: createHistory(),
        loading: state.AppReducer.loading,        
        socket: state.AppReducer.socket,       
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTitle: (title) => dispatch(setTitle(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);