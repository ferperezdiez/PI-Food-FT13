import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSorted, addFiltered } from "../../actions/actions";
import './buttonSort.css'


export default function ButtonSort (){
    const state = useSelector(state => state.recipes)
    const dispatch = useDispatch()
    function ascendent (){
        var recipeSorted = state.sort(function(a,b){
            if(a.title > b.title) return 1
            if(a.title < b.title) return -1
            if(a.title === b.title) return 0        
        })    
        dispatch(addSorted(recipeSorted))      
        var lastIndex = (state.length - 1)
        var firstIndex = lastIndex - 9
        var newfilter = state.slice(firstIndex, lastIndex)        
        dispatch(addFiltered(newfilter))   
    }
    function descendent (){
        var recipeSorted = state.sort(function(a,b){
            if(a.title < b.title) return 1
            if(a.title > b.title) return -1
            if(a.title === b.title) return 0        
        })
        dispatch(addSorted(recipeSorted))    
        var lastIndex = (state.length - 1)
        var firstIndex = lastIndex - 9
        var newfilter = state.slice(firstIndex, lastIndex)        
        dispatch(addFiltered(newfilter))   
    }
    
    return (
            <div className="sortStyle">
                <button className="sort" onClick={descendent}>sort a/z </button>
                <button className="sort" onClick={ascendent}>sort z/a</button>
            </div>
    )

}