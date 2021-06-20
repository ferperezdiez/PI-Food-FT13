import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { findDietType } from '../actions/actions';

export default function FilterButton() {
    const diets = useSelector(state => state.diets)
    const dispatch = useDispatch()

    function handleChange(e){
        e.preventDefault()
        dispatch(findDietType(e.target.value))
    }

    return (
        <form>
            <select onChange={handleChange}>
                {diets.map(function(diet){
                    return(                                 
                        <option key={diet.id} type="Checkbox" value={diet.name}>{diet.name}</option>                   
                    )
                })}                   
            </select>           
        </form>
    )
}