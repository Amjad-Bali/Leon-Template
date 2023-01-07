// elements in Feature section
let feature = document.querySelector(".feature");
let feat = document.querySelectorAll(".feature .feat");
console.log(feature, feat);

// elements  in Service section
let services = document.querySelector(".services");
let paragrph = document.querySelectorAll(".services .services-content .text p");
console.log(feature, feat);

window.onscroll = function () {
  if (window.scrollY >= feature.offsetTop - 400) {
    feat.forEach((element) => {
      element.classList.add("animate");
    });
  }
  if (window.scrollY >= services.offsetTop - 50) {
    paragrph.forEach((element) => {
      element.classList.add("move");
    });
  }
};

let icon = document.querySelector(".header .icon");
let list = document.querySelector(".header .links ul");
icon.addEventListener("click", (e) => {
  e.stopPropagation();
  icon.children[1].classList.toggle("incress");
  list.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (e.target !== icon) {
    icon.children[1].classList.remove("incress");
    list.classList.remove("show");
  }
});
