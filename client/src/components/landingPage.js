import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css'


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
