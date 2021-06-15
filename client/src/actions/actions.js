import { ADD_RECIPES } from "./actionsName";
import axios from 'axios'


export function findRecipe (name){
    return (dispatch) => {
        axios.get(`http://localhost:3004/recipes?name=${name}`)
        .then(response => {
            dispatch({
                type: ADD_RECIPES,
                payload: response.data
            })
        })
    }
}