import React from 'react';
import SearchBar from './searchBar';
import List from './List.js'
import { useSelector } from 'react-redux';

export default function Home (){

    
    

    return(
        <div>
            <SearchBar/>
            <div>
               <List/>
            </div>
        </div>

    )
}
