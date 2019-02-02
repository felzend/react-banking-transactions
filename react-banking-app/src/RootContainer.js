import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from './Components/Header';
import { setTitle } from './Actions';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import AccountRegister from './Pages/AccountRegister';
import AccountsDashboard from './Pages/AccountsDashboard';
import createHistory from 'history/createBrowserHistory'

class RootContainer extends Component {
    sendMessage = (message) => {
        this.props.socket.send(message);
    }
    render() {
        return (
            <Router onChange={this.onRouteChange}>
                <div className="app">
                    <Header title={this.props.app_title}/>            
                    <div className="content container">
                        <Switch>
                            <Route path="/" exact component={AccountsDashboard}></Route>
                            <Route path="/accounts" exact component={AccountsDashboard}></Route>
                            <Route path="/accounts/add" component={AccountRegister}></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        app_title: state.AppReducer.app_title,
        socket: state.AppReducer.socket,
        ...createHistory(),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTitle: (title) => dispatch(setTitle(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);