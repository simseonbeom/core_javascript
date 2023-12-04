
function getStyle(node,prop){

  if(typeof node === 'string') node = document.querySelector(node);
  if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');

  return getComputedStyle(node,null)[prop]
}

function setStyle(node,prop,value){

  if(typeof node === 'string') node = document.querySelector(node);
  if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');
  if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.')
  
  node.style[prop] = value;

}

export function css(node,prop,value){
  // if(!value){
  //   return getStyle(node,prop) // getter
  // }else{
  //   setStyle(node,prop,value) // setter
  // }

  return !value ? getStyle(node,prop) : setStyle(node,prop,value);

}
