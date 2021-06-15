import React, {useState} from "react";
import { connect } from "react-redux";


export default function Form (){
    const [recipesState, SetRecipesState] = useState({
        name: '',
        resume: '',
        spoonacularScore: '',
        healthScore: '',
        analyzedInstructions: ''
    })
function handleChange(e){
    SetRecipesState({...recipesState, [e.target.name]: e.target.value})
}

function handleSubmit (e){
   
} 

    return (
        <div>
            <form>
                <input name="name" placeholder="Nombre de tu receta" onChange={handleChange} value={recipesState.name}></input>
                <textarea name="resume" placeholder="Descripción de tu receta" onChange={handleChange} value={recipesState.name}></textarea>
                <input name="spoonacularScore" placeholder="Puntaje de tu receta" onChange={handleChange} value={recipesState.name}></input>
                <input name="healthScore" placeholder="Nivel de 'comida saludable'" onChange={handleChange} value={recipesState.name}></input>
                <textarea name="analyzedInstructions" placeholder="Nombre de tu receta" onChange={handleChange} value={recipesState.name}></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}