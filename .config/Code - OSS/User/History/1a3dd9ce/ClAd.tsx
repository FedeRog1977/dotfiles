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
    desc,
    tempMax,
    tempMin,
    // tempFlDay,
    // tempFlNight,
    windDeg,
    windSpd,
    pressure,
    humidity,
    dp,
    uvi,
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
                <Typography
                    type="footnote"
                    content={toSentenceCase(desc)}
                    paragraphMargins
                />
            </Spacing>
            <Spacing pY={20} textAlign="center">
                <Typography type="footnote" content="Sunrise:" boldFace />
                <Typography type="footnote" content={sunrise} />
                <Typography type="footnote" content="Sunset:" boldFace />
                <Typography type="footnote" content={sunset} />
            </Spacing>
            <Spacing pY={20} textAlign="center">
                <Typography type="body" content={bearingCompass} />
                <Typography type="body" content={bearingArrow} />
                <Typography type="footnote" content={bearing} />
                <Typography type="footnote" content={speed} boldFace />
            </Spacing>
            {/* <Spacing pY={20} textAlign="center">
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
            </Spacing> */}
        </>
    )
}
