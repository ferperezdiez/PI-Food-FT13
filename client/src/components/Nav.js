import React from 'react';
import SearchBar from './searchBar';
import FilterButton from './filterButton';
import { ButtonPag } from './buttonPag';
import ButtonSort from './buttonSort';
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