let folders = document.querySelectorAll('.main__folder');

let retro = function () {
  for (let fold of folders) {   
    fold.oncontextmenu = () => {
    last = fold.lastElementChild;
      last.classList.toggle('visually-hidden');
    }
}}

  