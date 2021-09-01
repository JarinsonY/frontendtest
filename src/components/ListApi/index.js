import { Button, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Spinner from '../../assets/gifs/spinner.gif'
import { addFavorite, fetchFavorites } from '../../firebase/client';
import ListaFav from '../ListFav';
import './ListApi.css';

// Material-UI Styles
const useStyles = makeStyles((theme) => ({
    button: {
        background: "linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)",
        color: '#000',
        fontSize: "small",
        marginBottom: '0.2rem',
        '&:hover': {
            background: "linear-gradient(270deg, #008c8a 2.73%, #008436 100%)",
        },
    },
}));

function ListaApi() {

    const addFav = (id, title, body) => {
        addFavorite(id, title, body)
    }

    const [allFav, setAllFav] = useState()

    const getFavorites = () => {
        fetchFavorites()
            .then(setAllFav)
            .catch(e => console.log(e))
    }

    const classmui = useStyles();

    const url = "https://waco-api.herokuapp.com/api/posts";
    const [all, setAll] = useState()

    const fetchApi = async () => {
        const responce = await fetch(url)
        const responseJSON = await responce.json()
        if (!responce.ok) {
            console.error('Ocurrio un error interno del API. Intente dentro de un momento')
        }
        if (responce.ok) {
            setAll(responseJSON.data);
        }
        console.log(responseJSON.data);
    }


    useEffect(() => {
        fetchApi()
    }, [])

    useEffect(() => {
        fetchFavorites().then(setAllFav)
    }, [allFav])


    return (
        <>

            {!all
                ? <img src={Spinner} alt="Loading Gif" />
                : <table className="tableApi">
                    <thead>
                        <tr className="tableHead">
                            <th>Id</th>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Favoritos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all.map((allData, index) => (
                            <tr
                                key={allData.id ? allData.id : index}
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
                                            addFav(allData.id, allData.title, allData.body);
                                            getFavorites();
                                        }}
                                    >
                                        Añadir
                                    </Button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            }

            <div className='divListFav'>
                <ListaFav allFav={allFav} />
            </div>
        </>
    )
}

export default ListaApi
