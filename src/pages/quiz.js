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
  
    const addPoint = event => {
      if (event.target.value === 'true')
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
            value1={currentQuestionSet[count].answers[0].isCorrect}
            answer1={currentQuestionSet[count].answers[0].text}

            value2={currentQuestionSet[count].answers[1].isCorrect}
            answer2={currentQuestionSet[count].answers[1].text}

            value3={currentQuestionSet[count].answers[2].isCorrect}
            answer3={currentQuestionSet[count].answers[2].text}

            value4={currentQuestionSet[count].answers[3].isCorrect}
            answer4={currentQuestionSet[count].answers[3].text}

            action={addPoint}
          />
          <NextBtn 
            action={increment}
          />
        Score:{score}
      </div>
    );
  };
  
export default Quiz;