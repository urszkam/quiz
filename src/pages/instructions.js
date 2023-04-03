import React from "react";
import './instructions.css';
import { Logo } from '../Components/quiz/logo';
import { StartBtn } from "../Components/instructions/startBtn";
import { ReturnBtn } from "../Components/instructions/returnBtn";
import { NextBtn } from "../Components/quiz/nextBtn";
import { useLocation, useNavigate } from "react-router-dom";


  const Instructions = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // const noOfQuestions = location.state.noOfQuestions;
    // const diffLvl = location.state.difficultyLvl;
    const noOfQuestions = 2;
    const diffLvl = 1;
    const handleClick = () => {
        navigate("/quiz", {state: {
                            difficultyLvl: diffLvl,
                            noOfQuestions: noOfQuestions}})
      }
    return (
    <div className="Instructions-page">
      
      <header className="Instructions-header">
      <h1 id="title1">Instructions</h1>
      </header>

      <body className="Instructions-body">
      <p1 id="body1">
        <p>
        1. There will be five questions in total for each difficulty chosen. 
        </p>

        <p>
        NOTE: The difficulty chosen from the starting page cannot be changed after starting the quiz.
        In order to change the amount of questions, please return to the main page and change the amount to your liking.
        </p>

        <p>
        2. The qustions will be randomly selected and will strictly revolve around the ocean life and the organisms living therein.
        </p>

        <p>
        3. Feel free to look up the answers, no judging from our end.
        Google is always lovely but try these sources at the bottom of the page for a better grasp of the topic.
        </p>

        <p>
        4. Have fun guessing. You may be shocked by how lucky you actually are or by how much you actually know.
        </p>

        <p>
        <div className="buttonChoices">
          <ReturnBtn/>
          <StartBtn action={handleClick()}/>
        </div>
        </p>
        </p1>
      </body>

      <body className="Sources-body">
      <h2 id="title2">HELPFUL SOURCES:</h2>
      <p id="sourceParas">
      <p>
        <a
          className="Instructions-link"
          href="https://www.britannica.com/topic/Panama-Canal"
          target="_blank"
          rel="noopener noreferrer"
        >
          PANAMA CANAL by Norman J. Padelford et. al. for Encyclopedia Britannica, March 3, 2023.
        </a>
      </p>
      <p>Said literally no one: I yearn to know what <em>oceans</em> are connected by the Panama Canal!</p>

      <p>
        <a
          className="Instructions-link"
          href="https://www.worldwildlife.org/stories/unicorn-of-the-sea-narwhal-facts"
          target="_blank"
          rel="noopener noreferrer"
        >
          UNICORN OF THE SEA: Narwhal Facts by WorldWildLife
        </a>
      </p>
      <p> Unicorn of the Sea!!! Don't even look like unicorns! And instead of unicorn horns, they have <em>tusks</em>. What a sham?!?</p>

      <p>
        <a
          className="Instructions-link"
          href="https://www.britannica.com/animal/walrus"
          target="_blank"
          rel="noopener noreferrer"
        >
          WALRUS by the Editors of Encyclopaedia for Encyclopedia Britannica, 18 Feb. 2023.
        </a>
      </p>
      <p>One nickname sounds like something out of Harry Potter! So where's the creativity in <em>the other one</em>?!?</p>

      <p>
        <a
          className="Instructions-link"
          href="https://oceanconservancy.org/blog/2019/06/05/biggest-animals-ocean/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Who are the Biggest Animals in the Ocean?
        </a>
      </p>
      <p>Mirror, mirror! On the wall! Who's the <em>largest</em> of them all?</p>

      <p>
        <a
          className="Instructions-link"
          href="https://www.history.com/this-day-in-history/magellans-expedition-circumnavigates-globe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Magellan’s Expedition
        </a>
      </p>
      <p>I was looking for a word that <em>rhymes with euphoria</em>!!!</p>

      <p>
        <a
          className="Instructions-link"
          href="https://www.livescience.com/55412-whale-sharks.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facts About Whale Sharks By Alina Bradford
        </a>
      </p>
      <p>It's about the size of a WHAT!</p>

      <p>
        <a
          className="Instructions-link"
          href="https://www.bbc.com/news/science-environment-22715018"
          target="_blank"
          rel="noopener noreferrer"
        >
          How the turtle got its unique hard shell By Melissa Hogenboom, Science reporter, BBC News
        </a>
      </p>
      <p>That's <em>a lot</em> of bones!</p>
      </p>
      </body>

    </div>

  );
};

  
export default Instructions;
