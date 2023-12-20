

/* 

[readyState]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/


function xhr({
  method,
  url,
  onSuccess,
  onFail
} = {}){

  const xhr = new XMLHttpRequest();

  xhr.open(method,url)

  xhr.addEventListener('readystatechange',()=>{
    
    const {readyState,status,response} = xhr // 객체의 구조분해할당

    if(readyState === 4){
      if(status >= 200 && status < 400){
        JSON.parse(response)
      }else{
        // onFail()
      }
    }
  })
  xhr.send()
}


xhr({
  method:'GET',
  url:'https://jsonplaceholder.typicode.com/users',
  onSuccess(){

  },
  onFail(){

  }
})























