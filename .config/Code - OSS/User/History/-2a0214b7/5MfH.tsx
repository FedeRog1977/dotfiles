import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "../bashBlocks/elements/Typography";
import useMobile from "../scripts/general/useMobile";
import './styles/HeaderFooter.css';
import SubHeaderBlog from "./SubHeaderBlog";
import SubHeaderUtils from "./SubHeaderUtils";

const Header = () => {
    const [showSubHeaderMobile, setShowSubHeaderMobile] = useState(false);
    const [showSubHeaderBlog, setShowSubHeaderBlog] = useState(false);
    const [showSubHeaderUtils, setShowSubHeaderUtils] = useState(false);

    function handleClickMobile() {
        if (showSubHeaderMobile === false) {
            setShowSubHeaderMobile(true);
            setShowSubHeaderMobile(false);
        } else {
            setShowSubHeaderMobile(false);
        }
    }

    function handleClickBlog() {
        if (showSubHeaderBlog === false) {
            setShowSubHeaderBlog(true);
            setShowSubHeaderUtils(false);
        } else {
            setShowSubHeaderBlog(false);
        }
    }

    function handleClickUtils() {
        if (showSubHeaderUtils === false) {
            setShowSubHeaderUtils(true);
            setShowSubHeaderBlog(false);
        } else {
            setShowSubHeaderUtils(false);
        }
    }

    return (
        <>
            <header className='header'>
                <div className='header-logo'>
                    {/* <img src={placeholder} alt='logo' style={{ width: 175 }}></img> */}
                    <Typography type='h3' content='BrittonsBashRC' color='#A2A2A2' />
                </div>
                <div className='header-navigation'>
                    {useMobile() ?
                        <li>
                            <span onClick={() => handleClickMobile()}>
                                <FontAwesomeIcon icon={faHamburger} />
                            </span>
                        </li>
                        :
                        <nav>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/academia'>Academia</Link></li>
                                <li><Link to='/employment'>Employment</Link></li>
                                <li><Link to='/library'>Library</Link></li>
                                <li>|</li>
                                <li><span onClick={() => handleClickBlog()}>Blog</span></li>
                                <li><span onClick={() => handleClickUtils()}>Utilities</span></li>
                            </ul>
                        </nav>
                    }
                </div>
            </header>
            {showSubHeaderBlog && <SubHeaderBlog />}
            {showSubHeaderUtils && <SubHeaderUtils />}
        </>
    )
}

export default Header;