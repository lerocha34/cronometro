let seconds = document.getElementById("second");
let minutes = document.getElementById("minute");
let hours = document.getElementById("hour");
let start = document.getElementById("start");
let clear = document.getElementById("clear");
let pause = document.getElementById("pause");

countSeconds = 0;
countMinutes = 0;
countHours = 0;
let intervalId;
let counting = true;

function startCount() {
  if (counting) {
    function startSeconds(valor) {
      countSeconds = countSeconds + valor;
      seconds.innerHTML = countSeconds;
      if (countSeconds > 59) {
        countMinutes = countMinutes + valor;
        minutes.innerHTML = countMinutes;
        seconds.innerHTML = 0;
        countSeconds = 0;
      }
      if (countMinutes > 59) {
        countHours = countHours + valor;
        hours.innerHTML = countHours;
        minutes.innerHTML = 0;
        countMinutes = 0;
      }
    }
  }
  intervalId = setInterval(startSeconds, 1000, 1);

  return (counting = false);
}
function pauseTime() {
  if (counting == false) {
    clearInterval(intervalId);
    return (counting = true);
  }
}
function clearTime() {
  clearInterval(intervalId);
  countSeconds = 0;
  countMinutes = 0;
  countHours = 0;

  seconds.innerHTML = 0;
  minutes.innerHTML = 0;
  hours.innerHTML = 0;
}
start.addEventListener("click", startCount);
pause.addEventListener("click", pauseTime);
clear.addEventListener("click", clearTime);
