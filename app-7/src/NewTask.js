import React, {Component} from 'react'

class NewTask extends Component{
    constructor(props){
        super(props)

        this.state = {
            newTask: ''
        }
    }

    
    
    render(){
        return(
            <div>
            <input placeholder='New Tasks Here :)' onChange={e => this.setState({newTask: e.target.value})}></input>
            <button onClick={()=> this.props.handleNewTask(this.state.newTask)}>Add!</button>
            </div>
        )

    }
}

export default NewTask;