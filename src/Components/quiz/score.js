import React from "react";
import CountUp from 'react-countup';
import './score.css';


export const Score = (props) => {
    const {finalScore} = props;
    console.log(typeof(finalScore))
    const finalPercentage = Math.round(finalScore * 100);
    console.log(finalScore, finalPercentage);

    return (
        <div>
            <h1>Final score: &nbsp; 
                <CountUp 
                  start={0}
                  end={finalPercentage}
                  duration={13}
                /> %
            </h1>
        </div>
    );
}
