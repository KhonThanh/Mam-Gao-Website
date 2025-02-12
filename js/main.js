$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    speed: 500,
    dots: true,
    autoplay: true,
    arrows: true,
    prevArrow: $(".prev-btn"),
    nextArrow: $(".next-btn"),
  });
});

$(document).ready(function () {
  $('.certification').slick({
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
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
    prevArrow: $(".prev-btn"),
    nextArrow: $(".next-btn"),
  });
});




