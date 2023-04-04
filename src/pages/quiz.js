import React, { useState } from "react";
import './quiz.css'
import { Answer } from '../Components/quiz/answer';
import { Question } from '../Components/quiz/question';
import { NextBtn } from '../Components/quiz/nextBtn';
import { Score } from '../Components/quiz/score';
import { MsgWriter } from '../Components/quiz/msgWriter'
import { Logo } from '../Components/quiz/logo';
import { Fish } from '../Components/quiz/fish';
import { quizContent } from '../questions';
import { useLocation } from "react-router-dom";


const Quiz = () => {
    // const location = useLocation();
    // const noOfQuestions = location.state.noOfQuestions;
    // const diffLvl = location.state.difficultyLvl;
    const noOfQuestions = 2;
    const diffLvl = 2;
    
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [msgWriter, setMsgWriter] = useState([]);
    const [answerOrder, setAnswerOrder] = useState([0,1,2,3].sort(() => 0.5 -Math.random()));

    const answerBtns = document.getElementsByClassName("answerBtn");

    const temp = quizContent[diffLvl].questions;
    const questionsToAdd = (temp
                                  .sort(() => 0.5 - Math.random()))
                                  .slice(0,noOfQuestions);

    const [currentQuestionSet, setQuestions] = useState(questionsToAdd);

    const increment = () => {
      setCount(count + 1);
    }
  
    const addPoint = (val) => {
      if (val === 'true')
        setScore(score + 1);
    }

    const disableButtons = () => {
      for (let btn of answerBtns)
        btn.disabled=true;
    }

    const enableButtons = () => {
      for (let btn of answerBtns)
        btn.disabled=false;
    }

    const shuffleAnswers = () => {
      setAnswerOrder(answerOrder.sort(() => 0.5 -Math.random()))
    }

    const highlightAnswer = (target) => {
      if (target.value === 'true') {
        target.classList.add("correctAnswer");
      } else {
        target.classList.add("incorrectAnswer");
      }
    }

    const removeHighlight = () => {
      for (let btn of answerBtns) {
        if (btn.classList.length > 1) {
          btn.className='answerBtn';
          break;
        }
      }
    }
    
    const checkAnswer = event => {
      addPoint(event.target.value);
      setMsgWriter(msgWriter.concat(<MsgWriter 
                                      isCorrect={event.target.value} 
                                    />));
      disableButtons();
      highlightAnswer(event.target);
    }

    const nextQuestion = () => {
      increment();
      setMsgWriter([]);
      enableButtons();
      shuffleAnswers();
      removeHighlight();
    }
  
    if (count === noOfQuestions) {
      return (
        <div className="App__container">
          {/* <header>
            <Logo />
          </header> */}
          <div className="page-container">
              <Score 
                finalScore={score/noOfQuestions}
                />
              <Fish />
          </div>
          {/* <Footer /> */}
        </div>
      )
    }
    
    return (
      <div className="App__container">
        {/* <header>
          <Logo />
        </header> */}
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
              id={"next"}
              id_div={"leftDiv"}
              id_btn={"leftBtn"}
            />
        </div>
        {/* <Footer /> */}
      </div>
    );
  };
  
export default Quiz;
