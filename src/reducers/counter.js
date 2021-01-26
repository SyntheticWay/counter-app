import {
  DECREMENT,
  INCREMENT,
  RESET,
  SELECT_USER,
} from "../actions/actionTypes";

const initialState = {
  count: 0,
  userOneCount: 0,
  userTwoCount: 0,
  selectedUser: "USER_ONE",
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        userOneCount: state.userOneCount + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        userTwoCount: state.userTwoCount - 1,
      };
    case RESET:
      // return { ...state, count: 0 };
      return { ...state, count: 0, userOneCount: 0, userTwoCount: 0 };

    case SELECT_USER:
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
};
