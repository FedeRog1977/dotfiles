import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import {
    compileEventEvents,
    compileEventSports,
    ProjectProps,
} from '../../../../../scripts'

export function useInstantGram() {
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const [url, setUrl] = useState('')

    const allEvents = compileEventEvents()
    const allSport = compileEventSports()

    const sportOnEvent: ProjectProps[] = []
    const emptySportOnEvent: ProjectProps[] = [
        {
            id: '',
            name: '',
            distance: 0,
            elevation: 0,
            time: '',
            companionship: 0,
            islands: [],
            munros: [],
            munroTops: [],
            corbetts: [],
            corbettTops: [],
            grahams: [],
            subTwos: [],
            donalds: [],
        },
    ]

    const [event, setEvent] = useState(allEvents[0])
    const [sportEvent, setSportEvent] = useState(emptySportOnEvent)
    const [showSportOnEvent, setShowSportEvent] = useState(false)

    useEffect(() => {
        setUrl(`${location.pathname}${location.search}`)
        if (location.search !== '') {
            for (var i in allEvents) {
                if (location.search === `?${allEvents[i].id?.toLowerCase()}=`) {
                    setEvent(allEvents[i])
                    setSportEvent(emptySportOnEvent)
                    setShowSportEvent(false)

                    for (var j in allSport) {
                        if (allEvents[i].names.includes(allSport[j].name)) {
                            sportOnEvent.push(allSport[j])
                            setSportEvent(sportOnEvent)
                            setShowSportEvent(true)
                        }
                    }
                }
            }
        }
    }, [])

    useEffect(() => {
        if (location.search === '') {
            for (var j in allSport) {
                if (allEvents[0].names.includes(allSport[j].name)) {
                    sportOnEvent.push(allSport[j])
                    setSportEvent(sportOnEvent)
                    setShowSportEvent(true)
                }
            }
        }
    }, [])

    const [searchField, setSearchField] = useState('')
    const [eventPlaceholder, setEventPlaceholder] = useState(event)
    const [sportEventPlaceholder, setSportEventPlaceholder] =
        useState(sportEvent)
    const [showSportEventPlaceholder, setShowSportEventPlaceholder] =
        useState(showSportOnEvent)

    const handleInput = (e: any) => {
        setSearchField(e.target.value.toLowerCase())

        for (var i in allEvents) {
            const fullName = allEvents[i].names.join(' - ').toLowerCase()

            if (searchField === '') {
                setEventPlaceholder(event)
                setSportEventPlaceholder(sportEvent)
                setShowSportEventPlaceholder(showSportOnEvent)
            } else if (fullName.includes(searchField)) {
                setEventPlaceholder(allEvents[i])
                setSportEventPlaceholder(emptySportOnEvent)
                setShowSportEventPlaceholder(false)

                for (var j in allSport) {
                    if (allEvents[i].names.includes(allSport[j].name)) {
                        sportOnEvent.push(allSport[j])
                        setSportEventPlaceholder(sportOnEvent)
                        setShowSportEventPlaceholder(true)
                    }
                }
            }
        }
    }

    const executeInput = () => {
        if (searchField === '') {
            setEvent(event)
            setSportEvent(sportEvent)
            setShowSportEvent(showSportOnEvent)
        } else {
            setEvent(eventPlaceholder)
            setSportEvent(sportEventPlaceholder)
            setShowSportEvent(showSportEventPlaceholder)
        }
    }

    const handleSelect = (e: any) => {
        for (var i in allEvents) {
            const fullName = allEvents[i].names.join(' - ')

            if (fullName.includes(e.currentTarget.value)) {
                setEvent(allEvents[i])
                setSportEvent(emptySportOnEvent)
                setShowSportEvent(false)

                for (var j in allSport) {
                    if (allEvents[i].names.includes(allSport[j].name)) {
                        sportOnEvent.push(allSport[j])
                        setSportEvent(sportOnEvent)
                        setShowSportEvent(true)
                        setSearchParams(allEvents[i].id?.toLowerCase())
                    }
                }
            }
        }
    }
    console.log(url)
    // const url = `${location.pathname}${location.search}`

    return {
        url,
        handleInput,
        executeInput,
        handleSelect,
        event,
        sportEvent,
        showSportOnEvent,
    }
}
