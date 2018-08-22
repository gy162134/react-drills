import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask';
import List from './List';

class App extends Component {
constructor(){
  super()

  this.state = {
    myList: []
  }

  this.handleNewTask = this.handleNewTask.bind(this)
}

handleNewTask(e){
this.setState({myList: [...this.state.myList, e]})
}

  render() {
    return (
      <div className="App">
      <h1>My List:</h1>
       <NewTask handleNewTask = {this.handleNewTask}/>
       <List myList = {this.state.myList}/>
      </div>
    );
  }
}

export default App;
