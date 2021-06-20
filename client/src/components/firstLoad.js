import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFiltered } from "../actions/actions";

export default function firstLoad(){  
    var state = useSelector(state => state.recipes)
    const dispatch = useDispatch()    
    if(state.length === 1) return dispatch(addFiltered(state)) 
    var lastIndex = (state.length - 1) 
    var firstIndex = lastIndex - 9
    var newfilter = state.slice(firstIndex, lastIndex)        
    dispatch(addFiltered(newfilter))    
}