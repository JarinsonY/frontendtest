import { Button, Grid, makeStyles, TextField, Typography } from "@material-ui/core"
import { useState } from "react";
import { checkIn } from "../../firebase/client";

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

const Register = () => {

    const classmui = useStyles();

    //  Logic
    const [formData, setFormData] = useState({ userName: '', email: '', password: '' })

    const onChange = (key, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [key]: value
        }))
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const userName = formData.userName.trim()
        const email = formData.email.trim()
        const password = formData.password.trim()

        checkIn(userName, email, password)
    };

    return (

        <div>
            <Typography component="h1" variant="h4">
                Regis<strong>trarse</strong>
            </Typography>
                <form className={classmui.form} onSubmit={handleLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="userName"
                        label="Nombre de usuario"
                        type="text"
                        name="userName"
                        autoComplete="name"
                        autoFocus
                        defaultValue={formData.userName}
                        onChange={(e) => onChange('userName', e.target.value)}
                    />
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
                        defaultValue={formData.email}
                        onChange={(e) => onChange('email', e.target.value)}
                        InputLabelProps={{
                            classmui: {
                                root: classmui.cssLabel,
                                focused: classmui.cssFocused,
                                className: classmui.input,
                            },
                        }}
                        InputProps={{
                            classmui: {
                                input: classmui.input,
                                root: classmui.cssOutlinedInput,
                                focused: classmui.cssFocused,
                                notchedOutline: classmui.notchedOutline,
                            },
                        }}
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
                            Registrarse
                        </Button>
                    </Grid>
                </form>
        </div>
    )
}

export default Register