import { ADD_RECIPES, ADD_DIETTYPE, ADD_POSTED, ADD_FILTERED, ADD_RECIPE, ADD_MESSAGE, RESET_MESSAGE } from "./actionsName";
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
        .catch(e => {
            dispatch({
                type: ADD_MESSAGE,
                payload: `No se encontró una receta con ese nombre`
            })
        });
    }
}

export function reset () {
    return{
        type: RESET_MESSAGE,
       
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
        axios.get(`http://localhost:3004/recipes?diet=${diet}`)
        .then(response => {
            dispatch({
                type: ADD_RECIPES,
                payload: response.data
            })
        })
    }
}

export const postRecipe =  (form) =>  async (dispatch) => {
        try {
            await axios.post(`http://localhost:3004/recipes`, form)
             dispatch({ type: ADD_POSTED, payload: "success" })
            }
            catch(e){dispatch({ type: ADD_POSTED, payload: "error" })}}

export const resetPostedRecipe = () => (dispatch) => dispatch({type: ADD_POSTED, payload: ""})            
                 



export function getAll (){
    return (dispatch) => {
        axios.get(`http://localhost:3004/recipes`)
        .then(response => {
            dispatch({
                type: ADD_RECIPES,
                payload: response.data
            })
        })
    }
}

export function addFiltered(filtered){    
    return {        
        type: ADD_FILTERED,
        payload: filtered
    }
}

export function addSorted(sorted){
    return {
        type: ADD_RECIPES,
        payload: sorted
    }
}

export function addRecipe(id){
    return (dispatch) => {
        axios.get(`http://localhost:3004/recipes/${id}`)
            .then(response =>{                
                dispatch({
                    type: ADD_RECIPE,
                    payload: response.data
                })
            })
    }
}