let seconds = document.getElementById("second");
let minutes = document.getElementById("minute");
let hours = document.getElementById("hour");
let start = document.getElementById("start");
let clear = document.getElementById("clear");
let pause = document.getElementById("pause");

let countSeconds = 0;
let countMinutes = 0;
let countHours = 0;
let intervalId;
let counting = false;

function startCount() {
  if (!counting) {
    counting = true;
    intervalId = setInterval(startSeconds, 1000);
  }
}

function startSeconds() {
  countSeconds++;
  seconds.innerHTML = countSeconds;
  if (countSeconds > 59) {
    countMinutes++;
    minutes.innerHTML = countMinutes;
    seconds.innerHTML = 0;
    countSeconds = 0;
    if (countMinutes > 59) {
      countHours++;
      hours.innerHTML = countHours;
      minutes.innerHTML = 0;
      countMinutes = 0;
    }
  }
}

function pauseTime() {
  if (counting) {
    clearInterval(intervalId);
    counting = false;
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
  counting = false; // Certifique-se de marcar como não contando
}

start.addEventListener("click", startCount);
pause.addEventListener("click", pauseTime);
clear.addEventListener("click", clearTime);
