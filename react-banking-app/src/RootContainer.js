import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from './Components/Header';
import { setTitle } from './Actions';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import AccountsDashboard from './Pages/AccountsDashboard';

class RootContainer extends Component {
  render() {
      console.log(this.props);
    return (
        <Router>
            <div className="app">
                <Header title={this.props.app_title}/>
                <div className="routes">
                    <Route path="/" component={AccountsDashboard}></Route>
                </div>
                <div className="content">
                    
                </div>
            </div>
        </Router>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        app_title: state.AppReducer.app_title
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTitle: (title) => dispatch(setTitle(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);