import Button from "../../../elements/page/Button";
import Search from "../../atoms/Search";
import SearchList from "../../atoms/SearchList";

const WeatherSearchBar = ({ funcSelect, funcInput, funcButton }) => {
    return (
        <div>
            <SearchList id={"searchLocation"} func={funcSelect} />
            <Search id={"searchLocation"} func={funcInput} text={"Search Munro"} />
            <Button id={"searchLocation"} func={funcButton} text={"Search"} />
        </div>
    )
};

export default WeatherSearchBar;