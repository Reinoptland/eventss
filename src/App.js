import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer'
import CreateEventFormContainer from './components/CreateEventFormContainer'
import EventDetailsContainer from './components/EventDetailsContainer'
import store from './store'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route path="/" exact component={EventsListContainer} />
          <Route path="/events/:id" component={EventDetailsContainer} />
          <Route path="/events/new" exact component={CreateEventFormContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
