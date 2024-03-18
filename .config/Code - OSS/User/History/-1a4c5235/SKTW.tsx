import { hillData } from "../../../data/Hills";

function SearchList({ className, func, items }: any) {
    const hills = items.map((item,) =>
        <option key={item} value={item}>{item}</option>
    );

    return (
        <select className={className} onChange={func}>
            {hills}
        </select>
    )
}

export default SearchList;