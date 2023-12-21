


import { 
  tiger,
  insertLast,
  getNode as $,
} from "./lib/index.js";



const END_POINT = 'https://jsonplaceholder.typicode.com/users'


// [phase-1]

// 1. user 데이터를 fetch 해주세요.
// 2. 함수안에 넣기
// 3. 유저 데이터 (이름만) 화면에 랜더링


const userCardInner = $('.user-card-inner')

async function renderUserList(){

  const response = await tiger.get(END_POINT);
  const userData = response.data;

  userData.forEach((item)=>{


    item.name
    
    insertLast('.user-card-inner',item.name)

  })

}


renderUserList()


























