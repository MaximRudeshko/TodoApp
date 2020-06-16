import React from 'react'

import ListItem from '../list-item/list-item'

const TodoList = ({todos}) => {

    const elements = todos.map(item => {

        const {id, ...itemProps} = item

        return(
            <li key = {item.id} className="list-group-item">
                <ListItem {...itemProps}/>
            </li>
        )
    })

    return(
      <ul className='p-0 mt-5'>
        {elements}
      </ul>
    )
}

export default TodoList
