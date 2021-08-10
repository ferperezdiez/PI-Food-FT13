import React from 'react';
import SearchBar from '../searchBar/searchBar';
import FilterButton from '../selectDiet/filterButton.js';
import ButtonPag from '../pagination/buttonPag.js';
import ButtonSort from '../toSort/buttonSort.js';
import {Link} from 'react-router-dom';
import './Nav.css'

export default function Nav (){ 
    return (
        <div className="nav-container">           
                <FilterButton/>            
                <SearchBar/>           
                <Link to="/create">                    
                    <button  className="buttonCreate">crea una receta</button>                   
                </Link>               
                <ButtonPag/>
                <ButtonSort/>
        </div>
    )
}