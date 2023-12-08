/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;


// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log('extractCharacter : ',extractCharacter)


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// message[3] = 'i'
console.log( 'B' + message.slice(1) );


// 부분 문자열 추출
let slice = message.slice(4,-1);
console.log('slice : ',slice)


let subString = message.substring(2,5);
console.log('substring : ',subString)


// let subStr = message.subStr();



// 문자열 포함 여부 확인

let indexOf = message.indexOf('hi');
console.log('indexOf : ',indexOf)


function checkBrowser(){
  
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  
  switch (true) {
    case agent.indexOf('edge') > -1: browserName = 'MS Edge'; break;
    case agent.indexOf('chrome') > -1 && !!window.chrome: browserName = 'Chrome'; break;
    case agent.indexOf('safari') > -1: browserName = 'Safari'; break;
    case agent.indexOf('firefox') > -1: browserName = 'Firefox'; break;
    case agent.indexOf('trident') > -1: browserName = 'IE'; break;
  }

  return browserName
}

// checkBrowser()


let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf : ',lastIndexOf)

let includes = message.includes('Less');
console.log('includes : ',includes)

let startsWith = message.startsWith('less');
console.log('startsWith : ',startsWith)

let endsWith = message.endsWith('.');
console.log('endsWith : ',endsWith)


// 공백 잘라내기
let str = '     a   b            c   d   '  

let trimLeft = str.trimStart();
console.log('trimLeft : ',trimLeft)

let trimRight = str.trimEnd();
console.log('trimRight : ',trimRight)



let trim = str.trim();
console.log('trim : ',trim)

let reg = str.replace(/\s*/g,'')

function normalText(string){
  return string.replace(/\s*/g,'')
}


console.log(reg);


// 텍스트 반복
let repeat = message.repeat(3);



// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수

// easeInOutBounce


function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}


function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}


// `${'100'.padStart(4,'0')}.jpg`

























