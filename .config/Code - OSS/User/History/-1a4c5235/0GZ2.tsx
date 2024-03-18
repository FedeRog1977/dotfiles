import { hillData } from '../../../data/general/hills'

function WeatherSearchList({ className, func }: any) {
    return (
        <select className={className} onChange={func}>
            {hillData.munros.map(({ lat, name }) => (
                <option key={lat} value={name}>
                    {name}
                </option>
            ))}
        </select>
    )
}

export default WeatherSearchList
