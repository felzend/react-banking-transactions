import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <FontAwesomeIcon icon={faSpinner} pulse/>
      </div>
    )
  }
}
