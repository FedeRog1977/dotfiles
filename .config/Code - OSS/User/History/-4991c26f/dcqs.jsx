import { hillData } from "../../data/hills";

function SearchList({ id, func }) {
    const hills = hillData.munros.map(
        ({ lat, name }) =>
            <option key={lat} value={name}>{name}</option>
    );

    return (
        <select id={id} onChange={func}>
            {hills}
        </select>
    )
}

export default SearchList;