import React from 'react'
import Task from './Task'

const List = props => {
    return(
        <div>
            {props.myList.map((e,i) => 
            <p><Task list = {props.myList[i]}/></p>
        )}</div>
    )
}

export default List;