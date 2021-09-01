import { makeStyles, Typography } from "@material-ui/core";
import ListaApi from "../ListApi"

// Material-UI Styles
const useStyles = makeStyles((theme) => ({
    divDataApi: {
        paddingTop: '120px'
    },
    dataApiTitle: {
        color: '#fff',
        marginBottom: '30px',
        textAlign: 'center',
    },
}));

const DataPosts = () => {

    const classMUI = useStyles();

    return (
        <>
            <div className={classMUI.divDataApi}>
                <Typography component="h1" variant="h4" className={classMUI.dataApiTitle}>
                    <strong>P</strong>osts <strong>A</strong>pi
                </Typography>
            </div>
            <div className='divListApi'>
                <ListaApi />
            </div>
        </>
    )
}

export default DataPosts
