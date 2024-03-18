import Button from "../elements/Button";
import Search from "../../elements/utils/weather/Search";
import SearchList from "../../elements/utils/weather/SearchList";
import { eventData } from "../../data/Events";

const InstantGramSearchBar = ({ funcSelect, funcInput, funcButton }: any) => {
    return (
        <div>
            <SearchList className={"searchLocation"} func={funcSelect} items={eventData} />
            <Search className={"searchLocation"} func={funcInput} content={"Search Munro"} />
            <Button id={"searchLocation"} func={funcButton} text={"Search"} />
        </div>
    )
};

export default InstantGramSearchBar;