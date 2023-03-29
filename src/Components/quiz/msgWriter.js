import React from "react";
import Typewriter from 'typewriter-effect';
import './msgWriter.css';

export const MsgWriter = (props) => {
    const {isCorrect} = props;
    const messages = {
        'true': ["Correct!", "Congrats!", "Good job!"],
        'false': ["Incorrect :(", "Not This Time :(", "Sorry :("]
    }

    const randomMsg = (isCorrect) => {
        const random = Math.floor(Math.random()*messages[isCorrect].length);
        return messages[isCorrect][random];
    }
    randomMsg(isCorrect);

    return (
        <div className="typewriter__container">
            <h1>
            <Typewriter 
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 120,
                    pauseFor: 2500,
                    strings: [randomMsg(isCorrect)],
                    wrapperClassName: 'typewriter__text'
                }}
            />
            </h1>
        </div>
    )

}