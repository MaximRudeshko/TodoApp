import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import Search from './components/search-panel'
import TodoList from './components/todo-list'

const App = () => {

  const todoData = [
    {label: 'Drink ofee', important: false},
    {label: 'Create Awesome Application', important: true},
    {label: 'Have a lunch', important: false}
  ]
  return(
    <div>
      <AppHeader/>
      <Search/>
      <TodoList todos = {todoData}/>
  </div>
  )
}
ReactDOM.render(<App/>,document.getElementById('root'));


