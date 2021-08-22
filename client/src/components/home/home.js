import React from 'react';
import List from '../list/List.js'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addDietType, getAll, first } from '../../actions/actions.js';
import Nav from '../nav/Nav';
import './home.css';



export default function Home (){
    
    const dispatch = useDispatch()    
   
    useEffect(() => {        
        dispatch(addDietType());   
    },[dispatch])

    useEffect(() => {              
        dispatch(getAll())
    },[dispatch])
    
    useEffect(() => {              
        dispatch(first())        
    },[dispatch])
    
        
    return(
            <div className="home_container">                
                <Nav/>                        
                <List/>                
            </div>   
    )    
}
    
