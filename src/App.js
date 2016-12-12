import React, { Component } from 'react';
import './css/App.css';

import Header from './components/Header';
import Events from './components/Events';
import EventsStore from './stores/EventsStore';

class App extends Component {

  constructor() {
    super();
    this.state = {
      events: EventsStore.getAll()
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Events events={this.state.events}/>
      </div>
    );
  }
}

export default App;
