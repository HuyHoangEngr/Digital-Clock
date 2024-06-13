let time = document.getElementById("time");
let date = document.getElementById("date");
let day = document.getElementById("day");
let days = [
  "Chúa Nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
];

// --------------------------------------------------------------------------------------------------

setInterval(() => {
  time.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
  let newday = new Date().getDay();
  day.innerHTML = days[newday];
  date.innerHTML = new Date().toLocaleDateString();
}, 1000);

// --------------------------------------------------------------------------------------------------
