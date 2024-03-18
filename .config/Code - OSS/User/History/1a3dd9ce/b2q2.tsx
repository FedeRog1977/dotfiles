import {
    toDate,
    toPrecipitation,
    toBearing,
    toSpeed,
    toSentenceCase,
} from '../../../../../scripts'
import { Flex, Grid, Spacing, Typography } from '../../../../bash-blocks'
import { WeatherIcon } from './weather-icon.component'
import { WeatherTemperature } from './weather-temperature.component'

export const WeatherColumnDailyDense = ({
    dt,
    icon,
    temp,
    pop,
    windDeg,
    windSpd,
    sr,
    ss,
}: any) => {
    const { weekdayPartial, dayOfMonthPartial } = toDate(dt)
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
            <Spacing pY={20} textAlign="center">
                <Typography type="h4" content={weekdayPartial} />
                <Typography
                    type="body"
                    content={dayOfMonthPartial}
                    paragraphMargins
                />
                <Typography type="h1" content={<WeatherIcon icon={icon} />} />
                <Spacing pY={20} textAlign="center">
                    <WeatherTemperature temp={temp} />
                </Spacing>
                <Typography type="body" content={precipitation} />
            </Spacing>
            <Spacing pY={20} textAlign="center">
                <Typography type="body" content={bearingCompass} />
                <Typography type="body" content={bearingArrow} />
                <Typography type="footnote" content={bearing} />
                <Typography type="footnote" content={speed} boldFace />
            </Spacing>
        </>
    )
}
