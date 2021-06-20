import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe } from "../actions/actions";
import { useEffect } from 'react';
import { addDietType } from "../actions/actions";

export default function Form (){

    useEffect(() => {
        dispatch(addDietType());
    }, [])
    
    const diets = useSelector(state => state.diets)
    const posted = useSelector(state => state.postedRecipe)
    
    function findID (diets) {
        let id = 1
        var indexDiet = []
        for(var i=0; i < diets.length; i++){
            indexDiet.push(id)
            id = id+1
        }
        return indexDiet
    }    
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
    if(e.target.name === "diet"){
        SetRecipesState({...recipesState, diet: [...recipesState.diet, e.target.value]})    
    }
    else SetRecipesState({...recipesState, [e.target.name]: e.target.value})
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

    function changeToId (diets){
        let numberDiet = findID (diets)
        return SetRecipesState({...recipesState, diet: ["algo"]}), console.log(recipesState.diet)         
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Nombre de tu receta" onChange={handleChange} value={recipesState.name}></input>
                <textarea name="resume" placeholder="Descripción de tu receta" onChange={handleChange} value={recipesState.resume}></textarea>
                <input name="spoonacularScore" placeholder="Puntaje de tu receta" onChange={handleChange} value={recipesState.spoonacularScore}></input>
                <input name="healthScore" placeholder="Nivel de 'comida saludable'" onChange={handleChange} value={recipesState.healthScore}></input>
                <textarea name="analyzedInstructions" placeholder="Instrucciones" onChange={handleChange} value={recipesState.analyzedInstructions}></textarea>
                <div>
                {diets.map(diet =>{
                    return(
                        <div>
                            <label>{diet.name}</label>
                            <input name="diet" type="checkBox" onChange={handleChange} value={diet.name}></input>
                        </div>                       
                    )
                }) }
                </div>
                <button>Submit</button> 
            </form>
            <div>{posted}</div>
        </div>
    )
}