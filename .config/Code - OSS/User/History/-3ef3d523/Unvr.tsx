import { ReactElement } from "react";

const Search = ({ className, func, content }: any | ReactElement) => {
    return (
        <input
            type="text"
            className={className}
            onChange={func}
            placeholder={content}
        />
    )
}

export default Search;