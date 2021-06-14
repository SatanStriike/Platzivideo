import React from 'react';
import '../assets/styles/components/Header.scss';
import logoIcon from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icons8-usuario-masculino-30.png';
// Presentacional - que no va a tener logica

const Header = () => (
    <header className="header">
        <img className="header__img" src={logoIcon} alt="Logo platzi" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="User" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;