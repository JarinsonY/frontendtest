import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from "../../assets/images/LogoCompany.png";
import BtnCollapse from './BtnCollapse';
import { scrollToPlace } from '../../utils/utils';

const Nav = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={Logo} alt="Logo Company" className="o-img-logo"></img>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                to="/"
                                className='nav-links'
                                onClick={() => { 
                                    scrollToPlace(0); closeMobileMenu() }}>
                                INICIO
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to="/"
                                className='nav-links'
                                onClick={() => { scrollToPlace(870); closeMobileMenu() }}>
                                BENEFICIOS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/login'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                    </ul>
                    {button && <BtnCollapse buttonStyle='btn--outline' to={"/login"}>Login</BtnCollapse>}
                </div>
            </nav>
        </>
    )
}

export default Nav
