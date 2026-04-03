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

//TODO Аккордион Start
let accordeons = document.querySelectorAll('.accordion-header');
accordeons.forEach(function (accord) {
  accord.addEventListener('click', function (elem) {
    let action = elem.target;
    let currentAccordElem = action.closest('.accordion-header'); //определяем текущий бокс
    let currentContent = action.nextElementSibling; // находим скрытый контент
    currentAccordElem.classList.toggle('active'); //присваиваем основному контейнеру флаг активности
    if (currentAccordElem.classList.contains('active')) {
      currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      //Обратить внимание чтоб стили были присвоены классу .accordion-collapse
      reachGoal('camp_2024_accord', { block: currentAccordElem.innerText });
    } else {
      currentContent.style.maxHeight = 0;
    }
  });
});
//TODO Аккордион End
