let folders = document.querySelectorAll('.main__folder');

/*
let retro = function () {
  for (let fold of folders) {   
    fold.oncontextmenu = () => {
    last = fold.lastElementChild;
      last.classList.toggle('visually-hidden');
    }
}}
*/

let addBtn = document.querySelector('.add-btn');
let modalAdd = document.querySelector('.modal-add');
let closeBtnAdd = document.querySelector('.modal-close--add');

addBtn.onclick = () => {
  modalAdd.classList.toggle('visually-hidden');
}

closeBtnAdd.onclick = () => {
  modalAdd.classList.add('visually-hidden');
}
