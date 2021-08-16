import React from 'react';
import SearchBar from '../searchBar/searchBar';
import Filter from '../selectDiet/index.js';
import Pag from '../pagination/index';
import Sort from '../toSort/sort.js';
import {Link} from 'react-router-dom';
import './Nav.css'

export default function Nav (){  
    return (
        <div className="nav-container">           
                <Filter/>            
                <SearchBar/>           
                <Link to="/create">                    
                    <button  className="buttonCreate">crea una receta</button>                   
                </Link>               
                <Pag/>
                <Sort/>
        </div>
    )
}