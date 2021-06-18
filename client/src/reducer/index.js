import { ADD_RECIPES, ADD_DIETTYPE, ADD_DIET, ADD_POSTED, ADD_FILTERED, ADD_RECIPE } from "../actions/actionsName"

const initialState = {
    recipes: [],
    diets: [],
    postedRecipe:"",
    filtered: [],
    recipe: {}
    
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
            return {
                ...state,
                postedRecipe: action.payload
            }
        }
        case ADD_FILTERED: {
            return {
                ...state,
                filtered: action.payload
            }
        }
        case ADD_RECIPE: {            
            return {
                ...state,
                recipe: action.payload
            }
        }
        default: {
            return state
        }
        }
    }
