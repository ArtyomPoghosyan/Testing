import { combineReducers } from "redux";
import {todoList} from "./todoList"
const rootReducers = combineReducers({
    todoList:todoList
})

export default rootReducers