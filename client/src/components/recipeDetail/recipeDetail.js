import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addRecipe } from '../../actions/actions';
import {Link} from "react-router-dom"
import './recipeDetail.css'

export default function RecipeDetail(props) {
 
    
    const dispatch = useDispatch()

    useEffect(() => {
        const idParams = props.match.params.id;
      
        dispatch(addRecipe(idParams))        
    }, [props.match.params.id, dispatch])
    
    const state = useSelector(state => state.recipe)
    function summary(){
        return {__html: state.summary};
     }
   
     var counter = 200

    return (
        <div  className="container-detail">
                <h1  className="title-detail">{state.title? state.title : state.name }</h1>
               <div  className="detail_plate_container">
                    <div  className="plate">
                        <img  className="detail_image" src={state.image} alt="img"/>
                    </div>
               </div>
                <div  className="paragraph-detail">
                    <h4 className="summaryStyle" dangerouslySetInnerHTML={summary()} ></h4>
                </div> 
                <div className="list-container">{state.diets?.map(diet => {
                    if(diet.name){
                        return <label className="label" key={diet.id}>{diet.name}</label>
                    }
                    else return <h4  key={Math.random()} className="label">{diet}</h4>
                })}</div>
              
                <label className="instructions">Instructions:</label>
                <div className="detail_instructions">{state.analyzedInstructions.length > 0?
                <ul className="ulContainer">
                    {state.analyzedInstructions[0].steps.map(instruction => {
                        counter++                        
                        return <li key={counter} className="instructionsRecipe">
                                {instruction.step}
                            </li>
                    })}
                    </ul>
                    : <p>{state.analyzedInstructions}</p>}
            </div>            
                <div className="detail_bottom">
                    <h4 className="label">HealthScore:{state.healthScore}</h4>
                    <h4 className="label">Score:{state.spoonacularScore}</h4>
                    <Link to="/home">
                        <button className="detail_button">Volver</button>    
                    </Link>
                </div>
              
        </div>
    )
}