import { Link } from "react-router-dom";

const SubHeader = () => {
    return (
        <div className={"subHeader"}>
            <div className={"subHeaderNavigation"}>
                <nav>
                    <ul>
                        <li><Link to={"/blog/instant-gram"}>Instant Gram</Link></li>
                        <li><Link to={"/blog/sport"}>Sport</Link></li>
                        <li><Link to={"/blog/foodrc"}>BrittonsFoodRC</Link></li>
                        <li><Link to={"/blog/allroad"}>allroad</Link></li>
                        <li><Link to={"/blog/miami-vice"}>Miami Vice</Link></li>
                        <li><Link to={"/blog/ricing"}>Ricing</Link></li>
                        <li><Link to={"/blog/gentlemen-who-cafe"}>Gentlemen Who Caf&eacute;</Link></li>
                        <li><Link to={"/blog/think-flow"}>ThinkFlow</Link></li>
                        <li><Link to={"/blog/founding-fathers"}>Founding Fathers</Link></li>
                        <li><Link to={"/blog/graphic-design"}>Graphic Design</Link></li>
                        <li><Link to={"/blog/media"}>Media</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SubHeader;