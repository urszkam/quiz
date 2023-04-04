import React from "react";
import './main.css';
import { NextBtn } from "../Components/quiz/nextBtn";
import { useNavigate } from "react-router-dom";
  

const Main = () => {
  const navigate = useNavigate();


  const handleClick = () => {
    let diffLvl = Number(document.getElementById("diff-level").value);
    let num = Number(document.getElementById("question-number").value);

    navigate("/instructions", {state: {
                        difficultyLvl: diffLvl,
                        noOfQuestions: num}})
  }

  return (
    <div className="page-container">
      <h1>Main page</h1>
      {/* <input id="question-number" type="text"></input>
      <input id="diff-level" type="text"></input> */}
      <NextBtn
        action={handleClick}
        id_div={"leftDiv"}
        id_btn={"lebtBtn"}/>
    </div>
  );
};
  
export default Main;

