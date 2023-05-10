import { addTodo, toggleTodo } from '../reducers/todosSlice';

export const addNewTodo = (title) => {
  return (dispatch) => {
    const id = Date.now();
    dispatch(addTodo({ id, title }));
  };
};

export const toggleTodoCompleted = (id) => {
  return (dispatch) => {
    dispatch(toggleTodo(id));
  };
};
