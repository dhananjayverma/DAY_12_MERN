import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todoActions';

const Todo = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        onClick={() => dispatch(toggleTodo(id))}
      >
        {text}
      </span>
      <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
    </div>
  );
};

export default Todo;
