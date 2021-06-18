import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe } from "../actions/actions";
import { useEffect } from 'react';
import { addDietType } from "../actions/actions";

export default function Form (){

    useEffect(() => {        
        dispatch(addDietType());      
      },[]) 

    const diets = useSelector(state => state.diets)
    const posted = useSelector(state => state.postedRecipe)
    console.log(posted)
    const dispatch = useDispatch()
    const [recipesState, SetRecipesState] = useState({
        name: '',
        resume: '',
        spoonacularScore: '',
        healthScore: '',
        analyzedInstructions: '',
        diet: []
    })
function handleChange(e){
    SetRecipesState({...recipesState, [e.target.name]: e.target.value})
}

function handleSubmit (e){
    e.preventDefault()
    dispatch(postRecipe(recipesState))
    SetRecipesState({
        name: '',
        resume: '',
        spoonacularScore: '',
        healthScore: '',
        analyzedInstructions: '',
        diet: []
    })
} 

console.log(diets)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Nombre de tu receta" onChange={handleChange} value={recipesState.name}></input>
                <textarea name="resume" placeholder="Descripción de tu receta" onChange={handleChange} value={recipesState.resume}></textarea>
                <input name="spoonacularScore" placeholder="Puntaje de tu receta" onChange={handleChange} value={recipesState.spoonacularScore}></input>
                <input name="healthScore" placeholder="Nivel de 'comida saludable'" onChange={handleChange} value={recipesState.healthScore}></input>
                <textarea name="analyzedInstructions" placeholder="Instrucciones" onChange={handleChange} value={recipesState.analyzedInstructions}></textarea>                     
                <button>Submit</button>
            </form>
            <div>{posted}</div>
        </div>
    )
}