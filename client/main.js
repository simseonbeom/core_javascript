/* global gsap */


import { 
  tiger,
  insertLast,
  changeColor,
  getNode as $,
  renderUserCard,
} from "./lib/index.js";


const END_POINT = 'https://jsonplaceholder.typicode.com/users'


// [phase-1]

// 1. user 데이터를 fetch 해주세요.
// 2. 함수안에 넣기
// 3. 유저 데이터 (이름만) 화면에 랜더링


const userCardInner = $('.user-card-inner')

async function renderUserList(){

  try{

    const response = await tiger.get(END_POINT);
    const userData = response.data;

    userData.forEach(data => renderUserCard(userCardInner,data))
    changeColor('.user-card');

    gsap.from('.user-card',{
      x:100,
      opacity:0,
      stagger:0.1
    })
  }
  catch(err){
    console.log(err);
  }

}


renderUserList()


























