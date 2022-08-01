import React from 'react';

function TodoItem({ status, title, destroyTodo, todoState }) {
  const [todos, setTodos] = todoState;

  const toggleTodo = () => {
    const newStatus = status === 'completed' ? 'uncompleted' : 'completed';
    const newState = todos.map((todo) => {
      if (todo.title === title) todo.status = newStatus;
      return todo;
    });

    setTodos(newState);
  };

  return (
    <li className={status}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={status === 'completed' ? true : false}
          onChange={toggleTodo}
        />
        <label>{title}</label>
        <button className="destroy" onClick={destroyTodo} />
      </div>
    </li>
  );
}

export default TodoItem;
