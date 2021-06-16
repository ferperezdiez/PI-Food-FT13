import React from 'react';
import { useSelector } from 'react-redux';
import recipeByUser from "../images/recipeByUser.jpg"

export default function List (){
    
    const state = useSelector(state => state.recipes)
    
    
    return (
        <div>
            <ul>
         {state.map(function(recipe) {
             
             return (
                 <li>
                     <span>{recipe.title? recipe.title : recipe.name }</span>
                     <p>
                         {recipe.image? <img src={recipe.image}/> :
                         <img src={recipeByUser}/> }</p>
                     <div>{recipe.diets.map(function(diet) {                        
                         if(typeof diet === 'object'){
                             return (
                                 <label>{diet.name}</label>                            
                              )                             
                        }
                        else {
                            return(
                                <div>
                                    <label>{diet}</label>                                    
                                </div>
                            )
                        }
                     })}</div>
                 </li>
             )
         })}
            </ul>
        </div>
    )

}