


import { diceAnimation, getNodes } from "./lib/index.js";




const [rollingButton,recordButton,resetButton] = getNodes('.buttonGroup > button');


// [phase-1]
// 1. 주사위 굴리기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행될 수 있도록

// toggle 

let isClicked = false;
let stopAnimation;

function handleRollingDice(){

  if(!isClicked){
    stopAnimation = setInterval(diceAnimation, 100);

  }else{

    clearInterval(stopAnimation)
  }

  isClicked = !isClicked


  
}


rollingButton.addEventListener('click',handleRollingDice)








