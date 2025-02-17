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
    // prevArrow: $(".prev-btn"),
    // nextArrow: $(".next-btn"),
  });
});




