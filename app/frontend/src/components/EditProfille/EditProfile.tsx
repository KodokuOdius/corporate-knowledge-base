import React from 'react';
// import '../Fonts/stylesheet.css';
import Avatar from '../Image/lexa6.png';
import Back from '../Image/back-btn.svg';

const EditProfile: React.FC = () => {
    return (
        <main className="page__main">
            <section className="main__content">
                    <div className="avtorisation-box profile">
                        <div className="container">
                            <img className="profile-avatar" src={Avatar} width="230" alt="Аватарка" />
                            <button className="back-btn">
                                <img src={Back} alt="Назад" />
                            </button>
                            <div className="left-column">
                                <p className="user-name--profile">Довгань А.</p>
                            </div>
                            <div className="right-column">
                                <h2 className="column-title">Настройки</h2>
                                <div className="profile-data-box">
                                    
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            ФИО
                                            <input className="column-input creating-input" type="text" value="Довгань Алексей Иванович" />
                                        </label>
                                    </p>
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            Эл. почта
                                            <input className="column-input creating-input" type="text" value="test@mail.ru" />
                                        </label>
                                    </p>
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            Отдел
                                            <input className="column-input creating-input" type="text" value="Отдел по backend разработке" />
                                        </label>
                                    </p>
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            Дата рождения
                                            <input className="column-input creating-input" type="text" value="----" />
                                        </label>
                                    </p>
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            Уровень доступа
                                            <input className="column-input creating-input" type="text" value="1" />
                                        </label>
                                    </p>
                                    <p className="profile-data">
                                        <label className="profile-data__name column-label creating-label">
                                            Пароль
                                            <input className="column-input creating-input creating-input--password" type="password" value="12345678" />
                                        </label>
                                    </p>
                                </div>
                                <a className="link creating-link" href="#">Сохранить</a>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    )
}

export default EditProfile