import React, { Component } from 'react';
import routes from './routes'
import './App.css';
import {HashRouter, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      <br/>
      <Link to="/">Home</Link>
      <Link to="/Signup">Signup</Link>
      <Link to="/Details">Details</Link>
       {routes}
      </div>
      </HashRouter>
    );
  }
}

export default App;
