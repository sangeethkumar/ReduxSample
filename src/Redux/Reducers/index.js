import {combineReducers} from "redux";
import AppReducer from "./AppReducer";

const appReducer = combineReducers(
    {
        appState: AppReducer
    }
)

export default appReducer;
