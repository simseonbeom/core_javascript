

function earth(){
  
  let water = true;

  let apple = {
    founder:'Steve Jobs',
    ceo:'Tim Cook',
    product: ['iphone','macbook','macStudio','appleWatch']
  }

  let gravity = 10;

  return function (value){
    gravity = value;

    console.log(gravity);

    console.log(water,apple);
  }
}

const ufo = earth()

// ufo(1)





const button = document.querySelector('button');







const handleClick = (() =>{

  let isClicked = false;

  return  () => {
    if(!isClicked){

      document.body.style.background = 'orange'
    }else{
      document.body.style.background = 'white'
    }
  
    isClicked = !isClicked
  }
 
})()







// const a = (b)=>(d)=>(c)=> b+d+c


// function a(){


//   return function(){


//     return function(){
//       b+d+c
//     }
//   }
// }



// button.addEventListener('click',handleClick); // 이벤트 생성

// setTimeout(() => {
  
//   button.removeEventListener('click',handleClick); // 이벤트 제거
// }, 3000);



// 이벤트는 등록이 되어야 삭제도 가능 


function bindEvent(node,type,handler){

  node.addEventListener(type,handler);



  return ()=> node.removeEventListener(type,handler);
}



const remove = bindEvent(button,'click',handleClick)



remove()








function useState(initValue){
  
  let value = initValue;
  
  function read(){
    return value;
  }

  function write(newValue){
    value = newValue
  }

  return [read,write]
  
}



const [state,setState] = useState(true);



























































































