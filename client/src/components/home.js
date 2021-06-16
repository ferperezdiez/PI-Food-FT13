import React from 'react';
import SearchBar from './searchBar';
import List from './List.js'
import {Link} from 'react-router-dom';
import FilterButton from './filterButton';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addDietType} from '../actions/actions.js'

export default function Home (){

    const dispatch = useDispatch()
    useEffect(() => {        
        dispatch(addDietType());      
      },[])   

    return(
        <div>
            <SearchBar/>
            <FilterButton/>
            <Link to="/create">
            <button>Crea una receta</button>
            </Link>
            <div>
               <List/>
            </div>
        </div>

    )
}
