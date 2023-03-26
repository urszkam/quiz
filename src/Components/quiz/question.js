import React from "react";

export const Question = (props) => {
    const {id, question} = props;
    return (
        <div className="question__div">
            <p className="question__text" id={id}>{question}</p>
        </div>
    );
};