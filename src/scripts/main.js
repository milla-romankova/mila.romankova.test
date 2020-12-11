'use strict';

const burgerOpen = document.querySelector('.nav__button');
const burgerClose = document.querySelector('.nav__button--close');
const sidebar = document.querySelector('.sidebar');

burgerOpen.addEventListener('click', event => {
  sidebar.classList.toggle('sidebar--wide');
  burgerOpen.disabled = !burgerOpen.disabled;
});

burgerClose.addEventListener('click', event => {
  sidebar.classList.remove('sidebar--wide');
  burgerOpen.disabled = !burgerOpen.disabled;
});
