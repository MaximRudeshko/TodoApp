import React from 'react';
import ReactDOM from 'react-dom';
import nextId from 'react-id-generator';
import './index.css'


import AppHeader from './components/app-header';
import Search from './components/search-panel'
import TodoList from './components/todo-list';
import FilterPanel from './components/filter-panel'

const App = () => {

  const todoData = [
    {label: 'Drink ofee', important: false, id: nextId()},
    {label: 'Create Awesome Application', important: true, id: nextId()},
    {label: 'Have a lunch', important: false, id: nextId()}
  ]
  return(
    <div className='container'>
      <AppHeader/>
      <div className = 'd-flex'>
       <Search/>
       <FilterPanel/>
      </div>
      <TodoList todos = {todoData}/>
  </div>
  )
}
ReactDOM.render(<App/>,document.getElementById('root'));


