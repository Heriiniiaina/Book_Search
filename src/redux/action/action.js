import { Fetch_Data } from "./type";
const URL = "https://openlibrary.org/search.json?title="
export const fetchData = (title)=>{
    return async (dispatch)=>{
        try {
            const response = await fetch(`${URL}${title}`)
            const data = await response.json()
            dispatch({
                type:Fetch_Data,
                payload:data
            })
        } catch (error) {
            
        }
    }
}