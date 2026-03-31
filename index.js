//! Слайдер Start

// $(document).ready(function () {
//   $('.slider-container').slick({
//     arrows: true,
//     adaptiveHeight: true,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     swipe: true,
//     touchThreshold: 10,
//     centerMode: true,
//     focusOnSelect: true,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 1000,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 1,
//         },
//       },

//       {
//         breakpoint: 520,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
// });

// Мобильное меню
let burgerMenu = document.querySelector('.burger-menu');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileClose = document.querySelector('.burger-close');
let listItems = document.querySelectorAll('.list-item');
burgerMenu.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-active');
  mobileMenu.classList.remove('mobile-disactive');
  mobileClose.classList.remove('disactive');
  burgerMenu.classList.add('disactive');
});

mobileClose.addEventListener('click', function () {
  mobileClose.classList.add('disactive');
  burgerMenu.classList.remove('disactive');
  mobileMenu.classList.remove('mobile-active');
  mobileMenu.classList.add('mobile-disactive');
});

listItems.forEach(function (item) {
  item.addEventListener('click', function () {
    mobileClose.classList.add('disactive');
    burgerMenu.classList.remove('disactive');
    mobileMenu.classList.remove('mobile-active');
    mobileMenu.classList.add('mobile-disactive');
  });
});
