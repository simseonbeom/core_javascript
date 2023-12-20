
import { getNode } from '../dom/getNode.js'
import { isNumber, isObject } from './typeOf.js'

// 이상원, 박수양, 조윤주, 정현주, 박주현




function delay(callback,timeout = 1000){
  setTimeout(callback,timeout);
}



const first = getNode('.first')
const second = getNode('.second')



// delay(()=>{
//   first.style.top = '-100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)'
//     delay(()=>{
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })
//     second.style.transform = 'rotate(-360deg)'
//   })
//   second.style.top = '100px';
// })



// Promise API

const defaultOptions = {
  shouldReject:false,
  timeout:1000,
  data: '아싸 성공!',
  errorMessage:'알 수 없는 오류가 발생했습니다.'
}


export function delayP(options){

  let config = {...defaultOptions};
  
  if(isNumber(options)){
    config.timeout = options;
  }
  
  if(isObject(options)){
    config = {...defaultOptions,...options}
  }
  
  let {timeout,shouldReject,errorMessage,data} = config

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!shouldReject){
        resolve(data);
      }else{
        reject({message:errorMessage})
      }
    }, timeout);
  })
}


delayP(1000) // number | object


// .then((res)=>{
//   console.log( res );
// })


// .then((res)=>{
//     console.log(res);
//     return delayP()
// })
// .then((res)=>{
//     console.log(res);
//     return delayP()
// })
// .then((res)=>{
//     console.log(res);
//     return delayP()
// })
// .then((res)=>{
//     console.log(res);
//     return delayP()
// })
// .then((res)=>{
//     console.log(res);
// })






console.log( delayP(false) );



// promise object


















