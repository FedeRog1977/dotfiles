import { useEffect, useState } from 'react'
import { getResponse } from '../get-response'
import { getSessionItem } from '../get-session-item'
import { DailyProps, HourlyProps } from '../types'

export function useOpenWeatherCall(latIn: number, lonIn: number) {
    const [dailyResult, setDailyResult] = useState<DailyProps[]>([])
    const [hourlyResult, setHourlyResult] = useState<HourlyProps[]>([])

    const base = 'https://api.openweathermap.org/data/3.0/onecall?'
    const appid = '6008c47adda4d19b4055c7058a622879'
    const units = 'metric'
    const lang = 'en'

    useEffect(() => {
        const doResponse = async () => {
            await getResponse(
                `${base}lat=${latIn}&lon=${lonIn}&appid=${appid}&units=${units}&lang=${lang}`,
                'GET'
            )

            setDailyResult(getSessionItem('response-daily') as DailyProps[])
            setHourlyResult(getSessionItem('response-hourly') as HourlyProps[])
        }

        doResponse()
    }, [latIn, lonIn])

    return { dailyResult, hourlyResult }
}
