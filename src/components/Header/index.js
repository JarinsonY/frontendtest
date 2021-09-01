import NameCompany from "../../assets/images/NameCompany.png";
import './Header.css'

const Header = () => {
    return (
        <div id="head">
            <header className="header">
                <div className="main-title text-block-Header">
                    <span>Bienvenido a tu</span>
                    <span><strong>Entrevista Técnica</strong> en</span>
                    <img src={NameCompany} alt="company name" className="company-name" />
                </div>
            </header>
        </div>
    )
}

export default Header