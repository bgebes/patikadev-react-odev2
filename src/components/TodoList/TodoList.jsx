import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import { FilteredTodosSelector } from '../../redux/Todos/TodosSlice';

function TodoList() {
  const filteredTodos = useSelector(FilteredTodosSelector);

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
