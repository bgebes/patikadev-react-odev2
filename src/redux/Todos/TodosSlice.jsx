import { createSlice } from '@reduxjs/toolkit';

export const TodosSlice = createSlice({
  name: 'Todos',
  initialState: {
    items: [
      {
        id: 0,
        status: 'completed',
        title: 'Learn JavaScript',
      },
      {
        id: 1,
        status: 'uncompleted',
        title: 'Learn React',
      },
      {
        id: 2,
        status: 'uncompleted',
        title: 'Have a life!',
      },
    ],
    filterStatus: {
      all: 'selected',
      active: 'unselected',
      completed: 'unselected',
    },
  },
  reducers: {
    addItem: (state, action) => {
      const lastTodo = state.items.at(-1);
      const lastID = lastTodo ? lastTodo.id : -1;

      state.items.push({
        id: lastID + 1,
        ...action.payload,
      });
    },
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.items = state.items.filter((item) => item.id !== itemID);
    },
    toggleItem: (state, action) => {
      const itemID = action.payload;
      const item = state.items.find((item) => item.id == itemID);
      item.status = item.status === 'completed' ? 'uncompleted' : 'completed';
    },
    clearCompletedItems: (state) => {
      state.items = state.items.filter((item) => item.status !== 'completed');
    },
    filterNone: (state) => {
      state.filterStatus = {
        all: 'selected',
        active: 'unselected',
        completed: 'unselected',
      };
    },
    filterActive: (state) => {
      state.filterStatus = {
        all: 'unselected',
        active: 'selected',
        completed: 'unselected',
      };
    },
    filterCompleted: (state) => {
      state.filterStatus = {
        all: 'unselected',
        active: 'unselected',
        completed: 'selected',
      };
    },
  },
});

export const {
  addItem,
  removeItem,
  toggleItem,
  clearCompletedItems,
  filterNone,
  filterActive,
  filterCompleted,
} = TodosSlice.actions;

export default TodosSlice.reducer;
