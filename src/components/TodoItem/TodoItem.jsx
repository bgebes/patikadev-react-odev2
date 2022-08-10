import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, toggleItem } from '../../redux/Todos/TodosSlice';

function TodoItem({ id, status, title }) {
  const dispatch = useDispatch();

  return (
    <li className={status}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={status === 'completed' ? true : false}
          onChange={() => dispatch(toggleItem(id))}
        />
        <label>{title}</label>
        <button className="destroy" onClick={() => dispatch(removeItem(id))} />
      </div>
    </li>
  );
}

export default TodoItem;
