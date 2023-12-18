

//  모듈 프로그래밍 

// named export (이름 내보내기) -> { 이름 }
// default export (기본 내보내기) -> 이름

// import { getNode } from "./lib/dom/getNode.js";
// import { insertLast } from "./lib/dom/insert.js";
// import clearContents from "./lib/dom/clear.js";

import {
  getNode, 
  insertLast,
  clearContents, 
} from './lib/index.js';


const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');



// 1. input value 값 가져오기
//     - input에게 input 이벤트를 걸어 준다.
//     - input.value 로 가져온다.

// 2. 두 수의 합 더하기
//     - 타입 확인하기.


// 3. 합계 랜더링 하기
//     - insertLast(), insertAdjacentHTML()


function handleInput(){
  const firstValue = first.value * 1;
  const secondValue = second.value / 1;
  const total = firstValue + secondValue;


  // result.textContent = ''

  clearContents(result)
  insertLast(result,total)
  
}



first.addEventListener('input',handleInput)
second.addEventListener('input',handleInput)



























