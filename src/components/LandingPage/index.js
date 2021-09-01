import Banner from "../Banner"
import Bonus from "../Bonus"
import Contact from "../Contact"
import Footer from "../Footer"
import Header from "../Header"
import Nav from "../Nav"
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="comp-landingPage">
            <Nav />
            <Header />
            <Banner />
            <Bonus />
            <Contact />
            <Footer />
        </div>
    );
}

export default LandingPage;