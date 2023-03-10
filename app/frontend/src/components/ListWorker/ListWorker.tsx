import React from 'react';
// import '../Fonts/stylesheet.css';
import AvatarAl from '../Image/html-jun.png';
import AvatarLe from '../Image/lera.png';
import AvatarOk from '../Image/oksana.png';
import AvatarDo from '../Image/lexa.png';
import AvatarTo from '../Image/no_photo.png';
import AvatarMi from '../Image/misha.png';
import Back from '../Image/back-btn.svg';
import Add from '../Image/add-btn.svg';
import { NavLink } from 'react-router-dom';

const ListWorker: React.FC = () => {
    return (
        <main className="page__main">
            <section className="staff">
                <div className="container">
                    <button className="back-btn">
                        <img src={Back} alt="Назад" />
                    </button>
                    <NavLink to="/createProfile">
                    <button className="staff-add">
                        <img src={Add} alt="Назад" />
                    </button>
                    </NavLink>
                    <h1 className="staff__title">Список сотрудников</h1>
                    <ul className="staff__list">
                        <li className="staff__item">
                            <img src={AvatarAl} alt="Аватарка сотрудника" />
                            <span className="staff__name">Литвинов А.</span>
                            <span className="staff__division">отдел по frontend разработке</span>
                        </li>
                        <li className="staff__item">
                            <img src={AvatarLe} alt="Аватарка сотрудника" />
                            <span className="staff__name">Михайленко В.</span>
                            <span className="staff__division">отдел по frontend разработке</span>
                        </li>
                        <li className="staff__item">
                            <img src={AvatarOk} alt="Аватарка сотрудника" />
                            <span className="staff__name">Подковырова О.</span>
                            <span className="staff__division">Бизнес аналитик</span>
                        </li>
                        <li className="staff__item">
                            <img src={AvatarDo} alt="Аватарка сотрудника" />
                            <span className="staff__name">Довгань А.</span>
                            <span className="staff__division">отдел по backend разработке</span>
                        </li>
                        <li className="staff__item">
                            <img src={AvatarTo} alt="Аватарка сотрудника" />
                            <span className="staff__name">Топчиев В.</span>
                            <span className="staff__division">отдел по службе поддержки</span>
                        </li>
                        <li className="staff__item">
                            <img src={AvatarMi} alt="Аватарка сотрудника" />
                            <span className="staff__name">Профацкий М.</span>
                            <span className="staff__division">отдел по тестированию</span>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default ListWorker