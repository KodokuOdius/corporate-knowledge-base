import React from 'react';
// import '../Fonts/stylesheet.css';
import Add from '../Image/add-btn.svg';
import Back from '../Image/back-btn.svg';
import Avatar from '../Image/no-foto.svg';

const NewProfile: React.FC = () => {
    return (
        <main className="page__main">
            <section className="main__content">
                    <div className="avtorisation-box profile">
                        <div className="container">
                            <img className="profile-avatar" src={Avatar} width="230" alt="Аватарка" />
                            <button className="add-avatar">
                                <img src={Add} alt="Добавить фото" />
                            </button>
                            <button className="back-btn">
                                <img src={Back} alt="Назад" />
                            </button>
                            <div className="left-column">
                            </div>
                            <div className="right-column">
                                <h2 className="column-title">Профиль</h2>
                                <div className="profile-data-box">
                                    
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            ФИО
                                            <input className="column-input creating-input" type="text" />
                                        </label>
                                    </p>
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            Эл. почта
                                            <input className="column-input creating-input" type="text" />
                                        </label>
                                    </p>
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            Отдел
                                            <input className="column-input creating-input" type="text" />
                                        </label>
                                    </p>
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            Дата рождения
                                            <input className="column-input creating-input" type="text" />
                                        </label>
                                    </p>
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            Уровень доступа
                                            <input className="column-input creating-input" type="text" />
                                        </label>
                                    </p>
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            Пароль
                                            <input className="column-input creating-input" type="text" />
                                        </label>
                                    </p>
                                </div>
                                <a className="link creating-link" href="#">Создать</a>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    )
}

export default NewProfile