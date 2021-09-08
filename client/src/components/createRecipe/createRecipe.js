import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, resetPostedRecipe } from "../../actions/actions";
import { useEffect } from 'react';
import { addDietType } from "../../actions/actions";
import { Link } from "react-router-dom";
import './createRecipe.css'
import swal from 'sweetalert';


export default function Form (){

   
   const dispatch = useDispatch()
    
       useEffect(() => {         
           dispatch(addDietType());
       }, [dispatch])
   

    const form = {
        title: '',
        resume: '',
        spoonacularScore: '',
        healthScore: '',
        analyzedInstructions: '',
        diet: []
    }
    
    const diets = useSelector(state => state.diets)
    const posted = useSelector(state => state.postedRecipe)
    const [name, setName] = useState('')
    const [recipesState, SetRecipesState] = useState(form)
    const [spoonScoreErr, setSpoonScoreErr] = React.useState('')
    const [healthScoreErr, setHealthScoreErr] = React.useState('')
    
    function checkBoxSet (array) {
        let obj = {}
        array.map(diet => {
           return obj[diet.name] = false
        })
        return obj
    }

    const [categories, setCategories ]= useState(checkBoxSet(diets))

    function handleChange(e){
        if(e.target.name === "diet"){
            setCategories({...categories, [e.target.value]: e.target.checked})
            SetRecipesState({...recipesState, diet: [...recipesState.diet, e.target.value]})    
        }
        else SetRecipesState({...recipesState, [e.target.name]: e.target.value})
    }
    
    
   
    function handleSubmit (e){    
    e.preventDefault() 
    dispatch(postRecipe(recipesState))
    setName(recipesState.title)
    SetRecipesState(form)
    setCategories(checkBoxSet(diets))      
    } 

    function sweet(){        
        swal({
            icon: posted,
            title: posted === 'success' ? `La receta "${name}" fue publicada con éxito`:
            `No fue posible publicar la receta "${name}"`,
            text: "  ",
            button: null,
            timer: 2000
        })
        dispatch(resetPostedRecipe())
    }

    function validateNumber(e) {
    let val = e.target.value
    let spoonacularScore = 'spoonacularScore'
    let healthScore = 'healthScore'
    if(!/[0-9]/.test(val)) {
        
        if(e.target.name === spoonacularScore) setSpoonScoreErr('should be a number')          
        if(e.target.name === healthScore) setHealthScoreErr('should be a number');
    }
     else {
        if(e.target.name === spoonacularScore) setSpoonScoreErr('')
        if(e.target.name === healthScore) setHealthScoreErr('')
    }
    SetRecipesState({...recipesState, [e.target.name]: e.target.value});
   
  }

    return (
        <div className="fondo">
            <form className="form_create" onSubmit={handleSubmit}>
                <input className="form_input" name="title" placeholder="Nombre de tu receta" onChange={handleChange} value={recipesState.title}></input>
                <textarea className="form_textarea" name="resume" placeholder="Descripción de tu receta" onChange={handleChange} value={recipesState.resume}></textarea>
                <input className="form_input" name="spoonacularScore" placeholder="Puntaje de tu receta" onChange={(e) => validateNumber(e)} value={recipesState.spoonacularScore}></input>
                {!spoonScoreErr ? null : <span>{spoonScoreErr}</span>}
                <input className="form_input" name="healthScore" placeholder="Nivel de 'comida saludable'" onChange={(e) => validateNumber(e)} value={recipesState.healthScore}></input>
                {!healthScoreErr ? null : <span>{healthScoreErr}</span>}
                <textarea className="form_textarea" name="analyzedInstructions" placeholder="Instrucciones" onChange={handleChange} value={recipesState.analyzedInstructions}></textarea>
                <div>
                {diets.map(diet =>{
                    return(
                        <div key={diet.id}>
                            <label>{diet.name}</label>                           
                            <input className="form_input" name="diet" type="checkBox" 
                            onChange={(e) => handleChange(e)} value={diet.name}
                            {...(categories[diet.name] ? {checked: 'checked'} : {checked: false})}
                            ></input>                                                       
                        </div>                       
                    )
                }) }
                </div>
                <button className="form_button">Submit</button> 
                <Link to='/home'>
                    <button className="form_button">Volver</button>
                </Link>
            </form>
            <div>{posted.length > 1 ? sweet(): null}</div>
            <div>            
            </div>            
        </div>
    )
}