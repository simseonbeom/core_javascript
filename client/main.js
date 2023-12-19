import jujeobData from "./data/data.js";

import { getNode, getRandom, showAlert } from './lib/index.js'

// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
// 2. nameField에 있는 값을 가져와 주세요.
// 3. jujeob 데이터를 가져오기
// 4. jujeoData에서 랜덤한 주접 한개를 가져오기.

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리 (콘솔창 출력)
// 2. 공백 문자를 받았을 때 예외처리 (콘솔창 출력)



const submit = getNode('#submit');
const nameField = getNode('#nameField');


function handleSubmit(e){

  e.preventDefault();
  const name = nameField.value;
  const list = jujeobData(name);
  const pick = jujeobData(name)[getRandom(list.length)]
  

  if(!name || name.replace(/\s*/g,'' === '')){
    console.log('error!');
    
    showAlert('.alert-error','이름이 없습니다!',1500)


  }


}



submit.addEventListener('click',handleSubmit)





