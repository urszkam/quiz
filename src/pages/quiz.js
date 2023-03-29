import React, { useState } from "react";
import './quiz.css'
import { Answer } from '../Components/quiz/answer';
import { Question } from '../Components/quiz/question';
import { NextBtn } from '../Components/quiz/nextBtn';
import { Score } from '../Components/quiz/score';
import { MsgWriter } from '../Components/quiz/msgWriter'
import { Logo } from '../Components/quiz/logo';
import { quizContent } from '../questions';

const difficultyLvl = 0;
const noOfQuestions = 3;

// choose random questions
const getQuestions = (diffLvl=0, num=3, questionSet=quizContent) => {
  const temp = questionSet[diffLvl].questions;
  const currentQuestionSet = (temp
                                  .sort(() => 0.5 - Math.random()))
                                  .slice(0,num);
  return currentQuestionSet;
};

const currentQuestionSet = getQuestions();
// const answerOrder = [0,1,2,3].sort(() => 0.5 -Math.random());

const Quiz = () => {
  
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [msgWriter, setMsgWriter] = useState([]);
    const [answerOrder, setAnswerOrder] = useState([0,1,2,3].sort(() => 0.5 -Math.random()));

    const answerBtns = document.getElementsByClassName("answerBtn");
  
    const increment = () => {
      setCount(count + 1);
    }
  
    const addPoint = (val) => {
      if (val === 'true')
        setScore(score + 1);
    }

    const disableButtons = () => {
      for (let i = 0; i < answerBtns.length; i++)
        answerBtns[i].disabled=true;
    }

    const enableButtons = () => {
      for (let i = 0; i < answerBtns.length; i++)
        answerBtns[i].disabled=false;
    }

    const shuffleAnswers = () => {
      setAnswerOrder(answerOrder.sort(() => 0.5 -Math.random()))
    }
    
    const checkAnswer = event => {
      addPoint(event.target.value);
      setMsgWriter(msgWriter.concat(<MsgWriter 
                                      isCorrect={event.target.value} 
                                    />));
      disableButtons();
    }

    const nextQuestion = () => {
      increment();
      setMsgWriter([]);
      enableButtons();
      shuffleAnswers();
    }
  
    if (count > noOfQuestions-1) {
      return (
        <div className="App__container">
          <header>
            <Logo />
          </header>
          <div className="page-container">
              <Score 
                finalScore={Math.round(score / noOfQuestions * 100) + '%'}
                />
          </div>
        </div>
      )
    }
    
    return (
      <div className="App__container">
        <header>
          <Logo />
        </header>
        <div className="page-container">
            <Question 
              id={count}
              question={currentQuestionSet[count].question}
              />

            <Answer 
              value1={currentQuestionSet[count].answers[answerOrder[0]].isCorrect}
              answer1={currentQuestionSet[count].answers[answerOrder[0]].text}

              value2={currentQuestionSet[count].answers[answerOrder[1]].isCorrect}
              answer2={currentQuestionSet[count].answers[answerOrder[1]].text}

              value3={currentQuestionSet[count].answers[answerOrder[2]].isCorrect}
              answer3={currentQuestionSet[count].answers[answerOrder[2]].text}

              value4={currentQuestionSet[count].answers[answerOrder[3]].isCorrect}
              answer4={currentQuestionSet[count].answers[answerOrder[3]].text}

              action={checkAnswer}
            />

            <div className="msgWriter__placeholder">
              {msgWriter}
            </div>

            <NextBtn 
              action={nextQuestion}
            />

            {/* Score:{score} */}
        </div>
      </div>
    );
  };
  
export default Quiz;