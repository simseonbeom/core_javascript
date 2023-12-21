/* global gsap */


import { 
  tiger,
  delayP,
  insertLast,
  changeColor,
  getNode as $,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from "./lib/index.js";


const END_POINT = 'https://jsonplaceholder.typicode.com/users'


// [phase-1]

// 1. user 데이터를 fetch 해주세요.
// 2. 함수안에 넣기
// 3. 유저 데이터 (이름만) 화면에 랜더링


const userCardInner = $('.user-card-inner')

async function renderUserList(){

  renderSpinner(userCardInner)
  
  try{

    await delayP(100)
    
    // $('.loadingSpinner').remove()
    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        $('.loadingSpinner').remove()
      }
    })

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
    renderEmptyCard(userCardInner);
  }

}


renderUserList()


function handleDelete(e){
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if( !article || !button ) return;
  const id = article.dataset.index.slice(5) ;

  
  tiger.delete(`${END_POINT}/${id}`)



}

userCardInner.addEventListener('click',handleDelete)



























