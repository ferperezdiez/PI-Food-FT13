import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css'



export default function LandingPage() {
      
    
    return (
        <div className="container">                      
                <Link to="/home">
                    <button className="landing_button">Ingresar</button>
                </Link>            
        </div>
        )
}
