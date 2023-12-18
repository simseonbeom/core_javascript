/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */


const section = getNode('section');
const article = getNode('article');
const p = getNode('p');



section.addEventListener('click',(e)=>{
  console.log( this );
  console.log( e.target );
  console.log( e.currentTarget );
  // console.log('%c section','color:orange');
})


// article.addEventListener('click',(e)=>{
//   e.stopPropagation();
//   console.log('%c article','color:dodgerblue');
// })

// p.addEventListener('click',(e)=>{
//   e.stopPropagation();
//   console.log('%c p','color:hotpink');
// })













/* 캡처링 ----------------------------------------------------------------- */