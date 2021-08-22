import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { findDietType } from '../../actions/actions';
import "./index.css"
import { Pagination } from "../../Controllers";


export default function Filter() { 
    
    const diets = useSelector(state => state.diets)
    const allRecipes = useSelector(state => state.recipes)
    const dispatch = useDispatch()
    function handleChange(e){
        e.preventDefault()
        dispatch(findDietType(e.target.value))        
    }

    const { first } = Pagination()

    useEffect(() => {
        first()
    }, [allRecipes, first])


    return (
        <form  className="diet_container">
            <select className="diet_select" onChange={handleChange}>
                <option key={0} className="diet_option">Seleccione por tipo de dieta</option>
                {diets.map(function(diet){
                    return(                                 
                            <option key={diet.id} className="diet_option" type="Checkbox" value={diet.name}>{diet.name}</option>     
                    )                        
                })}                   
            </select>           
        </form>        
    )         
}