import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFiltered } from "../actions/actions";


export function ButtonPag(){
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
        <div>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </div>
    )
}