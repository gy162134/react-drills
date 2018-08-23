import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class People extends Component{
    constructor(){
        super()

        this.state = {
            chars : []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

   async componentDidMount(){
       await axios.get('https://rickandmortyapi.com/api/character/')
        .then(res => {this.setState({chars: res.data.results})})
       }
    
      
    render(){
     let char =  this.state.chars.map(char => 
    {return(
     <div  key={char.id}>
           <Link to={`/details/${char.id}`} > <img src={char.image} alt={char.name}/></Link>
            <div>
            <h6><span>{char.name}</span>({char.species})</h6>
            <p>{char.origin.name}</p>
       </div>
    </div>
    )})
        return(
            <div>
            <h1>Characters</h1>
            {char}
            </div>
        )
    }

}

export default People;