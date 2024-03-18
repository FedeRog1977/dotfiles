import { hillData } from "../../../data/Hills";

function SearchList({ className, func, items }: any) {
    return (
        <select className={className} onChange={func}>
            {items.map(({ item }: any) =>
                <option key={item} value={item}>{item}</option>
            )}
        </select>
    )
}

export default SearchList;