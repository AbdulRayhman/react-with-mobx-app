import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {inject, Provider} from 'mobx-react';
import Birds from "./component/bird.component";
import Counter from "./component/counter.component";
import UserComponent from "./component/userList.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Provider style={{margin :'10px'}} >
            <Birds/>
        </Provider>
          <Provider style={{margin :'10px'}} >
              <Counter/>
          </Provider>
          <Provider style={{margin :'10px'}} >
              <UserComponent/>
          </Provider>
      </div>
    );
  }
}

export default App;
