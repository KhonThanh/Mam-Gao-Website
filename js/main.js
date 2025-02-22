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
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
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
  let bg = document.getElementById("background-menu-mb");
  let btn = document.getElementById("btn-menu__mb");
  let menu = document.getElementById("menu-mb");

  btn.classList.toggle("fa-bars");
  btn.classList.toggle("fa-times");

  bg.style.display = (bg.style.display === "block") ? "none" : "block";

  menu.style.display = (menu.style.display === "block") ? "none" : "block"
};

window.addEventListener("DOMContentLoaded", function(){
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  scrollTopBtn.addEventListener("click", function(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  });
});

// function popupsearch(){
//   let searchBar = document.getElementById('search-bar');

//   searchBar.style.display = (searchBar.style.display === "block") ? "none" : "block";
// };

function popupsearch() {
  let searchBar = document.getElementById("search-bar");

  // Toggle hiển thị thanh tìm kiếm
  if (searchBar.style.display === "block") {
      searchBar.style.display = "none";
      document.removeEventListener("click", handleCloseSearchBar);
  } else {
      searchBar.style.display = "block";
      // Thêm event listener để ẩn khi bấm ra ngoài
      setTimeout(() => {
          document.addEventListener("click", handleCloseSearchBar);
      }, 0);
  }
}

function handleCloseSearchBar(event) {
  let searchBar = document.getElementById("search-bar");
  let icon = document.querySelector(".search-icon");

  // Kiểm tra nếu click không nằm trong search-bar hoặc search-icon
  if (!searchBar.contains(event.target) && !icon.contains(event.target)) {
      searchBar.style.display = "none";
      document.removeEventListener("click", handleCloseSearchBar);
  }
}