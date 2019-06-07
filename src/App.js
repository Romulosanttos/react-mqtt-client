import React, { Component } from 'react';
import { Connector, subscribe } from 'react-mqtt';

import logo from './asserts/mqtt-logo.png';
import './App.css';


import _MessageContainer from './components/MessageContainer.js';

const MessageContainer = subscribe({topic: '@near/demo'})(_MessageContainer);


class App extends Component {
  render() {
    return (
      <Connector mqttProps="ws://test.mosca.io/">
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to our MQTT-Demo</h2>
        </div>
        <MessageContainer/> 
      </div>
      </Connector>
    );
  }
}

export default App;
