import React from "react";
import './info.css'


export const MainInfo = () => {
    return (
        <div className="main__header">
            <h1 className="main__welcome">Ocean Trivia</h1>
            <p className="main__text">Welcome to our quiz!</p>
            <p className="main__text">Before starting please choose the difficulty level and the number of questions.</p>
        </div>
    )
}