'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModals = document.querySelector('.close-modal');
const btnsShowModals = document.querySelectorAll('.show-modal');



const openModal = function () {

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

}

for (let i = 0; i < btnsShowModals.length; i++) {


  btnsShowModals[i].addEventListener('click', openModal);


}

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModals.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {

    closeModel();

  }
})