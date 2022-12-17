import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Fonts/stylesheet.css';
import Logo from '../Image/logo.png';
import Profile from '../Image/profile.svg';

const HeaderSearch: React.FC = () => {
    return (
        <header className="page-header">
        <div className="container">
                <img className="logo" src={Logo} alt="Логотип" />
            <form method="get" className="header__form">
                <input className="header__input" type="text" placeholder="Поиск" />
            </form>
            <button className="profile-button">
                <img src={Profile} alt="Профиль" />
            </button>
        </div>
    </header>
    )
}

export default HeaderSearch