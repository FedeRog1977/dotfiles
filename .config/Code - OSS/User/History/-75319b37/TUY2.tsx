import Button from "../elements/Button";
import Search from "../elements/Search";
import InstantGramSearchList from '../elements/InstantGramSearchList'
import { eventData } from "../../data/Events";

const InstantGramSearchBar = ({ funcSelect, funcInput, funcButton }: any) => {
    return (
        <div className='instant-gram-search-bar'>
            <InstantGramSearchList className={""} func={funcSelect} items={eventData[2023]} />
            <Search className={""} func={funcInput} content={"Search Munro"} />
            <Button id={""} func={funcButton} text={"Search"} />
        </div>
    )
};

export default InstantGramSearchBar;