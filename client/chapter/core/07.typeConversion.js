/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log( typeof String(YEAR) );
console.log( typeof (YEAR + '') );

// undefined, null
let days = null;
let weekend;


console.log(days + '');
console.log(weekend + '');


// boolean

let isClicked = false;
console.log(isClicked + '');
console.log('isClicked : ', isClicked)


// dot log


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log( Number(friend) );


// null
let money = null;

console.log( Number(money) );


// boolean
let cutie = true; // true = 1 , false = 0
console.log( Number(cutie) );


// string
let num = '250';
console.log( Number(num) );
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// +, * 1 , /1


// numeric string

const width = '105.3px';

console.log(Number(width));
console.log( parseInt(width,10) );
console.log(parseFloat(width));
// parseInt
// parseFloat




/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(friend));
console.log(Boolean(0));


// const value = prompt('값을 입력해주세요');
// console.log( typeof value );











