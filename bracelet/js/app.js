document.addEventListener("DOMContentLoaded", function () {
  new Splide(("#splide"), {
    type: "fade",
    rewind: true,
    perPage: 1,
    autoplay: false,
  }).mount();
  new Splide("#splide1", {
    type: "fade",
    rewind: true,
    perPage: 1,
    autoplay: false,
  }).mount();
  new Splide("#splide2", {
    type: "fade",
    rewind: true,
    perPage: 1,
    autoplay: false,
  }).mount();
});

let imageObj = [
  {
    id: 1,
    images: [
      "/bracelet/images/black-black.jpg",
      "/bracelet/images/black-black-lies.jpg",
      "/bracelet/images/black-gold.jpg",
    ],
    currrentIndex: 0,
    color: "black",
  },
  {
    id: 2,
    images: ["/bracelet/images/white-gold-up.jpg", "/bracelet/images/white-gold.jpg"],
    currrentIndex: 0,
    color: "white",
  },
  {
    id: 3,
    images: ["/bracelet/images/brown-gold.jpg", "/bracelet/images/brown-detail.jpg"],
    currrentIndex: 0,
    color: "brown",
  },
];

function filterByColorOption() {
  let colorCategory = document.querySelector("#color").value;
  let items = document.querySelectorAll(".splide");

  Array.from(items).forEach((element) => {
    element.style.display = colorCategory === "all" ||
      element.getAttribute("data-color") === colorCategory ? "block" : "none";
  });
}