export let date = new Date();

export const Calendar = () => {

  // 현재의 년도와 월
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const options = { month: 'long' };
  const monthName = new Intl.DateTimeFormat('en-US', options).format(date);

  // 지난해,달 마지막과 이번해,달 마지막
  const preLast = new Date(currentYear, currentMonth, 0);
  const thisLast = new Date(currentYear, currentMonth + 1, 0);

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
