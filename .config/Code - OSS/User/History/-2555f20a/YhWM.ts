import { sum, toFeet, toMiles } from '../formatters'
import {
    CompiledEventProps,
    RefactoredEventNameProps,
    ProjectProps,
    RefactoredEventProps,
} from './types'

export const compileEvent = ({ ...props }: CompiledEventProps) => {
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

    props.event.names.forEach((name: string) => {
        refKey = refKey + 1
        names.push({
            name: name,
            refKey: refKey,
        })
    })

    props.sportEvent.forEach((sportEvent: ProjectProps) => {
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
        prefix: props.event.prefix,
        names,
        startDate: props.event.startDate,
        endDate: props.event.endDate,
        features: {
            cities: props.event.features?.cities?.sort().join(', '),
            districts: props.event.features?.districts?.sort().join(', '),
            attractions: props.event.features?.attractions?.sort().join(', '),
            youthHostels: props.event.features?.youthHostels?.sort().join(', '),
            supermarkets: props.event.features?.supermarkets?.sort().join(', '),
            shops: props.event.features?.shops?.sort().join(', '),
            foodstuffs: props.event.features?.foodstuffs?.sort().join(', '),
            bakeries: props.event.features?.bakeries?.sort().join(', '),
            gelaterias: props.event.features?.gelaterias?.sort().join(', '),
            restaurants: props.event.features?.restaurants?.sort().join(', '),
            bars: props.event.features?.bars?.sort().join(', '),
            filmingLocations: props.event.features?.filmingLocations
                ?.sort()
                .join(', '),
        },
        description: props.event.description,
        images: props.event.images,
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
        showSportEvent: props.showSportEvent,
    }

    console.log('Refactored Event:\n\n', refactoredEvent)
    return refactoredEvent
}
