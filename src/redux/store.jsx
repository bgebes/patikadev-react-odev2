import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from './Todos/TodosSlice';

export const store = configureStore({
  reducer: {
    todos: TodosReducer,
  },
});
