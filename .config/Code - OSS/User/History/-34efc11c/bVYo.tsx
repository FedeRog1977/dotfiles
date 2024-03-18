import WeatherSearch from '../../components/utils/weather/WeatherSearch'
import Background from '../../elements/background'

export const Weather = () => (
    <div>
        <Background text={'Weather Forecast'} />
        <div className={'body'}>
            <WeatherSearch />
        </div>
    </div>
)
