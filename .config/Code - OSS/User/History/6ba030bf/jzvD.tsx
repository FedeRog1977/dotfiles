import { eventData } from "../../../data/Events";

function WeatherSearchList({ className, func }: any) {
    return (
        <select className={className} onChange={func}>
            {eventData[2023].map(
                ({ id, namePrefix, nameSuffix }) =>
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