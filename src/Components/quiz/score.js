import React from "react";
import CountUp from 'react-countup';
import './score.css';


export const Score = (props) => {
    const {finalScore} = props;

    const finalPercentage = parseInt(finalScore);

    return (
        <div>
            <h1>Final score: &nbsp; 
                <CountUp 
                  start={0}
                  end={finalPercentage}
                  duration={5}
                /> %
            </h1>
        </div>
    );
}
