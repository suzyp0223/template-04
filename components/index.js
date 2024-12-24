// https://gurtn.tistory.com/54

// https://bigtop.tistory.com/65
// https://velog.io/@jhyun_k/%EB%B0%94%EB%8B%90%EB%9D%BC-JS%EB%A1%9C-%EC%BA%98%EB%A6%B0%EB%8D%94-%EB%A7%8C%EB%93%A4%EA%B8%B0
// https://www.youtube.com/watch?v=jFmcH5GVRs4

// https://cyjcyj.tistory.com/138


// https://poiemaweb.notion.site/4-Calendar-DatePicker-123833ba37a046978a29a53d4344e0af
// https://yeongminkim.notion.site/Javascript-1-a195109771a04727901548be5fdd4499
// https://yeongminkim.notion.site/Javascript-2-243fdd6ff0144f679cde4a58885de36f
export let date = new Date();

export const Calendar = () => {

  // 현재의 년도와 월
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const options = { month: 'long' }; // 'long' 옵션을 사용하면 영어로 된 달 이름을 얻음.
  const monthName = new Intl.DateTimeFormat('en-US', options).format(date);

  // 지난해,달 마지막과 이번해,달 마지막
  const preLast = new Date(currentYear, currentMonth, 0); // 2023-12-31
  const thisLast = new Date(currentYear, currentMonth + 1, 0); // 2024-1-31

  const PLDate = preLast.getDate();
  const PLDay = preLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  document.querySelector('.cur-year').textContent = `${currentYear}`;
  document.querySelector('.cur-month').textContent = `${monthName}`;


  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  console.log(thisDates);
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i); //지난달 날짜
    }
  };

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);  //다음달 날짜
  }
  const dates = prevDates.concat(thisDates, nextDates); //지날달과 이번달, 다음달 연결하기

  //화면에 뿌리기
  const firstDateIn = dates.indexOf(1); //이달 1일의 인덱스
  const lastDateIn = dates.lastIndexOf(TLDate); //이달 막지막날 인덱스

  dates.forEach((date, i) => {
    const condition = i >= firstDateIn && i < lastDateIn + 1 ? 'this' : 'other';
    dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
  });

  document.querySelector('.dates').innerHTML = dates.join('');

  // 오늘 날짜
  if (currentMonth === date.getMonth() && currentYear === date.getFullYear()) {
    for (let d of document.querySelectorAll('.this')) {
      if (+d.innerHTML === date.getDate()) {
        d.classList.add('today');
        break;
      }
    }
  }


  const dateContainer = document.querySelector('.dates');
  if (dateContainer) {
    dateContainer.innerHTML = dates.join('');
  } else {
    console.log(".dates 요소를 찾을 수 없습니다.");
  }
};


export const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  Calendar();
};

export const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  Calendar();
};

export const goToday = () => {
  date = new Date();
  Calendar();
};
