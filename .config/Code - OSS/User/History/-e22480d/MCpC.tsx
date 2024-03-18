import { WeatherColumnDaily, WeatherHourly } from '.'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Button, Flex, Grid, Spacing } from '../../../../bash-blocks'
import {
    useShowElement,
    useOpenWeatherCall,
    useScreenWidth,
} from '../../../../../scripts'

export const WeatherDaily = ({ lat, lon }: any) => {
    const { isMobile } = useScreenWidth()
    const { showElement, setShowElement } = useShowElement()
    const { dailyResult } = useOpenWeatherCall(lat, lon)

    return (
        <>
            <Flex>
                {dailyResult.slice(0, 7).map((value, idx) => (
                    <Flex item>
                        <WeatherColumnDaily
                            key={idx}
                            dt={value.dt}
                            icon={value.weather[0].icon}
                            temp={value.temp.day}
                            pop={value.pop}
                            desc={value.weather[0].description}
                            sr={value.sunrise}
                            ss={value.sunset}
                            tempMax={value.temp.max}
                            tempMin={value.temp.min}
                            tempFlDay={value.feels_like.day}
                            tempFlNight={value.feels_like.night}
                            windDeg={value.wind_deg}
                            windSpd={value.wind_speed}
                            pressure={value.pressure}
                            humidity={value.humidity}
                            dp={value.dew_point}
                            uvi={value.uvi}
                        />
                    </Flex>
                ))}
            </Flex>
            {/* <Grid alignColumns="auto">
                {dailyResult.slice(0, 7).map((value, index) => (
                    <Grid columnItem={[1, 7]} key={index}>
                        <WeatherColumnDaily
                            dt={value.dt}
                            icon={value.weather[0].icon}
                            temp={value.temp.day}
                            pop={value.pop}
                            desc={value.weather[0].description}
                            sr={value.sunrise}
                            ss={value.sunset}
                            tempMax={value.temp.max}
                            tempMin={value.temp.min}
                            tempFlDay={value.feels_like.day}
                            tempFlNight={value.feels_like.night}
                            windDeg={value.wind_deg}
                            windSpd={value.wind_speed}
                            pressure={value.pressure}
                            humidity={value.humidity}
                            dp={value.dew_point}
                            uvi={value.uvi}
                        />
                    </Grid>
                ))}
            </Grid> */}
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Button
                    type="regularClear"
                    fill
                    transition
                    func={() => setShowElement(!showElement)}
                    funcResp={showElement}
                />
            </Spacing>
            {showElement && <WeatherHourly lat={lat} lon={lon} />}
        </>
    )
}
