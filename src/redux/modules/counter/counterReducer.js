import { actionTypes } from "../../../constants/actionTypes";

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case actionTypes.INCREMENT:
        return state + 1;
      case actionTypes.DECREMENT:
        return state - 1;
      case actionTypes.ADD:
          return state + action.payload;
      case actionTypes.SUBTRACT:
          return state - action.payload;
      default:
        return state;
    }
  };
  