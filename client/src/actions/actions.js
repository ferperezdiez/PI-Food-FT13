import { ADD_RECIPES, ADD_DIETTYPE, ADD_POSTED } from "./actionsName";
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

export function addDietType () {
    return(dispatch) => {
        axios.get(`http://localhost:3004/types`)
            .then(response => {
                dispatch({
                    type: ADD_DIETTYPE,
                    payload: response.data
                })
            })
    }
}


export function findDietType (diet){
    return (dispatch) => {
        axios.get(`http://localhost:3004/recipesWithDiets?diet=${diet}`)
        .then(response => {
            dispatch({
                type: ADD_RECIPES,
                payload: response.data
            })
        })
    }
}

export function postRecipe (form){

    return (dispatch) => {
        axios.post(`http://localhost:3004/recipes`, form)
        .then((resolve) => {            
            dispatch({
                type: ADD_POSTED,
                payload: `La reseta ${form.name} fue publicada con exito`
            })
        }).catch(e => {
            dispatch({
                type: ADD_POSTED,
                payload: `No fue posible publicar la reseta ${form.name}`
            })
        });
    }
}