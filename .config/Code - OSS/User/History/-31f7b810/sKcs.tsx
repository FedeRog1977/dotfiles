import { useState } from 'react'
import InstantGramSearchTile from './InstantGramSearchTile'
import InstantGramResultTile from './InstantGramResultTile'
import compileEvents from '../../../scripts/compilers/compileEvents'
import compileEventSports from '../../../scripts/compilers/compileEventSports'

const InstantGramSearch = () => {
    const allEvents = compileEvents()
    const allSport = compileEventSports()

    const eventSport: any[] = []
    const eventSportInitial = [allSport[0]]
    const eventSportEmpty = [
        {
            id: '',
            name: '',
            dist: 0,
            elev: 0,
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

    const initialSport = Boolean(allEvents[0].names.includes(allSport[0].name))

    const [event, setEvent] = useState(allEvents[0])
    const [sportEvent, setSportEvent] = useState(
        initialSport ? eventSportInitial : eventSportEmpty
    )
    const [showSportEvent, setShowSportEvent] = useState(initialSport)

    const [searchField, setSearchField] = useState('')
    const [eventPlaceholder, setEventPlaceholder] = useState(event)
    const [sportEventPlaceholder, setSportEventPlaceholder] =
        useState(sportEvent)
    const [showSportEventPlaceholder, setShowSportEventPlaceholder] =
        useState(showSportEvent)

    const handleInput = (e: any) => {
        setSearchField(e.target.value.toLowerCase())
        console.log('Input Target Value:', searchField)

        for (var i in allEvents) {
            const fullName = allEvents[i].names.join(' - ').toLowerCase()

            if (searchField === '') {
                setEventPlaceholder(event)
                setSportEventPlaceholder(sportEvent)
                setShowSportEventPlaceholder(showSportEvent)
            } else if (fullName.includes(searchField)) {
                console.log('Event JSON Value:', fullName)
                setEventPlaceholder(allEvents[i])
                setSportEventPlaceholder(sportEvent)
                setShowSportEventPlaceholder(false)

                for (var j in allSport) {
                    if (allEvents[i].names.includes(allSport[j].name)) {
                        eventSport.push(allSport[j])
                        setSportEventPlaceholder(eventSport)
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
            setShowSportEvent(showSportEvent)
        } else {
            setEvent(eventPlaceholder)
            setSportEvent(sportEventPlaceholder)
            setShowSportEvent(showSportEventPlaceholder)
        }
    }

    const handleSelect = (e: any) => {
        console.log('Button Target Value:', e.currentTarget.value)

        for (var i in allEvents) {
            const fullName = allEvents[i].names.join(' - ')

            if (fullName.includes(e.currentTarget.value)) {
                console.log('Event JSON Value:', fullName)

                setEvent(allEvents[i])
                setSportEvent(eventSportEmpty)
                setShowSportEvent(false)

                for (var j in allSport) {
                    if (allEvents[i].names.includes(allSport[j].name)) {
                        eventSport.push(allSport[j])
                        setSportEvent(eventSport)
                        setShowSportEvent(true)
                    }
                }
            }
        }
    }

    return (
        <>
            <InstantGramSearchTile
                funcInput={handleInput}
                funcButton={executeInput}
                funcSelect={handleSelect}
            />
            <InstantGramResultTile
                event={event}
                sportEvent={sportEvent}
                showSportEvent={showSportEvent}
            />
        </>
    )
}

export default InstantGramSearch
