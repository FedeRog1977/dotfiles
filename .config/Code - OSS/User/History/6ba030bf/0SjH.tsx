function WeatherSearchList({ className, func, items }: any) {
    return (
        <select className={className} onChange={func}>
            <option value='' disabled selected>Select your option</option>
            {items.map(
                ({ id, namePrefix, nameSuffix }: any) =>
                    <option key={id} value={nameSuffix}>
                        {namePrefix && namePrefix}
                        {' '}
                        {nameSuffix}
                    </option>
            )}
        </select>
    )
}

export default WeatherSearchList;