import React, { useState } from "react";
import { Answer } from '../Components/quiz/answer';
import { Question } from '../Components/quiz/question';
import { NextBtn } from '../Components/quiz/nextBtn'
import { Score } from '../Components/quiz/score'
import { quizContent } from '../questions';

const chosenDifficulty = 0;
const noOfQuestions = 3;

// choose random questions
const getQuestions = () => {
  const questionsOnChosenDifficuty = quizContent[chosenDifficulty].questions;
  const q = [];
  for (let i = 1; i <= noOfQuestions; i++) {
    let randomIdx = Math.floor(Math.random() * questionsOnChosenDifficuty.length);
    let qq = questionsOnChosenDifficuty.splice(randomIdx,1)[0];
    q.push(qq);
    return q;
  };
}
  
const Quiz = () => {

    const questions = getQuestions();

    console.log(questions.length + questions);
  
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const addPoint = () => {
      setScore(score + 1);
    };
  
    if (count > 0) {
      return (
        <div className="App">
          <header className="App-header">
            <Score 
              finalScore={score !== 0 ? score/noOfQuestions : score}
              />
          </header>
        </div>
      )
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>place for a header</h1>
        </header>
          <Question 
            id={count}
            question={questions[count].question}
            />
          <Answer 
            value1={questions[count].answers[0].isCorrect}
            answer1={questions[count].answers[0].text}
            value2={questions[count].answers[1].isCorrect}
            answer2={questions[count].answers[1].text}
            value3={questions[count].answers[2].isCorrect}
            answer3={questions[count].answers[2].text}
            value4={questions[count].answers[3].isCorrect}
            answer4={questions[count].answers[3].text}
          />
          <NextBtn 
            action={increment}
          />
        {count}
      </div>
    );
  };
  
export default Quiz;