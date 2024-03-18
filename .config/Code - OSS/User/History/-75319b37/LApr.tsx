import Button from "../elements/Button";
import Search from "../elements/Search";
import InstantGramSearchList from '../elements/InstantGramSearchList'
import { eventData } from "../../data/Events";

const InstantGramSearchBar = ({ funcSelect, funcInput, funcButton }: any) => {
    return (
        <div>
            <InstantGramSearchList className={"searchLocation"} func={funcSelect} items={eventData} />
            <Search className={"searchLocation"} func={funcInput} content={"Search Munro"} />
            <Button id={"searchLocation"} func={funcButton} text={"Search"} />
        </div>
    )
};

export default InstantGramSearchBar;