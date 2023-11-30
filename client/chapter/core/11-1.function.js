/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

// 함수 선언
function calcPrice(
  priceA,
  priceB,
  priceC = getRandomValue(),
  priceD = getRandomValue()
) {
  // if(!priceC) priceC = 0;

  // priceC = priceC || 0;
  // priceC ||= 0;

  // priceC = priceC ?? 0;
  // priceC ??= 0;

  // if(!priceA){
  //   priceA = 0;
  // }

  // if(!priceB){
  //   priceB = 0;
  // }

  if(!priceA || !priceB) {
    throw new Error('calcPrice 함수의 첫 번째와 두 번째 인수는 필수 입력값 입니다.');
  }

  return priceA + priceB + priceC + priceD;
}

// 함수 호출

// const result = calcPrice();

// console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

// 1. 하나의 기능만을 수행해야 한다.
// 2. 이름과 매개변수의 이름을 직관적으로 적어야 한다.( 가독성 => 읽었을때 바로 기능을 알 수 있다. )
// 3. 재사용성이 좋아야 한다.


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;


function rem(pxValue,base = 16){
  
  if(!pxValue) throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.');

  typeof pxValue === 'string' && (pxValue = parseInt(pxValue,10));
  typeof base === 'string' && (base = parseInt(base,10));

  // if(typeof pxValue === 'string'){
  //   pxValue = parseInt(pxValue,10);
  // }

  // if(typeof base === 'string'){
  //   base = parseInt(base,10);
  // }
  
  return pxValue / base + 'rem'
}




// Test Driven Development 

// console.assert(rem(20) === 1.25)
console.assert(rem(20) === '1.25rem')
console.assert(rem('25px') === '1.5625rem')
console.assert(rem('30px',10) === '3rem')




// css(node: string, prop: string, value: number|strung) : string;


/* 

1. function name
2. parameter, arguments
3. return value
4. validation
5. test [Test Driven Development]

*/



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


// const css =  (node,prop,value) =>!value ? getStyle(node,prop) : setStyle(node,prop,value);

function css(node,prop,value){
  // if(!value){
  //   return getStyle(node,prop) // getter
  // }else{
  //   setStyle(node,prop,value) // setter
  // }

  return !value ? getStyle(node,prop) : setStyle(node,prop,value);

}


css('.first','font-size') // getter

css('.first','font-size','100px') // setter




// setStyle('body','background','hotpink');
//setStyle() // body의 배경색이 오렌지




// getStyle(document.body,'fontSize') 



// setStyle('body','background-color','orange')




// const resuslt = getStyle(body,'border') // 0px solid transparent


























// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
