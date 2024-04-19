// App.js
import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;
