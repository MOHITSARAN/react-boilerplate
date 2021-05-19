import { combineReducers } from "redux";
import simpleReducer from "./test.reducer";
import authReducer from "./auth.reducer";
export default combineReducers({
  globals: simpleReducer,
  auth: authReducer,
});
