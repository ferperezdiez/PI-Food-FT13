import { Switch } from "react-router-dom"
import { bindActionCreators } from "redux"
import { ADD_RECIPES } from "../actions/actionsName"

const initialState = {
    recipes: []
}

export default function reducer (state=initialState, action){
    switch(action.type){
        case ADD_RECIPES: {
            return {
                ...state,
                recipes: action.payload
            }
        }
        default: {
            return state
        }
        }
    }
