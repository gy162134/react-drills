import React, {Component} from 'react'
import axios from 'axios'

class Details extends Component{
    constructor(){
        super()

        this.state = {
            character: {}
        }
    }

async componentDidMount(){
   await axios.get(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
    .then(res => this.setState({character: res.data}))
}

render(){
    console.log(this.state.character)
    return (
        <div>
            <div>Name: {this.state.character.name}</div>
            <div>Status: {this.state.character.status}</div>
            <div>Gender: {this.state.character.gender}</div>
            <div>Species: {this.state.character.species}</div>
        </div>
    )
}

    
}

export default Details