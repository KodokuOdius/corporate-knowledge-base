import React from 'react';
import '../Fonts/stylesheet.css';
import Commando from '../Image/commando.png';
import Back from '../Image/back-btn.svg';

const ProfileAdmin: React.FC = () => {
    return (
        <main className="page__main">
            <section className="main__content">
                <div className="avtorisation-box profile">
                    <div className="container">
                        <img className="profile-avatar" src={Commando} alt="Аватарка" />
                            
                        <button className="back-btn">
                            <img src={Back} alt="Назад" />
                        </button>
                        <div className="left-column">
                            <p className="user-name--profile">Михаил П.</p>
                        </div>
                        <div className="right-column">
                            <h2 className="column-title">Профиль</h2>
                            <div className="profile-data-box">
                                <p className="profile-data">
                                    <span className="profile-data__name">ФИО</span>
                                    Литвинов Александр Владимирович
                                </p>
                                <p className="profile-data">
                                    <span className="profile-data__name">Эл. почта</span>
                                    zmeelov161rus@yandex.ru
                                </p>
                                <p className="profile-data">
                                    <span className="profile-data__name">Дата рождения</span>
                                    02.02.2004
                                </p>
                                <p className="profile-data">
                                    <span className="profile-data__name">Уровень доступа</span>
                                    1
                                </p>
                            </div>
                            <a className="link" href="#">Редактировать профиль</a>
                        </div>
                    </div>
                </div>
            </section>      
        </main>
    )
}

export default ProfileAdmin
