import { actionTypes } from "../../../constants/actionTypes";

export const incrementCounterAction = () => ({
  type: actionTypes.INCREMENT,
});

export const decrementCounterAction = () => ({
  type: actionTypes.DECREMENT,
});

export const addCounterAction = (number) => ({
  type: actionTypes.ADD,
  payload: number,
});

export const subtractCounterAction = (number) => ({
  type: actionTypes.SUBTRACT,
  payload: number,
});
