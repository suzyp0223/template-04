import { Calendar, prevMonth, nextMonth, goToday } from './components/index.js';

document.addEventListener("DOMContentLoaded", () => {
  Calendar();
});

const todayButton = document.querySelector('.today-btn');
const prevButton = document.querySelector('.nav-btn.left-arrow');
const nextButton = document.querySelector('.nav-btn.right-arrow');

// 이전 달로 이동
if (prevButton) {
  prevButton.addEventListener('click', () => {
    prevMonth();
  });
}

// 다음 달로 이동
if (nextButton) {
  nextButton.addEventListener('click', () => {
    nextMonth();
  });
}

// 오늘 날짜로 돌아가기
if (todayButton) {
  todayButton.addEventListener('click', () => {
    goToday();
  });
}
