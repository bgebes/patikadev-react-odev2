import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector((state) => state.todos.items);
  const filterStatus = useSelector((state) => state.todos.filterStatus);

  const activeTodos = todos.filter((todo) => todo.status === 'uncompleted');
  const completedTodos = todos.filter((todo) => todo.status === 'completed');
  const filteredTodos =
    filterStatus.all === 'selected'
      ? todos
      : filterStatus.active === 'selected'
      ? activeTodos
      : completedTodos;

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              id={todo.id}
              title={todo.title}
              status={todo.status}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
