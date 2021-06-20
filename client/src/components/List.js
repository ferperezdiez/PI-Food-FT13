import React from 'react';
import { useSelector } from 'react-redux';
import recipeByUser from "../images/recipeByUser.jpg"
import { Link } from 'react-router-dom';

export default function List (){
    
    const state = useSelector(state => state.filtered)    
    return (
        <div>
            <ul>
         {state.map(function(recipe) {             
             return (
                 <div key={recipe.id}>
                 <li >
                     <Link to={`/home/${recipe.id}`}>
                     <span>{recipe.title? recipe.title : recipe.name}</span>
                     </Link>
                     <p> {recipe.image? <img src={recipe.image}/> :
                         <img src={recipeByUser}/> }</p>
                     <div>{recipe.diets?.map(function(diet) {                        
                         if(typeof diet === 'object'){
                             return (
                                 <label key={diet.name}>{diet.name}</label>                            
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
                     
                 </div>
             )
         })}
            </ul>
        </div>
    )

}