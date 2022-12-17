import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Fonts/stylesheet.css';
import Logo from '../Image/logo.png';

const Header: React.FC = () => {
    return (
        <header className="page-header">
            <div className="container">
                <NavLink to="/">
                    <img className="logo" src={Logo} alt="Логотип" />
                </NavLink>
                <NavLink to="/signUp">
                    <button className="button">Войти</button>
                </NavLink>
            </div>
        </header>
    )
}

export default Header