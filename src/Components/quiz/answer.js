import React from "react";
import './answer.css';


const AnswerBtn = (props) => {
    const {id, value, action, answer} = props;
    return (
        <div className="answerBtn__container">
            <button className="answerBtn"
                    id={id}
                    value={value}
                    onClick={action}>
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
        value4, answer4,
        action
    } = props;

    return (
        <div className="answer__container">
            <div className="answer__inner-container">
                <AnswerBtn 
                    id={1}
                    value={value1}
                    answer={answer1}
                    action={action}
                />
                <AnswerBtn 
                    id={2}
                    value={value2}
                    answer={answer2}
                    action={action}
                />
            </div>
            <div className="answer__inner-container">
                <AnswerBtn 
                    id={3}
                    value={value3}
                    answer={answer3}
                    action={action}
                />
                <AnswerBtn 
                    id={4}
                    value={value4}
                    answer={answer4}
                    action={action}
                />
            </div>
        </div>
    );
}
