import { Basket, SearchInput } from "../index";

import LogoImage from "../../assets/images/logo.png";
import "./style/Navbar.scss"

function Navbar() {
    return (
        <div className="navbar">
            <img src={ LogoImage } alt="Hepsi Burada" className="logo"/>
            <SearchInput/>
            <Basket/>
        </div>
    );
}

export default Navbar;
