import React from 'react';
import SearchBar from '../searchBar/searchBar';
import FilterButton from '../selectDiet/filterButton.js';
import ButtonPag from '../pagination/buttonPag.js';
import ButtonSort from '../toSort/buttonSort.js';
import './Nav.css'

export default function Nav (){ 
    return (
        <div className="nav-container">
            <div className="headerContainer">
            <SearchBar/>
            <FilterButton/>
            <div className="box1">
            <ButtonPag/>
            <ButtonSort/>
            </div>
            </div>
        </div>
    )
}