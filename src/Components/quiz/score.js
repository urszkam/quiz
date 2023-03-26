import React from "react";

export const Score = (props) => {
    const {finalScore} = props;
    return (
        <div>
        <h1>Final score: {finalScore}</h1>
        </div>
    );
}