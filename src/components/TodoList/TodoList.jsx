import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todoState, filteredTodos }) {
  const [todos, setTodos] = todoState;

  const destroyTodo = (todo) => {
    setTodos([...todos.filter((item) => item !== todo)]);
  };

  const TodoResults = filteredTodos === null ? todos : filteredTodos;

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {TodoResults.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              title={todo.title}
              status={todo.status}
              destroyTodo={() => destroyTodo(todo)}
              todoState={[todos, setTodos]}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
