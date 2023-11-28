/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = "아침",
  LUNCH = "점심",
  DINNER = "저녁",
  NIGHT = "밤",
  LATE_NIGHT = "심야",
  DAWN = "새벽";

let thisTime = DAWN;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log("디스코드를 켠다.");
    break;
  case LUNCH:
    console.log("체력 보충을 위한 잠을 잔다.");
    break;
  case DINNER:
    console.log("이듬 영상 강의를 시청한다.");
    break;
  case NIGHT:
    console.log("팀원들과 수업 내용 공유한다.");
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log("꿈속에서 배웠던 코드를 생각한다.");
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log("디스코드를 켠다.");
} else if (thisTime === LUNCH) {
  console.log("체력 보충을 위한 잠을 잔다.");
} else if (thisTime === DINNER) {
  console.log("이듬 영상 강의를 시청한다.");
} else if (thisTime === NIGHT) {
  console.log("팀원들과 수업 내용 공유한다.");
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log("꿈속에서 배웠던 코드를 생각한다.");
}

/* switch vs. if -------------------------------------------------------- */

// prompt를 통해서 숫자를 입력 받는다 (단 0 ~ 6 까지만)

// switch case 문을 사용해서
// 0 : 일
// 1 : 월
// 2 : 화
// 3 : 수
// 4 : 목
// 5 : 금
// 6 : 토

// 관심사의 분리 

// 함수는 하나의 기능만을 수행하는 것

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

//  0 ~ 6

function getDay(num) {

  switch (num) {
    case 0: return "월";
    case 1: return "화";
    case 2: return "수";
    case 3: return "목";
    case 4: return "금";
    case 5: return "토";
    case 6: return "일";
  }
}


// const today = getDay( getRandom(7) ) // 월 ~ 일


function weekend() {
  const today = getDay(getRandom(7));

  // if(today.includes('토')){
  //   return '토요일'

  // } else if (today.includes('일')){
  //   return '일요일'
    
  // }else{
  //   return '평일'
  // }

  
  let day = today.includes("토") ? "토요일" : today.includes("일") ? "일요일" : "평일";

  return day;

}



const todayIs = weekend();

console.log(todayIs);

// 요일 뽑아내기   => weekend 월~금: 평일입니다. 토~일 : 주말입니다.
