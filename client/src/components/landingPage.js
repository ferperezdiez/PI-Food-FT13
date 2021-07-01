import React from 'react';
import { Link } from 'react-router-dom';
import firstLoad from './firstLoad';
import './landingPage.css'
import { useState } from 'react';
import axios from 'axios';


export default function LandingPage() {
      
    
    return (
        <div className="container">           
            <div className="button-container">                
                <Link to="/home">
                    <button className="button">Ingresar</button>
                </Link>
            </div>
        </div>
        )
}
