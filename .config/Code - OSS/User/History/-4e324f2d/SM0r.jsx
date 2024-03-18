const Search = ({ id, func, text }) => {

    return (
        <input
            type="text"
            id={id}
            onChange={func}
            placeholder={text}
        >
        </input>
    )
}

export default Search;