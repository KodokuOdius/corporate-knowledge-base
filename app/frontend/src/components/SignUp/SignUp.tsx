import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Fonts/stylesheet.css';

const SignUp: React.FC = () => {

    return (
        <main className="page__main">
            <div className="avtorisation-box">
                <div className="container">
                    <div className="left-column"></div>
                    <div className="right-column">
                        <h2 className="column-title">Авторизация</h2>
                        <form className="column-form" method="get">
                            <label className="column-label avtorisation-label">
                                Ваша почта
                                <input className="column-input" type="text" />
                            </label>
                            <label className="column-label">
                                Пароль
                                <input className="column-input" type="password" />
                            </label>
                            <div>
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    Запомнить меня
                                </label>
                                <a className="forgot-pass link" href="#">Забыли пароль?</a>
                            </div>
                            <NavLink to="/catalogAdmin">
                                <button className="button avtorisation-button">Войти</button>
                            </NavLink>
                            <p>Нет профиля? <NavLink className="link" to="/registration">Зарегистрируйтесь!</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignUp