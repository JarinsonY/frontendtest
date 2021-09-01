
import './Contact.css'

// Material ui
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Instagram from '../../assets/images/Instagram.svg';

// Material-UI Styles
const useStyles = makeStyles((theme) => ({
    button: {
        background: "linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)",
        borderRadius: "30px",
        height: "3.2rem",
        width: "13rem",
        fontSize: "18px",
        fontWeight: "500",
        marginLeft: "27px",
        '&:hover': {
            transform: "scale(1.1)",
        },
    },

}))

const Contact = () => {

    const classMUI = useStyles();

    return (
        <>
            <div className="contact-container">
                <div className="text-block-Contact">
                    <div>
                        <span>Gracias por&nbsp;</span><span><strong>completar el ejercicio</strong></span>
                    </div>
                    <div>
                        <span>Te invitamos a ver más información</span>
                    </div>
                </div>

                <div className="contact-links">
                    <a href="https://www.instagram.com/waconomads/" target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="instagram" />
                    </a>
                    <Button
                        variant="contained"
                        className={classMUI.button}
                        onClick={() => window.open('https://wacoservices.com', '_blank')}
                    >
                        Conocer más
                    </Button>
                </div>

            </div>
        </>
    )
}

export default Contact