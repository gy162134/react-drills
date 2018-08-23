import React, { Component } from 'react';
import './App.css';
import router from './router'
import {HashRouter} from 'react-router-dom'



class App extends Component {
  constructor(){
    super()

    this.state = {
      chars: []
    }
  }


  render() {
    return (
      <HashRouter>
      <div className="App">
        {router}
      </div>
      </HashRouter>
    );
  }
}

export default App;
