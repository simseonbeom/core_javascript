/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode(".first");

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용

console.log(first.className); // getter
// console.log( first.className = 'fff' ); // setter

// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList.add("hello");
first.classList.remove("hello");
first.classList.toggle("hello");
console.log(first.classList.contains("first"));

// removeClass('.first','hello')
// toggleClass('.first','hello')

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


first.style.cssText = `
  display: flex;
  margin: 10px;
  border: 1px dotted red;
`

first.style.background = "orange"; // 추가

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first)["background-color"]);








// getCss
// setCss

// css


































