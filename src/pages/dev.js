import React from "react";
import { NextBtn } from "../Components/quiz/nextBtn";
import { useNavigate } from "react-router-dom";
  
const Main = () => {
  const navigate = useNavigate()


  const handleClick = () => {
    let diffLvl = Number(document.getElementById("diff-level").value);
    let num = Number(document.getElementById("question-number").value);

    navigate("/instructions", {state: {
                        difficultyLvl: diffLvl,
                        noOfQuestions: num}})
  }


  return (
    <div>
      <h1>Main page</h1>
      <input id="question-number" type="text"></input>
      <input id="diff-level" type="text"></input>
      <NextBtn
        action={handleClick}/>
    </div>
  );
};
  
export default Main;


import { NextBtn } from "../Components/quiz/nextBtn";
import { useLocation, useNavigate } from "react-router-dom";

const navigate = useNavigate();
const location = useLocation();

const noOfQuestions = location.state.noOfQuestions;
const diffLvl = location.state.difficultyLvl;

const handleClick = () => {
    navigate("/quiz", {state: {
                        difficultyLvl: diffLvl,
                        noOfQuestions: noOfQuestions}})
  }

  <NextBtn
    action={handleClick}/>