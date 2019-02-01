import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">               
                <nav id="navbar" className="navbar navbar-light">
                    <span className="navbar-brand mb-0 h1">{this.props.title}</span>
                </nav>
            </div>
        )
    }
}
