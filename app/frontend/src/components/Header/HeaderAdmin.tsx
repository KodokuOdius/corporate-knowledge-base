import React from 'react';
import '../Fonts/stylesheet.css';
import Logo from '../Image/logo.png';
import Profile from '../Image/profile.svg';
import Plus from '../Image/add-btn.svg';
import { NavLink } from 'react-router-dom';

const HeaderAdmin: React.FC = () => {
    return (
        <header className="page-header">
        <div className="container">
                <img className="logo" src={Logo} alt="Логотип" />
            <form method="get" className="header__form">
                <input className="header__input" type="text" placeholder="Поиск" />
            </form>
            <div className="admin-buttons">
                <button className="profile-button">
                    <img src={Profile} alt="Профиль" />
                </button>
                <button className="profile-button">
                    <img src={Plus} alt="Профиль" />
                </button>
            </div>
        </div>
    </header>
    )
}

export default HeaderAdmin