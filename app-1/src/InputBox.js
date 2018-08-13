import React, {  Component } from 'react'

class InputBox extends Component{
    constructor(){
        super()

        this.state = {
            userinput: ''
        }

    this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({userinput: e})
    }

    render(){

        return(
        <div>
            <input onChange={(e) => this.handleChange(e.target.value)}></input>
            <div>{this.state.userinput}</div>
        </div>


        )
    }
    
}

export default InputBox