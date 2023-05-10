import { increment, decrement } from '../reducers/counterSlice';

export const incrementCounter = () => {
  return (dispatch) => {
    dispatch(increment());
  };
};

export const decrementCounter = () => {
  return (dispatch) => {
    dispatch(decrement());
  };
};
