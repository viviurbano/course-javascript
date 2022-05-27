'use strict';
///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// OLD way
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// NEW way
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

document.getElementById('section--1');
const allButtons = document.querySelectorAll('button');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookes for improve functionality and analytics. <button class="btn btn--close-cookie">Got it!<button>`;

header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Page navigation
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    //smooth scrolling
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// h1.firstElementChild.style.color = 'red';
// console.log(h1.parentNode);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target;
  console.log(clicked);
});
