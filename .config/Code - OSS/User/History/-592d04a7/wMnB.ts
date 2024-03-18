import { useEffect, useState } from 'react'
import { getResponse, getSessionItem } from '../../scripts'

export const useSport = () => {
    const [sport, setSport] = useState<[]>([])

    useEffect(() => {
        const setResults = () => {
            setSport(getSessionItem('response-sport') as [])
        }

        getResponse(
            'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/content/sport.data.json',
            'GET',
            setResults,
            true,
            'sport'
        )
    }, [])

    return { sport }
}
