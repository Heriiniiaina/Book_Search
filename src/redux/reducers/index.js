import { combineReducers } from "redux";
import { dataReducer } from "./dataReducers";

export default combineReducers({
    data:dataReducer
})