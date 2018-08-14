import React, { Component } from 'react'

class ArrayDisplay extends Component {
    constructor() {
        super()

        this.state = {
            arr: ['Bird', 'Plane', 'Superman', 'Other Stuff'],
            arrConst: ['Bird', 'Plane', 'Superman', 'Other Stuff']
        }

    }

    changeStuff(e) {
        if (e) {
            var stuffToShow = this.state.arr.map((element, i) => {
                if (element.includes(e)) {
                    return (<h2>{element}</h2>)
                }
            })
        } else {
            stuffToShow = this.state.arrConst
        }

        this.setState({ arr: stuffToShow })

    }

    render() {
        let stuffToShow = this.state.arr.map((element) => { return (<h2>{element}</h2>) })

        return (
            <div>
                <input onChange={e => this.changeStuff(e.target.value)}></input>
                <div> {stuffToShow} </div>
            </div>
        );
    }
}
export default ArrayDisplay