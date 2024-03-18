import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import SubHeader from "./SubHeader";

const Header = () => {
    const [showSubHeader, setShowSubHeader] = useState(false);

    const subHeaderClick = () => {
        if (showSubHeader === false) {
            setShowSubHeader(true);
        } else {
            setShowSubHeader(false);
        }
    }

    return (
        <>
            <header className={"header"}>
                <div className={"headerLogo"}>
                    <img src={logo} alt={"logo"} style={{ width: 175 }}></img>
                </div>
                <div className={"headerNavigation"}>
                    <nav>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/academia"}>Academia</Link></li>
                            <li><Link to={"/employment"}>Employment</Link></li>
                            <li><Link to={"/library"}>Library</Link></li>
                            <li>|</li>
                            <li><a onClick={() => subHeaderClick()}>Blog</a></li>
                            <li><a onClick={() => subHeaderClick()}>Utilities</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            {showSubHeader && <SubHeader />}
        </>
    )
}

export default Header;