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
        return true 
        }) 
        dispatch(addSorted(recipeSorted))      
        var lastIndex = (state.length - 1)
        var firstIndex = lastIndex - 9
        var newfilter = state.slice(firstIndex, lastIndex)        
        dispatch(addFiltered(newfilter))
        return true      
    }

    const ascendent = () => {
        var recipeSorted = state.sort(function(a,b){
            if(a.title < b.title) return 1
            if(a.title > b.title) return -1
            if(a.title === b.title) return 0
            return true        
        })
        dispatch(addSorted(recipeSorted))    
            var lastIndex = (state.length - 1)
            var firstIndex = lastIndex - 9
            var newfilter = state.slice(firstIndex, lastIndex)        
            dispatch(addFiltered(newfilter))
            return true   
        }
        
        return {
            ascendent, 
            descendent
    }

}


export const Pagination = () => {
    var page = 0
    var state = useSelector(state => state.recipes)
    const dispatch = useDispatch()
    
    const first = () => {
        var newfilter = state.slice(0, 9)        
        dispatch(addFiltered(newfilter))     
    }
    
    const next = () => {
        page++
        var pages = page * 9
        var lastIndex = (state.length - 1) - pages
        var firstIndex = lastIndex - 9
        var newfilter = state.slice(firstIndex, lastIndex)        
        dispatch(addFiltered(newfilter))         
    }
    const prev = () =>{
        page--
        var pages = page * 9
        var lastIndex = (state.length - 1) - pages
        var firstIndex = lastIndex - 9
        var newfilter = state.slice(firstIndex, lastIndex)       
        dispatch(addFiltered(newfilter))
}
    return {
        prev,
        next,
        first
    }
}
