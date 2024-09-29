import { Fetch_Data } from "../action/type";

const initialiseState = {
    data:[]
}

export const dataReducer = (state=initialiseState,action)=>{
    switch(action.type){
        case Fetch_Data:
            return{
                ...state,
                data:action.payload
            }
        default:
            return state
    }
}