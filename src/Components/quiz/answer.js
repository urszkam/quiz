import './answer.css';
import React from "react";

const AnswerBtn = (props) => {
    const {answer} = props;
    return (
        <div className="answerBtn__container">
            <button className="answerBtn">
                {answer}
            </button>
        </div>
    );
}

export const Answer = (props) => {
    const {
        value1, answer1,
        value2, answer2,
        value3, answer3,
        value4, answer4
    } = props;

    return (
        <div className="answer__container">
            <AnswerBtn 
                id={1}
                value={value1}
                answer={answer1}/>
            <AnswerBtn 
                id={2}
                value={value2}
                answer={answer2}/>
            <AnswerBtn 
                id={3}
                value={value3}
                answer={answer3}/>
            <AnswerBtn 
                id={4}
                value={value4}
                answer={answer4}/>
        </div>
    );
}
