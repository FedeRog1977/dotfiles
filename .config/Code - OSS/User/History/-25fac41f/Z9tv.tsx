import WeatherIcon from '../../../../elements/utils/weather/weather-icon'
import WeatherDate from '../../../../elements/utils/weather/weather-date'
import WeatherDay from '../../../../elements/utils/weather/weather-day'
import WeatherTemp from '../../../../elements/utils/weather/WeatherTemp'
import WeatherPop from '../../../../elements/utils/weather/WeatherPop'
import WeatherDesc from '../../../../elements/utils/weather/weather-desc'
import WeatherSrSs from '../../../../elements/utils/weather/WeatherSrSs'

const WeatherIntro = ({ dt, icon, temp, pop, main, desc, sr, ss }: any) => {
    return (
        <div data-testId={'weatherIntro'} className={'weatherIntro'}>
            <WeatherDay dt={dt} />
            <WeatherDate dt={dt} />
            <WeatherIcon icon={icon} />
            <WeatherTemp temp={temp} />
            <WeatherPop pop={pop} />
            <WeatherDesc main={main} desc={desc} />
            <WeatherSrSs sr={sr} ss={ss} />
        </div>
    )
}

export default WeatherIntro
