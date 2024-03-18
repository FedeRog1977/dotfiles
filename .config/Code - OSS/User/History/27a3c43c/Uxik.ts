import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import {
    compileEventEvents,
    compileEventSports,
    ProjectProps,
} from '../../../../../scripts'

export function useInstantGram() {
    const [url, setUrl] = useState('')
    const location = useLocation()
    const [searchParamsHandler, setSearchParamsHandler] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    const allEvents = compileEventEvents()
    const allSport = compileEventSports()
    const sportOnEvent: ProjectProps[] = []

    const [searchField, setSearchField] = useState('')

    const [event, setEvent] = useState(allEvents[0])
    const [sport, setSportEvent] = useState([] as ProjectProps[])
    const [showSport, setShowSportEvent] = useState(false)

    const [eventHandler, setEventHandler] = useState(event)
    const [sportHandler, setSportHandler] = useState(sport)
    const [showSportHandler, setShowSportHandler] = useState(showSport)

    useEffect(() => {
        if (location.search !== '') {
            setUrl(`${location.pathname}${location.search}`)

            for (var i in allEvents) {
                if (location.search === `?${allEvents[i].id?.toLowerCase()}=`) {
                    setEvent(allEvents[i])
                    setSportEvent([] as ProjectProps[])
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
    }, [searchParams])

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

    const handleInput = (e: any) => {
        setSearchField(e.target.value.toLowerCase())

        for (var i in allEvents) {
            if (searchField === '') {
                setEventHandler(event)
                setSportHandler(sportEvent)
                setShowSportHandler(showSportOnEvent)
            } else if (
                allEvents[i].names
                    .join(' - ')
                    .toLowerCase()
                    .includes(searchField)
            ) {
                setSearchParamsHandler(allEvents[i].id?.toLowerCase() ?? '')

                setEventHandler(allEvents[i])
                setSportHandler([] as ProjectProps[])
                setShowSportHandler(false)

                for (var j in allSport) {
                    if (allEvents[i].names.includes(allSport[j].name)) {
                        sportOnEvent.push(allSport[j])
                        setSportHandler(sportOnEvent)
                        setShowSportHandler(true)
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
            setSearchParams(searchParamsHandler)
            setEvent(eventHandler)
            setSportEvent(sportHandler)
            setShowSportEvent(showSportHandler)
        }
    }

    const handleSelect = (e: any) => {
        for (var i in allEvents) {
            if (
                allEvents[i].names.join(' - ').includes(e.currentTarget.value)
            ) {
                setEvent(allEvents[i])
                setSportEvent([] as ProjectProps[])
                setShowSportEvent(false)

                setSearchParams(allEvents[i].id?.toLowerCase())

                for (var j in allSport) {
                    if (allEvents[i].names.includes(allSport[j].name)) {
                        sportOnEvent.push(allSport[j])
                        setSportEvent(sportOnEvent)
                        setShowSportEvent(true)
                    }
                }
            }
        }

        setUrl(`${location.pathname}${location.search}`)
        console.log(url)
    }

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
