import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import '../Fonts/stylesheet.css';
import HeaderAdmin from '../Header/HeaderAdmin';
import Folder from '../Image/folder.svg';
import Profile from '../Image/lexa.png';

const CatalogAdmin: React.FC = () => {

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
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // отображение контекстного меню
    const showContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        // скрыть дефолтное меню
        event.preventDefault();

        setIsShow(false);
        const newPosition = {
            x: event.pageX - 330,
            y: event.pageY - 280,
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




    //! тут надо исправить
    /*
    let retro = function () {
    for (let fold of folders) {   
        fold.oncontextmenu = () => {
        const last = fold.lastElementChild;
        last?.classList.toggle('visually-hidden');
        }
    }}

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

    useEffect(() => {
        const getCookie = (name: string) => {
            let cookieValue = "";
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    };
                };
            };
            return cookieValue;
        };


        fetch('/api/auth/login/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                // 'X-CSRFToken':  token
            },
            method: 'GET',
            mode: 'no-cors',
            // body: JSON.stringify({
            //     email: 'qwe@qwe.qwe',
            //     password: 'qwe'
            // })
        }
        ).then(res => res.text()
        ).then(data => {
            console.log(data)
            const token = getCookie('csrftoken');
            const wtoken = getCookie('csrfmiddlewaretoken');
            console.log(token);
            console.log(wtoken);
            const headers = new Headers();
            console.log(headers.get('csrftoken'))

            var parser = new DOMParser();
            // Parse the text
            var doc = parser.parseFromString(data, "text/html");

            const token_input = doc.querySelector<HTMLInputElement>('input[name="csrfmiddlewaretoken"]');
            console.log(token_input?.value);
        }
        ).catch(err => console.warn(err));

        // fetch('/api/catalogs/',
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        //             'X-CSRFToken': getCookie("csrftoken"),
        //             'sessionid': 'fm8gu6zam68n4j40kdi3i0asa48odx05'
        //         },
        //         method: 'GET',
        //         mode: 'no-cors'
        //     }
        // ).then(res => res.json()
        // ).then(data => console.log(data)
        // ).catch(err => console.warn(err));
    }, []);

    return (
        <><HeaderAdmin /><main className="page__main">
            <div className="container">
                <section className="main__content">
                    <div className="container">
                        <section className="main__folders">
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <NavLink to="/fileAdmin">
                                    <img src={Folder} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </NavLink>
                                {isShow ? (
                                    <div style={{ top: position.y, left: position.x }} className="modal-change">
                                        <button onClick={() => doSomething("Переименовать")}>Переименовать</button>
                                        <button onClick={() => doSomething("Удалить")}>Удалить</button>
                                    </div>
                                ) : <></>}
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={Folder} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={Folder} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={Folder} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={Folder} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={Folder} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={Folder} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={Folder} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={Folder} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={Folder} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={Folder} alt="Каталог" />
                                    <span className="folder-name">Название папки</span>
                                </a>
                                <div className="modal-change visually-hidden">
                                    <button>Переименовать</button>
                                    <button>Удалить</button>
                                </div>
                            </article>
                            <article className="main__folder" onContextMenu={showContextMenu} onClick={hideContextMenu}>
                                <a>
                                    <img src={Folder} alt="Каталог" />
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

export default CatalogAdmin;