import React from 'react';
import { Link } from 'react-router-dom';
import s from './landingPage.css'


export default function LandingPage() {
   
    return (
        <div className={s.container}>
            <div>
                <Link to="/home">
                    <button className={s.button}>Ingresar</button>
                </Link>
            </div>
        </div>
        )
}
