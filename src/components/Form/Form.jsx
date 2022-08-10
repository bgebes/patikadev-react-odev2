import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem,
  clearCompletedItems,
  filterNone,
  filterActive,
  filterCompleted,
  FilterStatusSelector,
  FilteredTodosSelector,
} from '../../redux/Todos/TodosSlice';
import TodoList from '../TodoList/TodoList';
import './Form.css';

function Form() {
  const filterStatus = useSelector(FilterStatusSelector);
  const dispatch = useDispatch();
  const refInput = useRef();

  const addTodo = (event) => {
    event.preventDefault();

    if (refInput.current.value.length < 1) {
      return;
    }

    dispatch(addItem({ title: refInput.current.value }));
    refInput.current.value = null;
  };

  const length = useSelector(FilteredTodosSelector).length;
  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={addTodo}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              ref={refInput}
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
