import React from 'react';
import SearchBar from './searchBar';
import FilterButton from './filterButton';
import { ButtonPag } from './buttonPag';
import ButtonSort from './buttonSort';

export default function Nav (){
    return (
        <div>
            <SearchBar/>
            <FilterButton/>
            <ButtonPag/>
            <ButtonSort/>
        </div>
    )
}