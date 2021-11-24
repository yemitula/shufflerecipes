import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import recipes from "./recipe";

export default combineReducers({
  auth,
  message,
  recipes,
});
