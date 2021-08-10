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
        <div >
            <ul className="list_ul">
         {state.map(function(recipe) {                        
             return (
                 <div >
                 <li className="list_li" key={recipe.id}>
                     <Link className="list_link" to={`/home/${recipe.id}`}>
                     <span className="list_title">{recipe.title}</span>
                     </Link>
                     <p> {recipe.image? <img src={recipe.image}/> :
                         <img className="list_img" src={recipeByUser}/> }</p>
                     <div>{recipe.diets?.map(function(diet) {
                         countId++                        
                         if(typeof diet === 'object'){                             
                             return (
                                 <label className="list_label" key={diet.name + countId}>{diet.name}</label>                            
                              )                             
                        }
                        else {                            
                            return(
                                <div>
                                    <label className="list_label" key={diet + countId}>{diet}</label>                                    
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