import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      toDo: [],
      newItem: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleInput(e){
    this.setState({newItem: e})
  }

  handleClick(){
    let tempArr = this.state.toDo
    tempArr.push(this.state.newItem)
    this.setState({toDo: tempArr})
  }

  render() {
      let list =this.state.toDo.map((e, i)=>{
        return(<Todo key={i} toDo={e}/>)
      })

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={(e) => this.handleInput(e.target.value)}></input>
        <button onClick={()=> this.handleClick()}>Add</button>
      
        {list}
      </div>
    );
  }
}

export default App;
