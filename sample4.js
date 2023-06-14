'use strict';
// カウントダウンタイマー

function countdown(due) {
  const now = new Date();
  
  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 /60 / 24);
  const count = [days, hours, min, sec];
  
  return count;
}

let goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

console.log(countdown(goal));
const counter = countdown(goal);
const time = `${counter[1]}時間${counter[2]}分${counter[3]}秒`;
document.getElementById('timer').textContent = time;

