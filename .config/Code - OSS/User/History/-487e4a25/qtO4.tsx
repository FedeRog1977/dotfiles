function InstantGramSearchList({ className, func, items, year }: any) {
    return (
        <select className={className} onChange={func}>
            <option value='' disabled selected>{year}</option>
            {items.map(
                ({ id, namePrefix, names }: any) =>
                    <option key={id} value={names}>
                        {namePrefix &&
                            <>{namePrefix}{': '}</>
                        }
                        {names.join(' / ')}
                    </option>
            )}
        </select >
    )
}

export default InstantGramSearchList;