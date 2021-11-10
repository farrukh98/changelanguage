import { actionTypes } from "../../../constants/actionTypes";

// agar state = true busa light mode ishlasin
// agar state = false busa dark mode ishlasin
export const modeReducer = (state = true, action) => {
  switch (action.type) {
    case actionTypes.MAKE_DARK:
      return false;
    case actionTypes.MAKE_LIGHT:
      return true;
    default:
      return state;
  }
};
