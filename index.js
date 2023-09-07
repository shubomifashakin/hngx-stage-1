const dayOfTheWeek = document.querySelector(".day");
const currentTime = document.querySelector(".currentTime");

const allDays = [
  "sunday",
  "Monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
dayOfTheWeek.textContent = allDays[new Date().getDay()];

setInterval(function () {
  currentTime.textContent = new Date().getUTCMilliseconds();
}, 1000);
