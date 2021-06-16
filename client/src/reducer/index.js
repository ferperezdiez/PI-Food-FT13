import { ADD_RECIPES, ADD_DIETTYPE, ADD_DIET, ADD_POSTED } from "../actions/actionsName"

const initialState = {
    recipes: [],
    diets: [],
    postedRecipe:""
    
}

export default function reducer (state=initialState, action){
    switch(action.type){
        case ADD_RECIPES: {
            return {
                ...state,
                recipes: action.payload
            }
        }
        case ADD_DIETTYPE: {
            return {
                ...state,
                diets: action.payload
            }
        }
        case ADD_DIET: {
            return {
                ...state,
                diet: action.payload
            }
        }
        case ADD_POSTED: {
            console.log(action.payload)
            return {
                ...state,
                postedRecipe: action.payload
            }
        }
        default: {
            return state
        }
        }
    }
