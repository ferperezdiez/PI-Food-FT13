import React from 'react';
import { useSelector } from 'react-redux';
import recipeByUser from "../../images/recipeByUser.jpg"
import { Link } from 'react-router-dom';
import './List.css'



export default function List (){ 

    const state = useSelector(state => state.filtered) 
    var countId = 0;

    return ( 
        <div className="list_container">
            <ul className="list_ul">
         {state?.map(function(recipe) {                         
            return (
                <div key={countId++}>
                    <li key={countId++} className="list_li">
                        <Link  className="list_link" to={`/home/${recipe.id}`}>
                            <span className="list_title">{recipe.title}</span>
                        </Link>
                        <p> {recipe.image? <img src={recipe.image} alt="recipe"/> :
                        <img className="list_img" src={recipeByUser} alt="img"/> }</p>
                        <div key={Math.random()}>{recipe.diets?.map(function(diet) {
                            countId++                        
                            if(typeof diet === 'object'){                             
                            return <label className="list_label" key={countId}>{diet.name}</label> }
                            else return(
                                    <div key={countId++}> 
                                        <label className="list_label" 
                                        key={countId}>{diet}</label>                                    
                                    </div> )
                            })}
                        </div>
                    </li>                     
                 </div>
            )
         })}
            </ul>
        </div>
    )

}