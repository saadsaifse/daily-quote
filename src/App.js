import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './Quote.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      color: '#000'
    };
  }

  componentWillUpdate(nextProps, nextState){
    if (this.state.color !== nextState.color){
      console.log('color changed');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Quote color={this.state.color}/>
          <div>
            <label style = {{color: '#61dafb'}}>by </label>
            <a
              className="App-link"
              href="https://saadsaifse.wordpress.come"
              target="_blank"
              rel="noopener noreferrer"
            >
              saadsaifse
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
