import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import './Form.css';

function Form() {
  const [todos, setTodos] = useState([
    {
      status: 'completed',
      title: 'Learn JavaScript',
    },
    {
      status: 'uncompleted',
      title: 'Learn React',
    },
    {
      status: 'uncompleted',
      title: 'Have a life!',
    },
  ]);

  const [filteredTodos, setFilteredTodos] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    all: 'selected',
    active: 'unselected',
    completed: 'unselected',
  });

  const addTodo = (event) => {
    const text = event.target.value;
    const keyCode = event.keyCode;

    if (keyCode !== 13 || text.length < 1) {
      return;
    }

    setTodos([
      ...todos,
      {
        status: 'uncompleted',
        title: text,
      },
    ]);

    event.target.value = null;
  };

  const clearCompletedTodos = () => {
    setTodos([...todos.filter((todo) => todo.status === 'uncompleted')]);
    setFilteredTodos([
      ...filteredTodos.filter((todo) => todo.status === 'uncompleted'),
    ]);
  };

  const filterNone = () => {
    setFilteredTodos(null);
    setSelectedFilters({
      all: 'selected',
      active: 'unselected',
      completed: 'unselected',
    });
  };

  const filterActive = () => {
    setFilteredTodos(todos.filter((todo) => todo.status === 'uncompleted'));
    setSelectedFilters({
      all: 'unselected',
      active: 'selected',
      completed: 'unselected',
    });
  };
  const filterCompleted = () => {
    setFilteredTodos(todos.filter((todo) => todo.status === 'completed'));
    setSelectedFilters({
      all: 'unselected',
      active: 'unselected',
      completed: 'selected',
    });
  };

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              onKeyUp={addTodo}
            />
          </form>
        </header>

        <TodoList todoState={[todos, setTodos]} filteredTodos={filteredTodos} />

        <footer className="footer">
          <span className="todo-count">
            <strong>
              {filteredTodos === null
                ? todos.filter((todo) => todo.status === 'uncompleted').length
                : filteredTodos.length}{' '}
            </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className={selectedFilters.all} onClick={filterNone}>
                All
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={selectedFilters.active}
                onClick={filterActive}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={selectedFilters.completed}
                onClick={filterCompleted}
              >
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed" onClick={clearCompletedTodos}>
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default Form;
