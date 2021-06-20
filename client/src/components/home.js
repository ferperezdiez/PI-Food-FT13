import React from 'react';
import SearchBar from './searchBar';
import List from './List.js'
import {Link} from 'react-router-dom';
import FilterButton from './filterButton';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addDietType, getAll } from '../actions/actions.js';
import s from './home.module.css'
import { ButtonPag } from './buttonPag';
import firstLoad from './firstLoad';
import ButtonSort from './buttonSort';

export default function Home (){

    const dispatch = useDispatch()
    useEffect(() => {        
       dispatch(addDietType());      
       dispatch(getAll())           
    },[])
   
    firstLoad() 
  

    return(
        <div className={s.div}>
            <div className={s.div}>
                <SearchBar/>
                <FilterButton/>
                <ButtonPag/>
                <ButtonSort/>
                <Link to="/create">
                <button>Crea una receta</button>
                </Link>
                <div>
                <List/>
                </div>
            </div>
        </div>

    )
}
