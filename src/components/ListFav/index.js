import { Button, makeStyles, Typography } from '@material-ui/core';
import Spinner from '../../assets/gifs/spinner.gif'
import { deleteFavorite } from '../../firebase/client';
import './ListFav.css';

// Material-UI Styles
const useStyles = makeStyles((theme) => ({
    divDataFav: {
        paddingTop: '80px'
    },
    dataApiTitle: {
        color: '#fff',
        marginBottom: '30px',
        textAlign: 'center',
    },
    button: {
        background: "red",
        fontSize: "small",
        marginBottom: '0.2rem',
        '&:hover': {
            background: "#8d0000",
        },
    },
}));

function ListaFav(props) {

    const { allFav } = props

    const deleteFav = (id) => {
        deleteFavorite(id)

    }

    const classmui = useStyles();

    return (
        <>
            <div className={classmui.divDataFav}>
                <Typography component="h1" variant="h4" className={classmui.dataApiTitle}>
                    <strong>F</strong>avoritos
                </Typography>
            </div>

            {!allFav
                ? <img src={Spinner} alt="Loading Gif" />
                : <table className="tableFav">
                    <thead>
                        <tr className="tableHead" key='head'>
                            <th>Id</th>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Favoritos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allFav.map((allData, index) => (
                            <tr
                                hey={allData.id ? allData.id : index}
                                className="tableRow"
                            >
                                <td>{allData.id}</td>
                                <td>{allData.title}</td>
                                <td className="o-td-body">{allData.body}</td>
                                <td>
                                    <Button
                                        type="button"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classmui.button}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            deleteFav(allData.id);
                                        }}
                                    >
                                        Quitar
                                    </Button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            }
        </>
    )
}

export default ListaFav
