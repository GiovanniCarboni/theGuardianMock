"use strict";

const logo = document.querySelector(".logo");

const hideBtn = document.querySelectorAll(".hide-btn");
// document.getElementById();
// document.getElementsByClassName();
const section1 = document.querySelectorAll(".x");
const section2 = document.querySelectorAll(".y");

hideBtn[0].addEventListener("click", function () {
  section1.forEach((el) => el.classList.toggle("hide"));
  if (section1[1].classList.contains("hide")) hideBtn[0].textContent = "Show";
  else hideBtn[0].textContent = "Hide";
});

// ES 6 Syntax
// hideBtn[0].addEventListener("click", () => {
//   section1.forEach((el) => el.classList.toggle("hide"));
//   if (section1[1].classList.contains("hide")) hideBtn[0].textContent = "Show";
//   else hideBtn[0].textContent = "Hide";
// });

// The hide / show feature can be done using HTML and CSS only

hideBtn[1].addEventListener("click", function () {
  section2.forEach((el) => el.classList.toggle("hide"));
  if (section2[1].classList.contains("hide")) hideBtn[1].textContent = "Show";
  else hideBtn[1].textContent = "Hide";
});

logo.addEventListener("click", function () {
  location.href = "index.html";
});
