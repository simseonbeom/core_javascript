


// querySelector
const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const input = document.querySelector('#todo');

// console.log( button );

// eventListener 이벤트 핸들러  => click : 객체  , scroll : 객체

function timer(){

}

setTimeout(timer, 3000);

/* global gsap */

let isOpend = false;

function handleMenu(e){
  
  e.preventDefault()

  // 메뉴에게 is-active 클래스를 넣어준다.

  // 메뉴에게 클래스를 넣어준다 is-active

  if(!isOpend){
    menu.classList.add('is-active');
    
    gsap.from('li',{x:30,opacity:0,stagger:0.2,onComplete(){
      console.log('end');
    }})

  }else{
    menu.classList.remove('is-active');
    
    gsap.set('li',{x:0,opacity:1})
  }

  isOpend = !isOpend;

  // menu.classList.toggle('is-active')
  // menu.classList.remove('is-active')


}



button.addEventListener('click',handleMenu)


function handleInput(){
  console.log();

  if(this.value === 'hello'){
    console.log('success');
  }
}

input.addEventListener('input',handleInput)


// Node.addEvent...


// classList


// preventDefault














