import React from 'react';
import List from '../list/List.js'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addDietType, getAll, first } from '../../actions/actions.js';
import Nav from '../nav/Nav';
import './home.css';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";




export default function Home (){
    
    const dispatch = useDispatch() 
    const isloading = useSelector(state => state.loading)   
    
    useEffect(() => {        
        dispatch(addDietType());   
    },[dispatch])

    useEffect(() => {              
        dispatch(getAll())
    },[dispatch])
    
    useEffect(() => {              
        dispatch(first())        
    },[dispatch])
    
    
   if(isloading) return (
       <div className="home_container_loading">
           <Loader className="loader" type="ThreeDots" color="#00BFFF" height={80} width={80} />
       </div>
   )
   else return (
       <div className="home_container">
               <Nav/>                        
               <List/>
       </div>  
   )
           
           
           
        
       
   }
    
