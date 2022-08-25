import { combineReducers } from "@reduxjs/toolkit";
import todoList from "./todoListReducer";

const rootReducer = combineReducers({
    todoList,
})

export default rootReducer