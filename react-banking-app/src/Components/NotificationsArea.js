import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class NotificationsArea extends Component {    
    render() {
        return (
        <div className="notifications-area">
            <ToastContainer />
        </div>
        )
    }
}