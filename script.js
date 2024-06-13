let time = document.getElementById("time");
let date = document.getElementById("date");
let day = document.getElementById("day");

// --------------------------------------------------------------------------------------------------

setInterval(() => {
  time.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
}, 1000);

// --------------------------------------------------------------------------------------------------

date.innerHTML = new Date().toLocaleDateString();

// --------------------------------------------------------------------------------------------------

let days = [
  "Chúa Nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
];
let newday = new Date().getDay();
day.innerHTML = days[newday];
