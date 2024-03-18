import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import SubHeaderBlog from "./SubHeaderBlog";
import SubHeaderUtils from "./SubHeaderUtils";

const Header = () => {
    const [showSubHeaderBlog, setShowSubHeaderBlog] = useState(false);
    const [showSubHeaderUtils, setShowSubHeaderUtils] = useState(false);

    function subHeaderClick({ type }: any) {
        if (showSubHeaderBlog === false) {
            setShowSubHeaderBlog(true);
        } else {
            setShowSubHeaderBlog(false);
        }
    }
    function subHeaderClickUtils() { }
    if (showSubHeaderUtils === false) {
        setShowSubHeaderUtils(true);
    } else {
        setShowSubHeaderUtils(false);
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
                        <li><a onClick={() => subHeaderClick("blog")}>Blog</a></li>
                        <li><a onClick={() => subHeaderClick("utils")}>Utilities</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        {showSubHeaderBlog && <SubHeaderBlog />}
        {showSubHeaderUtils && <SubHeaderUtils />}
    </>
)
}

export default Header;