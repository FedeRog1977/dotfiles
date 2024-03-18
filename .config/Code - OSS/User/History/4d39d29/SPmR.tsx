import WeatherDeg from '../../../../elements/utils/weather/weather-deg'
import WeatherDir from '../../../../elements/utils/weather/WeatherDir'

const WeatherWind = ({ windDeg, windSpd }: any) => {
    return (
        <div className={'weatherWind'}>
            <WeatherDir wind={windDeg} />
            <WeatherDeg wind={windDeg} />
            <div>
                <small>{windDeg}&deg;</small>
            </div>
            <div data-testid={'weatherWindConversion'}>
                <b>{(windSpd * 2.23694).toFixed(0)}mph</b>
            </div>
        </div>
    )
}

export default WeatherWind
