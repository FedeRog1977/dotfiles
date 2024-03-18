import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import SubHeader from "./SubHeader";

const Header = () => {
    const [showSubHeader, setShowSubHeader] = useState(false);

    const subHeaderClick = ({ type }: any) => {
        if (type === "blog") {
            if (showSubHeader === false) {
                setShowSubHeader(true);
            } else {
                setShowSubHeader(false);
            }
        } else if (type === "utils") {
            if (showSubHeader === false) {
                setShowSubHeader(true);
            } else {
                setShowSubHeader(false);
            }
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
                            <li><Link to={"/weather"}>Weather</Link></li>
                            <li><Link to={"/conquest"}>Conquest</Link></li>
                            <li>|</li>
                            <li><a onClick={() => subHeaderClick("blog")}>Blog</a></li>
                            <li><a onClick={() => subHeaderClick("utils")}>Utilities</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            {showSubHeader && <SubHeader />}
        </>
    )
}

export default Header;