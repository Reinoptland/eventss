import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import store from './store'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route path="/" exact component={Home} />
        </div>
      </Provider>
    );
  }
}

export default App;
