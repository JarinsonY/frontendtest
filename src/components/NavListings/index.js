import { Button, makeStyles, Typography } from "@material-ui/core";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.css';
import IconCompany from "../../assets/images/IconCompany.png";

import { logOut } from "../../firebase/client";
import { scrollToPlace } from "../../utils/utils";
import { getAuth } from "firebase/auth";

// Material-UI Styles
const useStyles = makeStyles((theme) => ({
    iconCompany: {
        width: '4rem',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    },
    nameCompany: {
        color: '#fff',
        marginLeft: '20px',
        width: '100%',
    },
    button: {
        background: "linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)",
        color: '#000',
        fontSize: "18px",
        '&:hover': {
            background: "linear-gradient(270deg, #008c8a 2.73%, #008436 100%)",
        },
    },
    linkLogin: {
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        height: '100%',
    },
}));

const NavListings = () => {

    const classmui = useStyles();

    const auth = getAuth();

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
                        <img src={IconCompany} alt="Logo Waco" className={classmui.iconCompany}></img>
                    </Link>
                    <div>
                        <Typography component="h6" variant="h6" className={classmui.nameCompany}>
                            <strong>Bienvenido</strong> {auth.currentUser.displayName}
                        </Typography>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <p
                                
                                className='nav-links'
                                onClick={() => { scrollToPlace(0); closeMobileMenu() }}>
                                API
                            </p>
                        </li>
                        <li className='nav-item'>
                            <p
                                className='nav-links'
                                onClick={() => { scrollToPlace(610); closeMobileMenu() }}>
                                FAVORITOS
                            </p>
                        </li>
                        <li>
                            <div
                                onClick={closeMobileMenu}
                                className='nav-links-btn'>
                                <Button
                                    onClick={logOut}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classmui.button}
                                >
                                    Cerrar
                                </Button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavListings