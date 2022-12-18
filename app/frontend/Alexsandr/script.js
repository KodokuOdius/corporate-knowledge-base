let profile = document.querySelector('.profile-button');
let modalProfile = document.querySelector('.modal-profile');
let closeBtnProfile = document.querySelector('.modal-close');

profile.onclick = () => {
    modalProfile.classList.toggle('visually-hidden');
}

closeBtnProfile.onclick = () => {
    modalProfile.classList.add('visually-hidden');
}



  