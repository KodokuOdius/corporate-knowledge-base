import React from 'react';
import '../Fonts/stylesheet.css';
import HeaderSearch from '../Header/HeaderSearch';
import Folder from '../Image/folder.svg';

const CatalogWorker: React.FC = () => {

    let profile = document.querySelector('.profile-button');
    let modalProfile = document.querySelector('.modal-profile');
    let closeBtnProfile = document.querySelector('.modal-close');

    profile?.addEventListener('click', () => {
        modalProfile?.classList.toggle('visually-hidden');
    })

    closeBtnProfile?.addEventListener('click', () => {
        modalProfile?.classList.toggle('visually-hidden');
    })

    /*
    profile.onclick = () => {
        modalProfile.classList.toggle('visually-hidden');
    }
    */

    /*
    closeBtnProfile.onclick = () => {
        modalProfile.classList.add('visually-hidden');
    }
    */

    return (
        <><HeaderSearch />
        <main className="page__main">
            <div className="container">
                <section className="main__content">
                    <div className="container">
                        <section className="main__folders">
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">Название папки</span>
                            </a>
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">Название папки</span>
                            </a>
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">Название папки</span>
                            </a>
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">Название папки</span>
                            </a>
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">Лёха лох</span>
                            </a>
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">Широкоугольные компьютерные гиперболлизированные документации</span>
                            </a>
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">Название папки</span>
                            </a>
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">Название папки</span>
                            </a>
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">Название папки</span>
                            </a>
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">Название папки</span>
                            </a>
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">лалалаллалал</span>
                            </a>
                            <a className="main__folder">
                                <img src={Folder} alt="Каталог" />
                                <span className="folder-name">Название папки</span>
                            </a>
                        </section>
                    </div>
                </section>
            </div>

        </main>
            <div className="modal-profile visually-hidden">
                <img src="image/profile.svg" alt="Аватар" />
                <span className="user-name">Александр Л.</span>
                <a className="modal-profile__link" href="#">Профиль</a>
                <a className="modal-profile__link" href="#">Выйти</a>
                <button className="modal-close" type="button">Закрыть</button>
            </div></>
    )
}

export default CatalogWorker