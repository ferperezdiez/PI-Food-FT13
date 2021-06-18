import React from 'react';
import { Link } from 'react-router-dom';
import s from './landingPage.module.css'


export default function LandingPage() {
   
    return (
        <container >
            <div className={s.container}>
                <Link to="/home">
                    <button className={s.button}>Ingresar</button>
                </Link>
            </div>
        </container>
        )
}
