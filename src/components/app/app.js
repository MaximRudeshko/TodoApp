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
            this.createNewItem('Drink cofee'),
            this.createNewItem('Create Awesome Application'),
            this.createNewItem('Have a lunch')
        ]
      }
    }

    createNewItem = (label) => {
        return {
            label,
            done:false,
            important: false,
            id:nextId()
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
        const newItem = this.createNewItem('New');

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem]
            return{
                todoData: newArr
            }
        })
    }
    
    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex(item => item.id === id);

            const oldItem = todoData[index]
            const newItem = {...oldItem, important: !oldItem.important}

            const newArr = [...todoData.slice(0,index),newItem, ...todoData.slice(index + 1)]

            return{
                todoData: newArr
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex(item => item.id === id)

            const oldItem = todoData[index]
            const newItem = {...oldItem, done: !oldItem.done}

            const newArray = [...todoData.slice(0,index),newItem, ...todoData.slice(index + 1)]

            return{
                todoData: newArray
            }
        })
    }
    
    render(){
    
    const doneCount = this.state.todoData.filter(item => item.done).length
    const todoCount = this.state.todoData.length - doneCount;

    return(
        <div className='container'>
          <AppHeader toDo = {todoCount} done = {doneCount}/>
          <div className = 'd-flex'>
           <Search/>
           <FilterPanel/>
          </div>
          <TodoList 
          onDeleted = {this.onDeletedItem}
          todos = {this.state.todoData}
          onToggleDone = {this.onToggleDone}
          onToggleImportant = {this.onToggleImportant}/>
          <AddItemsPanel addItem = {this.addItem}/>
      </div>
      )
    }
  }