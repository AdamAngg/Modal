'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');

const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnOpen.length; i++)
  btnOpen[i].addEventListener('click', open);

btnClose.addEventListener('click', close);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    close();
  }
});
