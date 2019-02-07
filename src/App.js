import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import EventsListContainer from './components/EventsListContainer'
import store from './store'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route path="/" exact component={EventsListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
