import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { findDietType } from '../actions/actions';
import "./filterButton.css"

export default function FilterButton() {

    /*
    Componente encargado de renderizar un selector desplegable para filtrar los resultados
    según alguna dieta en particular.
    */

    const diets = useSelector(state => state.diets)
    const dispatch = useDispatch()

    function handleChange(e){
        e.preventDefault()
        dispatch(findDietType(e.target.value))
    }

    return (
        <div className="box3">

        <form>
            <select onChange={handleChange}>
                {diets.map(function(diet){
                    return(                                 
                        <option key={diet.id} type="Checkbox" value={diet.name}>{diet.name}</option>                   
                    )
                })}                   
            </select>           
        </form>
        </div>
    )
}