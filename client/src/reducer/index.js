import { ADD_RECIPES, ADD_DIETTYPE, ADD_DIET, ADD_POSTED, ADD_FILTERED, ADD_RECIPE, ADD_MESSAGE, RESET_MESSAGE } from "../actions/actionsName"

const initialState = {
    recipes: [], // Propiedad que recibe de API un listado de recetas
    diets: [], // Propiedad que carga los tipos de recetas
    postedRecipe:'', // propiedad que recibe un mensaje de confirmación o rechazo de un post.
    filtered: [], // propiedad que contiene 9 recetas filtradas.
    recipe: {}, // propiedad que contiene una receta seleccionada por el uruario.
    searchError: "" // Propiedad que contiene un mensaje de error de la búsqueda por key en API
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
        case ADD_MESSAGE: {
            return {
                ...state,
                searchError: action.payload
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
        case RESET_MESSAGE:
            return {
                ...state,
                searchError: ""
            }
        default: {
            return state
        }
        }
    }
