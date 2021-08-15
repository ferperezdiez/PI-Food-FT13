import React from 'react';
import List from '../list/List.js'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addDietType, getAll } from '../../actions/actions.js';
import {FirstLoad} from '../../Controllers';
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
    
    FirstLoad()     
        
    return(
        <div>
            <div>                
                <Nav/>                        
                <List/>                
            </div>
        </div>
    )
    
}
    
