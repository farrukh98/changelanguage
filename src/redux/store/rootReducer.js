import { combineReducers } from "redux";
import { counterReducer } from "../modules/counter/counterReducer";
import { languageReducer } from "../modules/language/languageReducer";
import { modeReducer } from "../modules/mode/modeReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  mode: modeReducer,
  language:languageReducer,
});
