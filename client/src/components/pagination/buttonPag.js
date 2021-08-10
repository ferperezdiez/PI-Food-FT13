import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFiltered } from "../../actions/actions";
import "./buttonPage.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



/*
Como parte de los requerimientos estaba la limitación de utilizar librerías de paginado.
En este componente se realiza esa funcionalidad.
*/

 export default function ButtonPag(){
    var page = 0
    var state = useSelector(state => state.recipes)
    const dispatch = useDispatch()
    
    function next(){
        page++
        var pages = page * 9
        var lastIndex = (state.length - 1) - pages
        var firstIndex = lastIndex - 9
        var newfilter = state.slice(firstIndex, lastIndex)        
        dispatch(addFiltered(newfilter))
        
        
    }
    function prev(){
        page--
        var pages = page * 9
        var lastIndex = (state.length - 1) - pages
        var firstIndex = lastIndex - 9
        var newfilter = state.slice(firstIndex, lastIndex)       
        dispatch(addFiltered(newfilter))
}

    
    return (
        <div className="pagination_container" >
            <button className="pagination_left" onClick={prev}><FaChevronLeft/>  </button>
            <button className="pagination_right" onClick={next}><FaChevronRight/></button>
        </div>
    )
}