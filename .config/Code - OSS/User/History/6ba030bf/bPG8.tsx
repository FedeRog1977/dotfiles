import { eventData } from "../../../data/Events";

function WeatherSearchList({ className, func, items }: any) {
    return (
        <select className={className} onChange={func}>
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