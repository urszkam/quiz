import React from "react";
import logo from './logoo.png'
import './logo.css';


export const Logo = () => {
    return (
        <div className="logo__container">
            <img src={logo}
                alt="quiz logo"
                className="logo__img"/>
        </div>
    );
}
