import { useHistory } from "react-router-dom";
import useUser, { USER_STATES } from "../../hooks/useUser";
import Login from "../Login";
import './LoginPage.css';
import Logo from "../../assets/images/LogoCompany.png";
import { Link } from "react-router-dom";
import Spinner from '../../assets/gifs/spinner.gif'
import { useEffect } from "react";
import Register from "../Register";
import { Button, Container, CssBaseline, makeStyles } from "@material-ui/core"
import { signInFacebook, signInGoogle } from "../../firebase/client";
import { useState } from "react";

// Material-UI Styles
const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: "10px",
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#fff',
        height: '100%',
    },
    contentLogin: {
        width: '100%',
    },
    containerLogoCompany: {
        borderRadius: "10px",
        padding: '.6rem 2rem',
        marginBottom: theme.spacing(2),
        backgroundColor: '#151515',
        width: '100%',
    },
    logoCompany: {
        width: '7rem',
    },
    divLinkChange: {
        width: '100%',
        textAlign: 'right',
    },
    linkChange: {
        color: '#004e92',
        textDecoration: 'none',
        paddingTop: '0.5rem',
        height: '100%',
        fontSize: '15px',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
        }
    },
    options: {
        padding: '.2rem 2rem',
        borderRadius: '10px',
        margin: '16px 0',
        backgroundColor: '#151515',
        color: 'white',
        width: '100%',
    },
    btnGoogle: {
        marginBottom: '0.8rem',

        backgroundColor: '#fff',
        color: '#000',
        '&:hover': {
            backgroundColor: '#4e4e4e',
            color: '#fff',
        },
    },
    btnFacebook: {
        marginBottom: '0.8rem',

        backgroundColor: '#3b5998',
        '&:hover': {
            backgroundColor: '#1d2c4c',
        },
    },
    txtOptions: {
        margin: '0.8rem 0',
        textAlign: 'center'
    },
    logoProvider: {
        marginRight: '8px',
    },
}));

export default function LoginPage() {

    const user = useUser()
    const history = useHistory()
    const classmui = useStyles();


    useEffect(() => {
        user && history.replace("/test")
    }, [user])

    const loginGoogle = (e) => {
        e.preventDefault();

        signInGoogle()
    }

    const loginFacebook = (e) => {
        e.preventDefault();

        signInFacebook()
    }


    const [seeLoginForm, setSeeLoginForm] = useState(true)

    return (
        <div className="comp-loginPage">
            <div>
                {user === USER_STATES.NOT_LOGGED && (
                    <div className={classmui.contentLogin}>
                        <Container component="main" maxWidth="xs" className={classmui.paper}>
                            <div className={classmui.containerLogoCompany}>
                                <Link to='/'>
                                    <img src={Logo} alt="Logo Company" className={classmui.logoCompany}></img>
                                </Link>
                            </div>
                            <CssBaseline />
                            {seeLoginForm ?
                                <>
                                    <Login />
                                    <div className={classmui.divLinkChange}>
                                        <p>
                                            ¿No tienes cuenta? <span
                                                onClick={(e) => setSeeLoginForm(false)}
                                                className={classmui.linkChange}>
                                                Registrarse
                                            </span>
                                        </p>
                                    </div>

                                </>
                                :
                                <>
                                    <Register />
                                    <div className={classmui.divLinkChange}>
                                        <p>
                                            ¿Ya estás registrado? <span
                                                onClick={(e) => setSeeLoginForm(true)}
                                                className={classmui.linkChange}>
                                                Iniciar sesion
                                            </span>
                                        </p>
                                    </div>

                                </>
                            }

                            <div className={classmui.options}>
                                <p className={classmui.txtOptions}>O inicia con: </p>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classmui.btnGoogle}
                                    onClick={loginGoogle}
                                >
                                    <span className={classmui.logoProvider}>
                                        <i className={'fab fa-google'} />
                                    </span>
                                    | Google
                                </Button>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classmui.btnFacebook}
                                    onClick={loginFacebook}
                                >
                                    <span className={classmui.logoProvider}>
                                        <i className='fab fa-facebook-f' />
                                    </span>
                                    | Facebook
                                </Button>
                            </div>
                        </Container>
                    </div>
                )}
                {user === USER_STATES.NOT_KNOWN && <img src={Spinner} alt="Loading Gif" />}
            </div>



        </div>
    )
}