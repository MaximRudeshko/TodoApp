import React, {Component} from 'react';
import nextId from 'react-id-generator';

import AppHeader from '../app-header';
import Search from '../search-panel'
import TodoList from '../todo-list';
import FilterPanel from '../filter-panel';
import AddItemsPanel from '../add-item-panel'

export default class App extends Component{
    constructor(){
      super();
      this.state = {
        todoData : [
          {label: 'Drink cofee', important: false, id: nextId()},
          {label: 'Create Awesome Application', important: true, id: nextId()},
          {label: 'Have a lunch', important: false, id: nextId()}
        ]
      }
    }

    onDeletedItem = (id) =>{
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((item) => item.id ===id)

            const newArr = [...todoData.slice(0,idx), ...todoData.slice(idx + 1)];

            return{
                todoData: newArr
            }
        })
    }

    addItem = () => {
        const newItem = {
            label: 'newItem',
            important: false,
            id:nextId()
        }
        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem]
            console.log(newArr)
            return{
                todoData: newArr
            }
        })
    }
    
    render(){
      return(
        <div className='container'>
          <AppHeader/>
          <div className = 'd-flex'>
           <Search/>
           <FilterPanel/>
          </div>
          <TodoList 
          onDeleted = {this.onDeletedItem}
          todos = {this.state.todoData}/>
          <AddItemsPanel addItem = {this.addItem}/>
      </div>
      )
    }
  }