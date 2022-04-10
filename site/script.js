"use strict";

const logo = document.querySelector(".logo");

const hideBtn = document.querySelectorAll(".hide-btn");
const section1 = document.querySelectorAll(".x");
const section2 = document.querySelectorAll(".y");

hideBtn[0].addEventListener("click", function () {
  section1.forEach((el) => el.classList.toggle("hide"));
  if (section1[1].classList.contains("hide")) hideBtn[0].textContent = "Show";
  else hideBtn[0].textContent = "Hide";
});

hideBtn[1].addEventListener("click", function () {
  section2.forEach((el) => el.classList.toggle("hide"));
  if (section2[1].classList.contains("hide")) hideBtn[1].textContent = "Show";
  else hideBtn[1].textContent = "Hide";
});

logo.addEventListener("click", function () {
  location.href = "index.html";
});
