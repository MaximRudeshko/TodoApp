/* eslint-disable default-case */
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
        ],
        term : '',
        filter: 'active'
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

    addItem = (label) => {
        this.setState((state) => {
            const newItem = this.createNewItem(label);
            return{
                todoData: [...state.todoData, newItem]
            }
        })
    }

    onToggleProperty = (id, arr, propName) => {
            const index = arr.findIndex(item => item.id === id)

            const oldItem = arr[index]
            const newItem = {...oldItem, [propName]: !oldItem[propName]}

            return [...arr.slice(0,index), newItem, ...arr.slice(index + 1)]
        
    }
    
    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
/*             const index = todoData.findIndex(item => item.id === id);

            const oldItem = todoData[index]
            const newItem = {...oldItem, important: !oldItem.important}

            const newArr = [...todoData.slice(0,index),newItem, ...todoData.slice(index + 1)] */

            return{
                todoData: this.onToggleProperty(id, todoData, 'important')
            }
        })
    }

    search = (items, term) => {
        if(term.length === 0){
            return items
        }

        return items.filter((item) => item.label.indexOf(term) > -1 )
    }

    onSearchChange = (term) => {
        this.setState({term})
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    filterItems = (items, filter) => {
        if(filter === 'all'){
            return items
        }else if(filter === 'done'){
            return items.filter(item => item.done)
        }else if(filter === 'active'){
            return items.filter(item => !item.done)
        }
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
/*             const index = todoData.findIndex(item => item.id === id)

            const oldItem = todoData[index]
            const newItem = {...oldItem, done: !oldItem.done}

            const newArray = [...todoData.slice(0,index),newItem, ...todoData.slice(index + 1)] */

            return{
                todoData: this.onToggleProperty(id, todoData, 'done')
            }
        })
    }
    
    render(){
    
    const {todoData, term} = this.state
    const doneCount = todoData.filter(item => item.done).length
    const todoCount = todoData.length - doneCount;

    const visibleItems = this.filterItems(this.search(todoData,term), this.state.filter)

    return(
        <div className='container'>
          <AppHeader toDo = {todoCount} done = {doneCount}/>
          <div className = 'd-flex'>
           <Search
           onSearchChange = {this.onSearchChange}/>
           <FilterPanel
           onFilterChange = {this.onFilterChange}
           filter = {this.state.filter}/>
          </div>
          <TodoList 
          onDeleted = {this.onDeletedItem}
          todos = {visibleItems}
          onToggleDone = {this.onToggleDone}
          onToggleImportant = {this.onToggleImportant}/>
          <AddItemsPanel onItemAdded = {this.addItem}/>
      </div>
      )
    }
  }