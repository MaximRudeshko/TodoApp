import React from 'react'

import ListItem from './list-item'

const TodoList = ({todos}) => {

    const elements = todos.map(item => {
        return(
            <li>
                <ListItem {...item}/>
            </li>
        )
    })

    return(
      <ul>
        {elements}
      </ul>
    )
}

export default TodoList
