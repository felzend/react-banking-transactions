import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootContainer from './RootContainer';
import rootReducer from './Reducers';
import { createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="root">
          <RootContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;
