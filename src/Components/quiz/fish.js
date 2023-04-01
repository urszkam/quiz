import React from "react";
import Sketch from "react-p5";
import './fish.css'


let size1 = 300, size2 = 250, size3 = 350;
let y1, y2, y3;
let x1 = -size1, x2 = -(size2+100), x3 = -(size3*2);
let img;

const arrowLeft = 37;
const arrowUp = 38;
const arrowRight = 39;
const arrowDown = 40;
const keyA = 65;
const keyS = 83;


export const Fish = () => {

    const preload = (p5) => {
        img = p5.loadImage('./fish.svg');
    };
  
    const setup = (p5, canvasParentRef) => { 
        p5.createCanvas(window.innerWidth-10, window.innerHeight-10).parent(canvasParentRef);
        p5.frameRate(200);
        y1 = p5.random(0, window.innerHeight / 2 - size1);
        y2 = p5.random(window.innerHeight / 2, window.innerHeight- size2);
        y3 = p5.random(window.innerHeight / 4, window.innerHeight - window.innerHeight / 4 - size3);
    };
  
    const windowResized = (p5) => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
    };
  
    const draw = p5 => {
        p5.clear();
        p5.background(255,255,255,0);

        p5.image(img, x1, y1, size1, size1);
        p5.image(img, x2, y2, size2, size2);
        p5.image(img, x3, y3, size3, size3);

        x1++;
        x2 += 2;
        x3 += 1.3; 

        y1 += p5.random(-2, 2);
        y2 += p5.random(-3, 3);
        y3 += p5.random(-1.5, 1.5);

        if (x1 > window.innerWidth+40) {
            y1 = p5.random(0, window.innerHeight / 2 - size1);
            x1 = -300;
            size1 = 300 + p5.random(-100,100);
        }

        if (x2 > window.innerWidth+40) {
            y2 = p5.random(window.innerHeight / 2, window.innerHeight - size2);
            x2 = -300;
            size2 = 300 + p5.random(-100,100);
        }

        if (x3 > window.innerWidth+40) {
            y3 = p5.random(window.innerHeight / 4, window.innerHeight - window.innerHeight / 4 - size3);
            x3 = -size3;
        }
    };

    const keyPressed = (p5) => {
        if (p5.keyCode === arrowUp) {
            y1 -= 5;
        } else if (p5.keyCode === arrowDown) {
            y1 += 5;
        } else if (p5.keyCode === arrowLeft) {
            x1 -= 5;
        } else if (p5.keyCode === arrowRight) {
            x1 += 5;
        } else if (p5.keyCode === keyA && size3 < 500) {
            size3 += 5;
        } else if (p5.keyCode === keyS && size3 > 100) {
            size3 -= 5;
        }

    };

    const mousePressed = (p5) => {
        x2 = p5.mouseX - 100;
        y2 = p5.mouseY - 100;
    }

   return (
    <div className="fish__container">
        <Sketch 
            preload={preload}
            setup={setup} 
            draw={draw}
            windowResized={windowResized}
            keyPressed={keyPressed}
            mousePressed={mousePressed}
        />
    </div>
   );
}