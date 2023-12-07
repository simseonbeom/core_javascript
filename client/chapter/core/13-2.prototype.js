/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 생성자 === 컴포넌트 

class Animal {
  
  constructor(name){
    // const {name,age,tail = true} = options;
    // for(let [key,value] of Object.entries(options)){
    //   this[key] = value
    // }

    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true
  }

  get eat(){
    return this.stomach
  }

  set eat(value){
  }
}

// const animal = new Animal('포동이')

class Tiger extends Animal{
  
  static options = {
    version: '1.0.0',
    company: 'like-lion',
    ceo:'---'
  }

  constructor(name){
    super(name)
    this.pattern = '호랑이무늬'
  }

  static bark(){
    return '어흥!🐯'
  }

  hunt(target){
    this.prey = target
    return `${target} 에게 조용히 접근한다.`
  }
}




const 한라산호랑이 = new Tiger('포동이')





// const a = new Array()


// class Array {
  
//   constructor(){

//   }

//   static isArray(){

//   }

//   forEach(){

//   }

//   reduce(){

//   }

//   map(){

//   }
  
// }
















// react   class vs function (hooks)



// class Tab extends React.Component {
  
//   render(){
//     return (
//       <div> {value} </div>
//     )
//   }
// }


// function Tab(){
  
//   return (
//     <div>{value}</div>
//   )
// }



// model, view, control

// model (데이터)
// view (랜더링)
// control (이벤트)
// 패턴

class Todo {

  target = null;
  registerButton = null;
  list = null;
  
  constructor({input,button,renderPlace}){
    
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace)
    this.todoListArray = [];
    this.data;

    this.registerEvent()

    this.target.addEventListener('input',()=>{
      this.data = this.currentInputTodoData;
    })
  }

  get currentInputTodoData(){
    return this.target.value;
  }

  set currentInputTodoData(value){
    this.target.value = value;
  }

  get todoList(){
    return this.todoListArray
  }

  set todoList(value){
    this.todoList.push(value);
  }

  #createList(){
    let template = `
      <li>${this.data}</li>
    `
    return template;
  }

  render(){ 
    this.list.insertAdjacentHTML('beforeend',this.#createList());
    this.target.value = ''
  }
  
  addTodoData(){
    this.todoList = this.data;
  }

  registerEvent(){
    this.registerButton.addEventListener('click',()=>{
      this.addTodoData()
      this.render()
    });
  }

}






const button = new Todo({
  input:'#todo',
  button:'.register',
  renderPlace:'.todoList'
});











