import {
    faTemperatureHigh,
    faTemperatureLow,
    faSun,
    faMoon,
} from '@fortawesome/free-solid-svg-icons'
import { WeatherTempTile } from '../../../../elements'

export const WeatherTemp = ({
    tempMax,
    tempMin,
    tempFlDay,
    tempFlNight,
}: any) => {
    return (
        // <div className={"weatherTemp"}>
        <div className={'flexRow'}>
            <WeatherTempTile tempIcon={faTemperatureHigh} tempType={tempMax} />
            <WeatherTempTile tempIcon={faTemperatureLow} tempType={tempMin} />
            <WeatherTempTile tempIcon={faSun} tempType={tempFlDay} />
            <WeatherTempTile tempIcon={faMoon} tempType={tempFlNight} />
        </div>
        // </div>
    )
}
