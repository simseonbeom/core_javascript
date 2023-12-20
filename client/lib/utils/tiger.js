

const END_POINT = 'https://jsonplaceholder.typicode.com/users'



const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}




const tiger = async (options) =>{

  const {url,...restOptions} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  const response = await fetch(url,restOptions);

  if(response.ok){
    response.data = await response.json();
  }
  return response
}


const user = await tiger({ url:END_POINT, });


console.log( user.data );





// tiger.get()
// tiger.post()
// tiger.put()
// tiger.delete()














