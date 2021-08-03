import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import recipeByUser from "../../images/recipeByUser.jpg"
import { Link } from 'react-router-dom';
import './List.css'
import firstLoad from '../firstLoad';


export default function List (){ 
    
    /*
Entre los requerimientos provistos, estaba la de crear un modelo Recipe que debía contener 
una propiedad "nombre", mientras que de la API el nombre de la receta llega como "title".
Este componente se encarga de renderizar 9 recetas filtradas según indicación del usuario.
*/

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
                     <span>{recipe.title}</span>
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