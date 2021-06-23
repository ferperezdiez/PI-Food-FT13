import React from 'react';
import SearchBar from './searchBar';
import List from './List.js'
import {Link} from 'react-router-dom';
import FilterButton from './filterButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addDietType, getAll } from '../actions/actions.js';
import { ButtonPag } from './buttonPag';
import firstLoad from './firstLoad';
import ButtonSort from './buttonSort';
import { addFiltered } from "../actions/actions";
import Nav from './Nav';
import './home.css'


export default function Home (){

    const dispatch = useDispatch()
    useEffect(() => {        
       dispatch(addDietType());   
    },[])
    useEffect(() => {              
        dispatch(getAll())
    },[])
   firstLoad()      
        
    return(
        <div>
            <div>                
                <Nav/>               
                <Link to="/create">
                <div className="box4">
                <button>Crea una receta</button>
                </div>
               </Link>               
                <List/>                
            </div>
        </div>
    )
    
}
    
