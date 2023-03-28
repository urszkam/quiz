import React from "react";
import Typewriter from 'typewriter-effect';

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
        <div>
            <h1>
            <Typewriter 
                options={{
                    autoStart: true,
                    loop: true,
                    pauseFor: 2500,
                    strings: [randomMsg(isCorrect)]
                }}
            />
            </h1>
        </div>
    )

}