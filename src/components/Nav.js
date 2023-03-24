import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <img src="https://parspng.com/wp-content/uploads/2022/10/camerapng.parspng.com-2.png" alt="Logo de fotografía en stock" className="nav-logo" />
            <ul className="nav-list">
                <NavLink
                    to="/"
                    className="nav-item"
                    activeClassName="nav-item-active"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/galeria"
                    className="nav-item"
                    activeClassName="nav-item-active"
                >
                    Galeria
                </NavLink>
                <NavLink
                    to="/cart"
                    className="nav-item"
                    activeClassName="nav-item-active"
                >
                    Carrito
                </NavLink>
            </ul>
        </nav>
    );
};

export default Nav;


