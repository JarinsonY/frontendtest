import useUser from "../../hooks/useUser"
import DataPosts from "../DataPosts";
import NavListings from "../NavListings";
import './ListingsPage.css'

const ListingsPage = () => {

    const user = useUser()

    return (
        <>
            {user ?
                <div className="comp-listingsPage">
                    <NavListings />
                    <DataPosts />
                </div>
                : <p>Redirect...</p>}
        </>
    )
}

export default ListingsPage