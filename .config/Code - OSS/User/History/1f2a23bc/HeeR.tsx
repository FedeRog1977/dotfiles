import {
    faCloudRain,
    faMoon,
    faSun,
    faTemperatureHigh,
    faTemperatureLow,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    toDate,
    toTemperature,
    toPrecipitation,
    toBearing,
    toSpeed,
    toSentenceCase,
} from '../../../../../scripts'
import { Flex, Grid, Spacing, Typography } from '../../../../bash-blocks'
import { WeatherIcon, WeatherTemperature } from '.'

export const WeatherColumnDaily = ({
    dt,
    icon,
    temp,
    pop,
    desc,
    tempMax,
    tempMin,
    tempFlDay,
    tempFlNight,
    windDeg,
    windSpd,
    pressure,
    humidity,
    dp,
    uvi,
    sr,
    ss,
}: any) => {
    const { weekday, dayOfMonth } = toDate(dt)
    const temperature = toTemperature(temp)
    const precipitation = toPrecipitation(pop)
    const { time: sunrise } = toDate(sr)
    const { time: sunset } = toDate(ss)
    const {
        bearingFormatted: bearing,
        bearingCompass,
        bearingArrow,
    } = toBearing(windDeg)
    const speed = toSpeed(windSpd, true)

    return (
        <>
            <Spacing pX={20} pY={20} textAlign="center">
                <Typography type="h4" content={weekday} />
                <Typography type="body" content={dayOfMonth} paragraphMargins />
                <Typography
                    type="h2"
                    content={
                        <>
                            {temperature}&nbsp;
                            <WeatherIcon icon={icon} />
                        </>
                    }
                    paragraphMargins
                />
                <Typography
                    type="footnote"
                    content={
                        <>
                            <FontAwesomeIcon icon={faCloudRain} />
                            &nbsp;{precipitation}
                            &nbsp;{toSentenceCase(desc)}
                        </>
                    }
                />
                <Grid alignColumns="auto">
                    <Grid columnItem={[1, 2]}>
                        <Typography
                            type="footnote"
                            content="Sunrise:"
                            boldFace
                        />
                        <Typography type="footnote" content={sunrise} />
                    </Grid>
                    <Grid columnItem={[2, 2]}>
                        <Typography
                            type="footnote"
                            content="Sunset:"
                            boldFace
                        />
                        <Typography type="footnote" content={sunset} />
                    </Grid>
                </Grid>
            </Spacing>
            <Spacing pY={20}>
                <Grid alignColumns="auto">
                    <Grid columnItem={[1, 4]}>
                        <WeatherTemperature
                            icon={faTemperatureHigh}
                            temp={tempMax}
                        />
                    </Grid>
                    <Grid columnItem={[2, 4]}>
                        <WeatherTemperature
                            icon={faTemperatureLow}
                            temp={tempMin}
                        />
                    </Grid>
                    <Grid columnItem={[3, 4]}>
                        <WeatherTemperature icon={faSun} temp={tempFlDay} />
                    </Grid>
                    <Grid columnItem={[4, 4]}>
                        <WeatherTemperature icon={faMoon} temp={tempFlNight} />
                    </Grid>
                </Grid>
            </Spacing>
            <Spacing pX={20} pY={20} textAlign="center">
                <Typography type="body" content={bearingCompass} />
                <Typography type="body" content={bearingArrow} />
                <Typography type="footnote" content={bearing} />
                <Typography type="footnote" content={speed} boldFace />
            </Spacing>
            <Spacing pX={20} pY={20} textAlign="center">
                <Flex>
                    <Flex item>
                        <Spacing textAlign="center" mR={2.5}>
                            <Typography
                                type="footnote"
                                content="Pressure:"
                                textAlign="right"
                                boldFace
                            />
                            <Typography
                                type="footnote"
                                content="Humidity:"
                                textAlign="right"
                                boldFace
                            />
                            <Typography
                                type="footnote"
                                content="Dew Pt.:"
                                textAlign="right"
                                boldFace
                            />
                            <Typography
                                type="footnote"
                                content="UV Index:"
                                textAlign="right"
                                boldFace
                            />
                        </Spacing>
                    </Flex>
                    <Flex item>
                        <Spacing textAlign="center" mL={2.5}>
                            <Typography
                                type="footnote"
                                content={pressure + 'mb'}
                                textAlign="left"
                            />
                            <Typography
                                type="footnote"
                                content={humidity + '%'}
                                textAlign="left"
                            />
                            <Typography
                                type="footnote"
                                content={dp}
                                textAlign="left"
                            />
                            <Typography
                                type="footnote"
                                content={uvi}
                                textAlign="left"
                            />
                        </Spacing>
                    </Flex>
                </Flex>
            </Spacing>
        </>
    )
}
