import { useEffect, useState } from 'react'
import { getSessionItem } from '../../scripts'

export const useEvents = () => {
    const [events, setEvents] = useState<[]>([])

    useEffect(() => {
        const setResults = () => {
            setEvents(getSessionItem('response-daily') as [])
        }

        getResponse(
            'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/content/events.data.json',
            'GET',
            setResults
        )
    }, [])

    return { events }
}
