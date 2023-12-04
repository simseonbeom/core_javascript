/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);
 

// 함수 선언 → 화살표 함수 (표현)식
//                rest parameter
let calcAllMoney = (...args) => {

  // normal function 
  // let total = 0;
  // total = args.reduce(function(acc,cur){
  //   return acc + cur;
  // },0)
  // return total;

  // arrow function
  let total = 0;
  total = args.reduce((acc,cur)=> acc + cur,0)
  return total;

};


let calcAllMoney2 = (...args) => args.reduce((acc,cur)=> acc + cur ,0) ;




const result = calcAllMoney(1000,5000,4500,15000);

console.log( result );



// let user = ()=> ({ name:'tiger', age:36 })




// 화살표 함수와 this

// 일반 함수의 양면의 얼굴   // 생성자


// const Button = (name) =>{
//   this.name = name;
// }

// const b =  new Button('tiger');


// function button(){
//   return 'hello'
// }

// const a = button();





// new String()
// new Number()
// new Object()
// new Array()



// 일반함수
// - constructor 내장
// - this: 나를 호출한 대상을 this로 찾음
// - 객체의 메서드로 사용이 많이 됨. => this를 찾기 위해 

// 화살표함수
// - constructor 비내장
// - this: 자체를 바인딩(가지지)않음
// - 메서드 안의 함수로 많이 사용됨. // 내 상위 this를 가져오기 위해 



const user = {
  total:0,
  name:'상원',
  age: 13,
  address: '서울시 중랑구 면목동',
  grades: [80,90,100],
  totalGrades(){ // constructor 비내장
 
    // this = user
    
    this.grades.forEach(item=> this.total += item)

    return this.total
    
    // console.log( '일반 함수 :' , this);

    // const sayHi =()=>{
    //   console.log('sayHi : ' , this);
    // }

    // sayHi()
  }
}

const result2 = user.totalGrades();

console.log(result2);

// 메서드 체이닝  : jQuery 
// user.totalGrades().grades


// $().fadeOut().css().animate()







/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 















