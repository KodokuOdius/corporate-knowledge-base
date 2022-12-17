import { NavLink } from 'react-router-dom';
import '../Fonts/stylesheet.css';

const Registration: React.FC = () => {

    return (
        <main className="page__main">
            <div className="avtorisation-box registration-box">
                <div className="container">
                    <div className="left-column"></div>
                    <div className="right-column">
                        <h2 className="column-title">Регистрация</h2>
                        <form className="column-form" method="get">
                            <label className="column-label">
                                Введите почту
                                <input className="column-input" type="email" required/>
                            </label>
                            <label className="column-label">
                                Введите пароль
                                <input className="column-input" type="password" required/>
                            </label>
                            <label className="column-label">
                                Повторите пароль
                                <input className="column-input" type="password" required/>
                            </label>
                            <div>
                                <label className="remember-me">
                                    <input type="checkbox" required/>
                                    Я согласен с <span>Условиями</span>
                                </label>
                            </div>
                            <NavLink to="/signUp">
                                <button type="submit" className="button avtorisation-button">Регистрация</button>
                            </NavLink>
                            <p>Есть профиль? <NavLink className="link" to="/signUp">Войдите! </NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Registration