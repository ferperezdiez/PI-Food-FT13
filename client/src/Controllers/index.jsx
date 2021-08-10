import { useDispatch, useSelector } from "react-redux";
import { addSorted, addFiltered } from "../actions/actions";





export const useSort = () => {

    const state = useSelector(state => state.recipes)
    const dispatch = useDispatch()
    
    const descendent = () => {
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

    const ascendent = () => {
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
        
        return {
            ascendent, 
            descendent
    }

}
