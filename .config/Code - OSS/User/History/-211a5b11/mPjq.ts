import { useEffect, useState } from 'react'
import { getSessionItem } from '../get-session-item'
import { setSessionItem } from '../set-session-item'
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
        const getData = async (
            url: string,
            method: string,
            storageItem: string
        ) => {
            const [response, setResponse] = useState()

            fetch(url, { method: method }).then((response) => {
                response
                    .json()
                    .then((data) => {
                        Object.keys(data).filter((key) => {
                            setSessionItem(`response-${key}`, data[key])
                        })

                        setResponse(getSessionItem(storageItem))

                        // setDailyResult(
                        //     getSessionItem('weather-daily') as DailyProps[]
                        // )
                        // setHourlyResult(
                        //     getSessionItem('weather-hourly') as HourlyProps[]
                        // )

                        // setDailyResult(data.daily)
                        // setHourlyResult(data.hourly)
                    })
                    .catch((error: Error) => {
                        console.log(error)
                    })
            })
            console.log(response)
        }

        getData(url, method, 'response-daily')
    }, [latIn, lonIn])

    return { dailyResult, hourlyResult }
}
