import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import todosReducer from './reducers/todosSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer
  }
});

export default store;