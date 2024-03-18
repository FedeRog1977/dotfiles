import { Link } from "react-router-dom";

const SubHeaderUtils = () => {
    return (
        <div className='sub-header'>
            <div className='subHeaderNavigation'>
                <nav>
                    <ul>
                        <li><Link to={"/utils/weather"}>Weather</Link></li>
                        <li><Link to={"/utils/conquest"}>Conquest</Link></li>
                        <li>|</li>
                        <li><Link to={"/utils/bash-blocks"}>BashBlocks</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SubHeaderUtils;