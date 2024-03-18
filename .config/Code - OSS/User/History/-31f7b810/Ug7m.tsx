import { useState } from 'react'
import InstantGramSearchTile from './InstantGramSearchTile'
import InstantGramResultTile from './InstantGramResultTile'
import compileEvents from '../../../scripts/compilers/compileEvents'
import compileEventSports from '../../../scripts/compilers/compileEventSports'

const InstantGramSearch = () => {
    const allEvents = compileEvents()
    const allSport = compileEventSports()
    const eventSport: any[] = []

    // const [searchField, setSearchField] = useState('')

    const initialEventHaveSport = allEvents[0].names.includes(allSport[0].name)
    eventSport.push(allSport[0])

    const [event, setEvent] = useState(allEvents[0])
    const [sportEvent, setSportEvent] = useState(eventSport)
    const [showSportEvent, setShowSportEvent] = useState(initialEventHaveSport)

    // const [eventPlaceholder, setEventPlaceholder] = useState(event)
    // const [sportEventPlaceholder, setSportEventPlaceholder] =
    //     useState(sportEvent)
    // const [showSportEventPlaceholder, setShowSportEventPlaceholder] =
    //     useState(showSportEvent)

    // const handleInput = (e: any) => {
    //     setSearchField(e.target.value.toLowerCase())

    //     for (var i in allEvents) {
    //         const fullName = allEvents[i].names.join(' / ').toLowerCase() // Not inc. prefix - trouble

    //         if (searchField === '') {
    //             setEventPlaceholder(event)
    //             setSportEventPlaceholder(sportEvent)
    //             setShowSportEventPlaceholder(showSportEvent)
    //         } else if (fullName.includes(searchField)) {
    //             eventSport.pop()
    //             setEventPlaceholder(allEvents[i]) // Set event data (placeholder)
    //             setShowSportEventPlaceholder(false) // Set show sport data (sport !exist) (placeholder)

    //             for (var j in allSport) {
    //                 if (allEvents[i].names.includes(allSport[j].name)) {
    //                     eventSport.push(allSport[j])
    //                     setSportEventPlaceholder(eventSport) // Set sport data (placeholder)
    //                     setShowSportEventPlaceholder(true) // Set show sport data (sport exists)
    //                 }
    //             }
    //         }
    //     }
    // }

    // const executeInput = () => {
    //     if (searchField === '') {
    //         setEvent(event)
    //         setSportEvent(sportEvent)
    //         setShowSportEvent(showSportEvent)
    //     } else {
    //         setEvent(eventPlaceholder) // Set event data
    //         setSportEvent(sportEventPlaceholder) // Set sport data
    //         setShowSportEvent(showSportEventPlaceholder) // Set show sport data (sport !exist/exists)
    //     }
    // }

    const handleSelect = (e: any) => {
        console.log('Button Target Value:', e.currentTarget.value)

        for (var i in allEvents) {
            const fullName = allEvents[i].names.join(' - ')
            console.log('Event JSON Value:', allEvents[i].names.join(' - '))

            if (fullName.includes(e.currentTarget.value)) {
                setEvent(allEvents[i])
                setSportEvent(sportEvent)
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
                // funcInput={handleInput}
                // funcButton={executeInput}
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
