import { sum } from '../formatters/sum'
import { toFeet } from '../formatters/toFeet'
import { toMiles } from '../formatters/toMiles'

const refactorEvent = ({ event, sportEvent, showSportEvent }: any) => {
    const names: any[] = []
    const distances: any[] = []
    const elevs: any[] = []
    const times: any[] = []
    const islandsS: any[] = []
    const munrosS: any[] = []
    const munroTopsS: any[] = []
    const corbettsS: any[] = []
    const corbettTopsS: any[] = []
    const grahamsS: any[] = []
    const subTwosS: any[] = []
    const donaldsS: any[] = []

    names.pop()
    distances.pop()
    elevs.pop()
    times.pop()
    islandsS.pop()
    munrosS.pop()
    munroTopsS.pop()
    corbettsS.pop()
    corbettTopsS.pop()
    grahamsS.pop()
    subTwosS.pop()
    donaldsS.pop()

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
        sportEvent[j].islands.forEach((island: string) => {
            islandsS.push(island)
        })
        for (var k in sportEvent[j].islands) {
            islandsS.push(sportEvent[j].islands[k])
        }
        for (var l in sportEvent[j].munros) {
            munrosS.push(sportEvent[j].munros[l])
        }
        for (var m in sportEvent[j].munroTops) {
            munroTopsS.push(sportEvent[j].munroTops[m])
        }
        for (var n in sportEvent[j].corbetts) {
            corbettsS.push(sportEvent[j].corbetts[n])
        }
        for (var o in sportEvent[j].corbettTops) {
            corbettTopsS.push(sportEvent[j].corbettTops[o])
        }
        for (var p in sportEvent[j].grahams) {
            grahamsS.push(sportEvent[j].grahams[p])
        }
        for (var q in sportEvent[j].subTwos) {
            subTwosS.push(sportEvent[j].subTwos[q])
        }
        for (var r in sportEvent[j].donalds) {
            donaldsS.push(sportEvent[j].donalds[r])
        }
    }

    const refactoredEvent = {
        prefix: event.prefix,
        names,
        startDate: event.startDate,
        endDate: event.endDate,
        description: event.description,
        images: event.images,
        youthHostels: event.youthHostels.join(', '),
        sportDist: toMiles(distances.reduce(sum)),
        sportElev: toFeet(elevs.reduce(sum)),
        sportTime: times.join(', '),
        sportIslands: islandsS.join(', '),
        sportMunros: munrosS.join(', '),
        sportMunroTops: munroTopsS.join(', '),
        sportCorbetts: corbettsS.join(', '),
        sportCorbettTops: corbettTopsS.join(', '),
        sportGrahams: grahamsS.join(', '),
        sportSubTwos: subTwosS.join(', '),
        sportDonalds: donaldsS.join(', '),
        showSportEvent,
    }

    return refactoredEvent
}

export default refactorEvent
