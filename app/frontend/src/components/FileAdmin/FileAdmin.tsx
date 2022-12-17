import React, { useState } from 'react'
import HeaderAdmin from '../Header/HeaderAdmin';
import Profile from '../Image/леша фото.png';
import File from '../Image/file.svg';
import { NavLink } from 'react-router-dom';

const FileAdmin: React.FC = () => {

    // клик по профилю
    let profile = document.querySelector('.profile-button');
    let modalProfile = document.querySelector('.modal-profile');
    let closeBtnProfile = document.querySelector('.modal-close');

    profile?.addEventListener('click', () => {
        modalProfile?.classList.toggle('visually-hidden');
    })

    closeBtnProfile?.addEventListener('click', () => {
        modalProfile?.classList.add('visually-hidden');
    })

    

    // клик по папке
    //let folders = document.querySelectorAll('.main__folder');

    // ПАПКИ
    // отображать или скрывать меню
    const [isShow, setIsShow] = useState(false);

    // позиция контекстного меню
    const [position, setPosition] = useState({x: 0, y: 0});

    // отображение контекстного меню
    const showContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        // скрыть дефолтное меню
        event.preventDefault();

        setIsShow(false);
        const newPosition = {
            x: event.pageX - 330,
            y: event.pageY -280,
        };

        setPosition(newPosition);
        setIsShow(true);
    };

    // скрытие контекстного меню
    const hideContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsShow(false);
    };

    // действие в контекстном меню
    const [selectedValue, setSelectedValue] = useState<String>();
    const doSomething = (selectedValue: String) => {
        setSelectedValue(selectedValue);
    };

    return (
        <><HeaderAdmin /><main className="page__main">
            <div className="container">
                <section className="main__content">
                    <div className="container">
                        <section className="main__folders">
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                {isShow ?  (
                                    <div style={{top: position.y, left: position.x}} className="modal-change">
                                        <button onClick={() => doSomething("Переименовать")}>Переименовать</button>
                                        <button onClick={() => doSomething("Удалить")}>Удалить</button>
                                    </div>
                                ) : <></>}
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                    </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                    </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={File} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                        </section>
                        <div className="modal-profile visually-hidden">
                            <img src={Profile} alt="Аватар" />
                            <span className="user-name">Довгань А.</span>
                            <NavLink className="modal-profile__link" to="/profileWorker">Профиль</NavLink>
                            <NavLink className="modal-profile__link" to="/listWorker">Список сотрудников</NavLink>
                            <NavLink className="modal-profile__link" to="/">Выйти</NavLink>
                            <button className="modal-close" type="button">Закрыть</button>
                        </div>
                    </div>
                </section>
            </div>
        </main></>
    )
}

export default FileAdmin