import { DECREMENT, INCREMENT, RESET, SELECT_USER } from "./actionTypes";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const selectUser = (user) => {
  return {
    type: SELECT_USER,
    payload: user,
  };
};
