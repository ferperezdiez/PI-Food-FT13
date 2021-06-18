import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addRecipe } from '../actions/actions';

export default function RecipeDetail(props) {

    const [idState, setIdState] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        const idParams = props.match.params.id;
        setIdState(idParams)
        dispatch(addRecipe(idParams))        
    }, [])
    
    const state = useSelector(state => state.recipe)
    function summary(){
        return {__html: state.summary};
     }
    
    return (
        <div>            
            <h1>{state.title? state.title : state.name}</h1>
            <h4 dangerouslySetInnerHTML={summary}>Summary: {state.summary}</h4>
            <h4>Score:{state.spoonacularScore}</h4>
            <h4>HealthScore:{state.healthScore}</h4>
            <div>{state.title?
             <ul>
                {state.analyzedInstructions[0].steps.map(instruction => {                    
                   return <li>{instruction.step}</li>
                })}
            </ul>
            : <p>{state.analyzedInstructions}</p>}
            </div>
        </div>
    )
}