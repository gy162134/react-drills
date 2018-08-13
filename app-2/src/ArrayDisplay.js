import React, {Component} from 'react'

class ArrayDisplay extends Component{
    constructor(){
        super()

        this.state = {arr: ['Bird?', 'Plane?', 'Superman!!']}
    }
    

    render() {
        let stuffToShow = this.state.arr.map( (element) => {
          return (<h2>{ element }</h2>)
        })
    
        return (
          <div>
            { stuffToShow }
          </div>
        );
      }
}
export default ArrayDisplay