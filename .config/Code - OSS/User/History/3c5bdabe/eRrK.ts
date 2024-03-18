import { sum } from '../formatters/sum'
import { toFeet } from '../formatters/toFeet'
import { toMiles } from '../formatters/toMiles'

const refactorEvent = ({ event, sportEvent, showSportEvent }: any) => {
    var refactoredEvent = {}

    const names: any[] = []
    const distances: any[] = []
    const elevs: any[] = []
    const times: any[] = []
    const islandSetAggregate: any[] = []
    const munroSetAggregate: any[] = []
    const munroTopSetAggregate: any[] = []
    const corbettSetAggregate: any[] = []
    const corbettTopSetAggregate: any[] = []
    const grahamSetAggregate: any[] = []
    const subTwoSetAggregate: any[] = []
    const donaldSetAggregate: any[] = []

    names.pop()
    distances.pop()
    elevs.pop()
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

    for (var i in event.names) {
        refKey = refKey + 1
        names.push({
            name: event.names[i],
            refKey: refKey,
        })
    }

    for (var j in sportEvent) {
        distances.push(sportEvent[j].dist)
        elevs.push(sportEvent[j].elev)
        times.push(sportEvent[j].time)
        sportEvent[j].islands.forEach((islandSet: string) => {
            islandSetAggregate.push(islandSet)
        })
        sportEvent[j].munros.forEach((munroSet: string) => {
            munroSetAggregate.push(munroSet)
        })
        sportEvent[j].munroTops.forEach((munroTopSet: string) => {
            munroTopSetAggregate.push(munroTopSet)
        })
        sportEvent[j].corbetts.forEach((corbettSet: string) => {
            corbettSetAggregate.push(corbettSet)
        })
        sportEvent[j].corbettTops.forEach((corbettTopSet: string) => {
            corbettTopSetAggregate.push(corbettTopSet)
        })
        sportEvent[j].grahams.forEach((grahamSet: string) => {
            grahamSetAggregate.push(grahamSet)
        })
        sportEvent[j].subTwos.forEach((subTwoSet: string) => {
            subTwoSetAggregate.push(subTwoSet)
        })
        sportEvent[j].donalds.forEach((donaldSet: string) => {
            donaldSetAggregate.push(donaldSet)
        })
        // for (var k in sportEvent[j].islands) {
        //     islandsS.push(sportEvent[j].islands[k])
        // }
        // for (var l in sportEvent[j].munros) {
        //     munrosS.push(sportEvent[j].munros[l])
        // }
        // for (var m in sportEvent[j].munroTops) {
        //     munroTopsS.push(sportEvent[j].munroTops[m])
        // }
        // for (var n in sportEvent[j].corbetts) {
        //     corbettsS.push(sportEvent[j].corbetts[n])
        // }
        // for (var o in sportEvent[j].corbettTops) {
        //     corbettTopsS.push(sportEvent[j].corbettTops[o])
        // }
        // for (var p in sportEvent[j].grahams) {
        //     grahamsS.push(sportEvent[j].grahams[p])
        // }
        // for (var q in sportEvent[j].subTwos) {
        //     subTwosS.push(sportEvent[j].subTwos[q])
        // }
        // for (var r in sportEvent[j].donalds) {
        //     donaldsS.push(sportEvent[j].donalds[r])
        // }
    }

    refactoredEvent = {
        prefix: event.prefix,
        names,
        startDate: event.startDate,
        endDate: event.endDate,
        description: event.description,
        images: event.images,
        youthHostels: event.youthHostels.join(', '),
        distance: toMiles(distances.reduce(sum)),
        elevation: toFeet(elevs.reduce(sum)),
        time: times.join(', '),
        islands: islandSetAggregate.join(', '),
        munros: munroSetAggregate.join(', '),
        munroTops: munroTopSetAggregate.join(', '),
        corbetts: corbettSetAggregate.join(', '),
        corbettTops: corbettTopSetAggregate.join(', '),
        grahams: grahamSetAggregate.join(', '),
        subTwos: subTwoSetAggregate.join(', '),
        donalds: donaldSetAggregate.join(', '),
        showSportEvent,
    }

    return refactoredEvent
}

export default refactorEvent
