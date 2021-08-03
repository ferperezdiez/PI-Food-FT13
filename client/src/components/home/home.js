import React from 'react';
import List from '../list/List.js'
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addDietType, getAll } from '../../actions/actions.js';
import firstLoad from './../firstLoad';
import Nav from '../nav/Nav';
import './home.css';



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
                <button className="buttonCreate">crea una receta</button>
                </div>
               </Link>                
                <List/>                
            </div>
        </div>
    )
    
}
    
