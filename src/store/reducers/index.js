import { combineReducers } from "redux";
import app from "./app";
import articles from "./articles";
import users from "./users";

const rootReducer = combineReducers({
  app,
  articles,
  users,
});

export default rootReducer;
