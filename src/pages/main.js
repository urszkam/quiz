import React from "react";
import './main.css';
import { NextBtn } from "../Components/quiz/nextBtn";
import { DropdownDiff } from "../Components/main/dropDown";
import { DropdownNum } from "../Components/main/dropDownNum";
import { MainInfo } from "../Components/main/mainInfo";
import { useNavigate } from "react-router-dom";
  

const Main = () => {
  const navigate = useNavigate();
  let diffLvlNum, questionNum;

  const values = {'Easy': '0', 'Medium': '1', 'Hard': '2'};

  const getVariables = () => {
    let diffLvlString = document.getElementsByClassName("diff-level")[0].innerHTML;
    diffLvlNum = Number(values[diffLvlString]);
    questionNum = Number(document.getElementsByClassName("question-number")[0].innerHTML);

  }

  const handleClick = () => {
    getVariables();
    navigate("/instructions", {state: {
                        difficultyLvl: diffLvlNum,
                        noOfQuestions: questionNum}})
  }

  return (
    <div className="page-container">
      <MainInfo />
      <div className="dropdown__container">
        <DropdownDiff />
        <DropdownNum />
      </div>

      <NextBtn
        action={handleClick}
        id_div={"leftDiv"}
        id_btn={"lebtBtn"}
      />

    </div>
  );
};
  
export default Main;

