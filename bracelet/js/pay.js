import displayImages , {showShip} from "./api.js";

let colorSelector = document.querySelectorAll(".color");
let option = document.querySelector("#shipping");

option.addEventListener("change", function () {
  showShip()
});

colorSelector[0].addEventListener("click", () => {
  displayImages("black");
});
colorSelector[1].addEventListener("click", () => {
  displayImages("white");
});
colorSelector[2].addEventListener("click", () => {
  displayImages("brown");
});
