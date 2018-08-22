import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      luke: ''
    }
  }


componentDidMount(){
  axios.get('https://swapi.co/api/people/1').then(res => this.setState({luke: res.data}))
}

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.luke.name}</h1>
        <h1>Gender: {this.state.luke.gender}</h1>
        <h1>Hair Color: {this.state.luke.hair_color}</h1>
        <h1>Eye Color: {this.state.luke.eye_color}</h1>
      </div>
    );
  }
}

export default App;
