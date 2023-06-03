import displayImages , {showShip} from "./api.js";

let slider = document.querySelector(".slider");
let under = document.querySelector(".under");

let colorSelector = document.querySelectorAll(".color");
let option = document.querySelector("#shipping");

option.addEventListener("change", function () {
  showShip()
});

colorSelector[0].addEventListener("click", () => {
  displayImages("black");
  slider.innerHTML = ""
  under.innerHTML = ""
});
colorSelector[1].addEventListener("click", () => {
  displayImages("white");
  slider.innerHTML = ""
  under.innerHTML = ""
});
colorSelector[2].addEventListener("click", () => {
  displayImages("brown");
  slider.innerHTML = ""
  under.innerHTML = ""
});
