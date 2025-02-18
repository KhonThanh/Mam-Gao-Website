$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    speed: 500,
    dots: true,
    autoplay: true,
    arrows: true,
    prevArrow: $(".prev-btn"),
    nextArrow: $(".next-btn"),
    touchMove: false,
  });
});

$(document).ready(function () {
  $('.custom-certification__img').slick({
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    autoplay: true,
    arrows: true,
    touchMove: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
});

$(document).ready(function () {
  $('.partner-list').slick({
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
    autoplay: true,
    touchMove: false,
    // prevArrow: $(".prev-btn"),
    // nextArrow: $(".next-btn"),
  });
});

function popupmenu() {
  let bg = document.getElementById("background-menu-mb")
  let btn = document.getElementById("btn-menu__mb");
  let menu = document.getElementById("menu-mb");

  btn.classList.toggle("fa-bars");
  btn.classList.toggle("fa-times");

  bg.style.display = (bg.style.display === "block") ? "none" : "block";

  menu.style.display = (menu.style.display === "block") ? "none" : "block"
};




