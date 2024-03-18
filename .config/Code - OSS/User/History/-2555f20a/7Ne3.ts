import { sum, toFeet, toMiles } from '../formatters'
import {
    CompiledEventProps,
    RefactoredEventNameProps,
    ProjectProps,
    RefactoredEventProps,
} from './types'

export const compileEvent = ({
    event,
    sportEvent = [
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
    ],
    showSportEvent,
}: CompiledEventProps) => {
    const names: RefactoredEventNameProps[] = []
    const distances: number[] = []
    const elevations: number[] = []
    const times: string[] = []
    const islandSetAggregate: string[] = []
    const munroSetAggregate: string[] = []
    const munroTopSetAggregate: string[] = []
    const corbettSetAggregate: string[] = []
    const corbettTopSetAggregate: string[] = []
    const grahamSetAggregate: string[] = []
    const subTwoSetAggregate: string[] = []
    const donaldSetAggregate: string[] = []

    names.pop()
    distances.pop()
    elevations.pop()
    times.pop()
    islandSetAggregate.pop()
    munroSetAggregate.pop()
    munroTopSetAggregate.pop()
    corbettSetAggregate.pop()
    corbettTopSetAggregate.pop()
    grahamSetAggregate.pop()
    subTwoSetAggregate.pop()
    donaldSetAggregate.pop()

    var refKey = 0

    event.names.forEach((name: string) => {
        refKey = refKey + 1
        names.push({
            name: name,
            refKey: refKey,
        })
    })

    sportEvent.forEach((sportEvent: ProjectProps) => {
        distances.push(sportEvent.distance)
        elevations.push(sportEvent.elevation)
        times.push(sportEvent.time)
        sportEvent.islands?.forEach((islandSet: string) => {
            islandSetAggregate.push(islandSet)
        })
        sportEvent.munros?.forEach((munroSet: string) => {
            munroSetAggregate.push(munroSet)
        })
        sportEvent.munroTops?.forEach((munroTopSet: string) => {
            munroTopSetAggregate.push(munroTopSet)
        })
        sportEvent.corbetts?.forEach((corbettSet: string) => {
            corbettSetAggregate.push(corbettSet)
        })
        sportEvent.corbettTops?.forEach((corbettTopSet: string) => {
            corbettTopSetAggregate.push(corbettTopSet)
        })
        sportEvent.grahams?.forEach((grahamSet: string) => {
            grahamSetAggregate.push(grahamSet)
        })
        sportEvent.subTwos?.forEach((subTwoSet: string) => {
            subTwoSetAggregate.push(subTwoSet)
        })
        sportEvent.donalds?.forEach((donaldSet: string) => {
            donaldSetAggregate.push(donaldSet)
        })
    })

    const refactoredEvent: RefactoredEventProps = {
        prefix: event.prefix,
        names,
        startDate: event.startDate,
        endDate: event.endDate,
        features: {
            cities: event.features?.cities?.sort().join(', '),
            districts: event.features?.districts?.sort().join(', '),
            attractions: event.features?.attractions?.sort().join(', '),
            youthHostels: event.features?.youthHostels?.sort().join(', '),
            supermarkets: event.features?.supermarkets?.sort().join(', '),
            shops: event.features?.shops?.sort().join(', '),
            foodstuffs: event.features?.foodstuffs?.sort().join(', '),
            bakeries: event.features?.bakeries?.sort().join(', '),
            gelaterias: event.features?.gelaterias?.sort().join(', '),
            restaurants: event.features?.restaurants?.sort().join(', '),
            bars: event.features?.bars?.sort().join(', '),
            filmingLocations: event.features?.filmingLocations
                ?.sort()
                .join(', '),
        },
        description: event.description,
        images: event.images,
        distance: toMiles(distances.reduce(sum)),
        elevation: toFeet(elevations.reduce(sum)),
        time: times.join(', '),
        islands: islandSetAggregate.join(', '),
        munros: munroSetAggregate.join(', '),
        munroTops: munroTopSetAggregate.join(', '),
        corbetts: corbettSetAggregate.join(', '),
        corbettTops: corbettTopSetAggregate.join(', '),
        grahams: grahamSetAggregate.join(', '),
        subTwos: subTwoSetAggregate.join(', '),
        donalds: donaldSetAggregate.join(', '),
        showSportEvent: showSportEvent,
    }

    // console.log('Refactored Event:\n\n', refactoredEvent)
    return refactoredEvent
}
