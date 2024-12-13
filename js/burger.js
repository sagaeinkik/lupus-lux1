'use strict';

//Element
const burgerBtn = document.querySelector('.hamburgerbtn'); //Själva knappen
const menu = document.querySelector('.main-nav'); //Menyn
const heroText = document.querySelector('.hero-text'); //Div med text

//Event listener
burgerBtn.addEventListener('click', (e) => {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    heroText.classList.toggle('hidden');
});
