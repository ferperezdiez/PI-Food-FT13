import React from 'react';
import { useSelector } from 'react-redux';
import recipeByUser from "../images/recipeByUser.jpg"
import { Link } from 'react-router-dom';
import './List.css'

export default function List (){
    var countId = 0;
    const state = useSelector(state => state.filtered)    
    return (
        <div>
            <ul>
         {state.map(function(recipe) {                        
             return (
                 <div >
                 <li key={recipe.id}>
                     <Link to={`/home/${recipe.id}`}>
                     <span>{recipe.title? recipe.title : recipe.name}</span>
                     </Link>
                     <p> {recipe.image? <img src={recipe.image}/> :
                         <img src={recipeByUser}/> }</p>
                     <div>{recipe.diets?.map(function(diet) {
                         countId++                        
                         if(typeof diet === 'object'){                             
                             return (
                                 <label key={diet.name + countId}>{diet.name}</label>                            
                              )                             
                        }
                        else {                            
                            return(
                                <div>
                                    <label key={diet + countId}>{diet}</label>                                    
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