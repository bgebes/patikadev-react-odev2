import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem,
  clearCompletedItems,
  filterNone,
  filterActive,
  filterCompleted,
} from '../../redux/Todos/TodosSlice';
import TodoList from '../TodoList/TodoList';
import './Form.css';

function Form() {
  const todos = useSelector((state) => state.todos.items);
  const filterStatus = useSelector((state) => state.todos.filterStatus);
  const dispatch = useDispatch();

  const addTodo = (event) => {
    event.preventDefault();

    const text = event.target.value;
    const keyCode = event.keyCode;

    if (keyCode !== 13 || text.length < 1) {
      return;
    }

    dispatch(
      addItem({
        status: 'uncompleted',
        title: text,
      })
    );

    event.target.value = null;
  };

  const getLength = () => {
    if (filterStatus.all === 'selected') {
      return todos.length;
    }

    const lengthActiveTodos = todos.filter(
      (todo) => todo.status == 'uncompleted'
    ).length;
    const lengthCompletedTodos = todos.filter(
      (todo) => todo.status == 'completed'
    ).length;

    return filterStatus.active === 'selected'
      ? lengthActiveTodos
      : lengthCompletedTodos;
  };

  const length = getLength();

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

        <TodoList />

        <footer className="footer">
          <span className="todo-count">
            <strong>{length} </strong>
            item{length > 1 && 's'} left
          </span>

          <ul className="filters">
            <li>
              <a
                href="#/"
                className={filterStatus.all}
                onClick={() => dispatch(filterNone())}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={filterStatus.active}
                onClick={() => dispatch(filterActive())}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={filterStatus.completed}
                onClick={() => dispatch(filterCompleted())}
              >
                Completed
              </a>
            </li>
          </ul>

          <button
            className="clear-completed"
            onClick={() => dispatch(clearCompletedItems())}
          >
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
