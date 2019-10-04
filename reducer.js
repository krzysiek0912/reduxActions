import { combineReducers } from "redux";
import comments from "./commentsReducer";
import users from "./usersReducer";

const app = combineReducers({
  comments,
  users
});
