import React from 'react';
// import '../Fonts/stylesheet.css';
import Avatar from '../Image/lexa6.png';
import Back from '../Image/back-btn.svg';
import { NavLink } from 'react-router-dom';

const ProfileWorker = () => {
    return (
        <main className="page__main">
            <section className="main__content">
                    <div className="avtorisation-box profile">
                        <div className="container">
                            <img className="profile-avatar" src={Avatar} alt="Аватарка" />
                            
                            <button className="back-btn">
                                <img src={Back} alt="Назад" />
                            </button>
                            <div className="left-column">
                                <p className="user-name--profile">Довгань А.</p>
                            </div>
                            <div className="right-column">
                                <h2 className="column-title">Профиль</h2>
                                <div className="profile-data-box">
                                    <p className="profile-data">
                                        <span className="profile-data__name">ФИО</span>
                                        Довгань Алексей Иванович
                                    </p>
                                    <p className="profile-data">
                                        <span className="profile-data__name">Эл. почта</span>
                                        test@mail.ru
                                    </p>
                                    <p className="profile-data">
                                        <span className="profile-data__name">Отдел</span>
                                        Отдел по backend разработке
                                    </p>
                                    <p className="profile-data">
                                        <span className="profile-data__name">Дата рождения</span>
                                        ----
                                    </p>
                                    <p className="profile-data">
                                        <span className="profile-data__name">Уровень доступа</span>
                                        1
                                    </p>
                                </div>
                                <NavLink className="link" to="/editProfile">Редактировать профиль</NavLink>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    )
}

export default ProfileWorker