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
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SubHeader;