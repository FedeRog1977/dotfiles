import { useEffect, useState } from 'react'
import { getResponse } from '../get-response'
import { getSessionItem } from '../get-session-item'
import { DailyProps, HourlyProps } from '../types'

export function useOpenWeatherCall(latIn: number, lonIn: number) {
    const [dailyResult, setDailyResult] = useState<DailyProps[]>([])
    const [hourlyResult, setHourlyResult] = useState<HourlyProps[]>([])

    const base = 'https://api.openweathermap.org/data/3.0/onecall?'
    const lat = `${latIn}`
    const lon = `${lonIn}`
    const appid = '6008c47adda4d19b4055c7058a622879'
    const units = 'metric'
    const lang = 'en'

    const url = `${base}lat=${lat}&lon=${lon}&appid=${appid}&units=${units}&lang=${lang}`
    const method = 'GET'

    useEffect(() => {
        getResponse(url, method)
        setDailyResult(getSessionItem('response-daily') as DailyProps[])
        setHourlyResult(getSessionItem('response-hourly') as HourlyProps[])
    }, [latIn, lonIn])

    return { dailyResult, hourlyResult }
}
