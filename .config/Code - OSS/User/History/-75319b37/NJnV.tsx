import Button from "../elements/Button";
import Search from "../elements/Search";
import InstantGramSearchList from '../elements/InstantGramSearchList'
import { eventData } from "../../data/Events";
import './styles/InstantGramSearchBar.css'

const InstantGramSearchBar = ({ funcSelect, funcInput, funcButton }: any) => {
    return (
        <div className='instant-gram-search-bar'>
            <InstantGramSearchList className='instant-gram-search' func={funcSelect} items={eventData[2023]} />
            <InstantGramSearchList className='instant-gram-search' func={funcSelect} items={eventData[2023]} />
            <Search className='instant-gram-search' func={funcInput} content={"Search Munro"} />
            <Button id='instant-gram-search' func={funcButton} text={"Search"} />
        </div>
    )
};

export default InstantGramSearchBar;