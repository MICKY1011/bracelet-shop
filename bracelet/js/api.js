// import { Splide } from "../../node_modules/@splidejs/splide";

let newSlider = document.querySelector(".newSlider");
let underSlider = document.querySelector(".newThumbnail");
let showShipping = document.querySelector(".show-shipping");
let option = document.querySelector("#shipping");

let products = [
  {
    color: "black",
    images: [
      "/bracelet/images/black-black.jpg",
      "/bracelet/images/black-black-lies.jpg",
      "/bracelet/images/black-gold.jpg",
    ]
  },
  {
    color: "white",
    images: [
      "/bracelet/images/white-gold-up.jpg",
      "/bracelet/images/white-gold.jpg",
    ],
  },
  {
    color: "brown",
    images: [
      "/bracelet/images/brown-gold.jpg",
      "/bracelet/images/brown-detail.jpg",
    ],
  },
];

let shipping = [
  { name: "free", price: "0$" },
  { name: "epost", price: "5$" },
  { name: "express", price: "10$" },
];

export default function displayImages(color) {
  newSlider.innerHTML = "";
  underSlider.innerHTML = "";
  let select = products.find((product) => product.color === color);
  if (select) {
    select.images.forEach((element) => {
      newSlider.innerHTML += `<li class="splide__slide"><img src=${element} alt=""/></li>`;
      underSlider.innerHTML += `<li class="thumbnail"><img src=${element} alt=""/></li>`;
    });  
  }
}

export function showShip(){
  let selectedOption = option.value;
  let selectedShipping = shipping.find(function (option) {
    return option.name === selectedOption;
  });
  if (selectedShipping) {
    showShipping.textContent = "Shipping: " + selectedShipping.price;
  } else {
    showShipping.textContent = "";
  }
}

  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide("#main-slide", {
        pagination: false,
        rewind: true,
      });
      var thumbnails = document.querySelectorAll(".thumbnail");
      var current;
      for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
      }
      function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener("click", function () {
          splide.go(index);
        });
      }
      splide.on("mounted move", function () {
        var thumbnail = thumbnails[splide.index];
        if (thumbnail) {
          if (current) {
            current.classList.remove("is-active");
          }
          thumbnail.classList.add("is-active");
          current = thumbnail;
        }
      });
      splide.mount();
    });