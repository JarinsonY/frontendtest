import { Button, Grid, makeStyles, TextField, Typography } from "@material-ui/core"
import { useState } from "react";
import { signIn } from "../../firebase/client";

// Material-UI Styles
const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
    },
    button: {
        background: "linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)",
        color: '#000',
        fontSize: "18px",
        marginBottom: '0.8rem',
        '&:hover': {
            background: "linear-gradient(270deg, #00FF68 2.73%, #00E6E3 100%)",
        },
    },
    submit: {
        margin: theme.spacing(1.5, 10, 1.5),
    },
    input: {
        color: 'white',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 200,
    },
}));

const Login = () => {

    const classmui = useStyles();

    //  Logic
    const [formData, setFormData] = useState({ email: '', password: '' })

    const onChange = (key, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [key]: value
        }))

    }

    const handleLogin = (e) => {
        e.preventDefault();

        const email = formData.email.trim()
        const password = formData.password.trim()

        signIn(email, password)
    };

    return (

        <div >
            <Typography component="h1" variant="h4">
                Iniciar <strong>Sesión</strong>
            </Typography>
            <form className={classmui.form} onSubmit={handleLogin}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Correo"
                    type="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    defaultValue={formData.email}
                    onChange={(e) => onChange('email', e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    defaultValue={formData.password}
                    onChange={(e) => onChange('password', e.target.value)}
                />
                <Grid container>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classmui.button}
                    >
                        Ingresar
                    </Button>
                </Grid>
            </form>
        </div>
    )
}

export default Login