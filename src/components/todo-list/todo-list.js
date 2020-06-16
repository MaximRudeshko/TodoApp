import React from 'react'

import ListItem from '../list-item/list-item'

export default class TodoList extends React.Component{
  render(){
    const {todos} = this.props;

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
}


