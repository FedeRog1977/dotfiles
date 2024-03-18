import { sportData } from '../../data'
import { removeDuplicates, toFeet, toMiles } from '..'

export const compileProjects = () => {
    const projects = {
        2023: sportData[2023].projects,
        2022: sportData[2022].projects,
        2021: sportData[2021].projects,
        2020: sportData[2020].projects,
    }

    const number = {
        total:
            sportData[2023].projects.length +
            sportData[2022].projects.length +
            sportData[2021].projects.length +
            sportData[2020].projects.length,
        2023: sportData[2023].projects.length,
        2022: sportData[2022].projects.length,
        2021: sportData[2021].projects.length,
        2020: sportData[2020].projects.length,
    }

    const islands: any[] = []
    const munros: any[] = []
    const munroTops: any[] = []
    const corbetts: any[] = []
    const corbettTops: any[] = []
    const grahams: any[] = []
    const subTwos: any[] = []
    const donalds: any[] = []

    var distance2023: number = 0
    var elevation2023: number = 0

    const islands2023: any[] = []
    const munros2023: any[] = []
    const munroTops2023: any[] = []
    const corbetts2023: any[] = []
    const corbettTops2023: any[] = []
    const grahams2023: any[] = []
    const subTwos2023: any[] = []
    const donalds2023: any[] = []

    sportData[2023].projects.forEach((event: any) => {
        distance2023 = distance2023 + event.dist
        elevation2023 = elevation2023 + event.elev

        event.islands.forEach((island: any) => {
            islands2023.push(island)
        })
        event.munros.forEach((munro: any) => {
            munros2023.push(munro)
        })
        event.munroTops.forEach((munroTop: any) => {
            munroTops2023.push(munroTop)
        })
        event.corbetts.forEach((corbett: any) => {
            corbetts2023.push(corbett)
        })
        event.corbettTops.forEach((corbettTop: any) => {
            corbettTops2023.push(corbettTop)
        })
        event.grahams.forEach((graham: any) => {
            grahams2023.push(graham)
        })
        event.subTwos.forEach((subTwo: any) => {
            subTwos2023.push(subTwo)
        })
        event.donalds.forEach((donald: any) => {
            donalds2023.push(donald)
        })
    })

    islands2023.forEach((island: any) => {
        islands.push(island)
    })
    munros2023.forEach((munro: any) => {
        munros.push(munro)
    })
    munroTops2023.forEach((munroTop: any) => {
        munroTops.push(munroTop)
    })
    corbetts2023.forEach((corbett: any) => {
        corbetts.push(corbett)
    })
    corbettTops2023.forEach((corbettTop: any) => {
        corbettTops.push(corbettTop)
    })
    grahams2023.forEach((graham: any) => {
        grahams.push(graham)
    })
    subTwos2023.forEach((subTwo: any) => {
        subTwos.push(subTwo)
    })
    donalds2023.forEach((donald: any) => {
        donalds.push(donald)
    })

    var distance2022: number = 0
    var elevation2022: number = 0

    const islands2022: any[] = []
    const munros2022: any[] = []
    const munroTops2022: any[] = []
    const corbetts2022: any[] = []
    const corbettTops2022: any[] = []
    const grahams2022: any[] = []
    const subTwos2022: any[] = []
    const donalds2022: any[] = []

    sportData[2022].projects.forEach((event: any) => {
        distance2022 = distance2022 + event.dist
        elevation2022 = elevation2022 + event.elev

        event.islands.forEach((island: any) => {
            islands2022.push(island)
        })
        event.munros.forEach((munro: any) => {
            munros2022.push(munro)
        })
        event.munroTops.forEach((munroTop: any) => {
            munroTops2022.push(munroTop)
        })
        event.corbetts.forEach((corbett: any) => {
            corbetts2022.push(corbett)
        })
        event.corbettTops.forEach((corbettTop: any) => {
            corbettTops2022.push(corbettTop)
        })
        event.grahams.forEach((graham: any) => {
            grahams2022.push(graham)
        })
        event.subTwos.forEach((subTwo: any) => {
            subTwos2022.push(subTwo)
        })
        event.donalds.forEach((donald: any) => {
            donalds2022.push(donald)
        })
    })

    islands2022.forEach((island: any) => {
        islands.push(island)
    })
    munros2022.forEach((munro: any) => {
        munros.push(munro)
    })
    munroTops2022.forEach((munroTop: any) => {
        munroTops.push(munroTop)
    })
    corbetts2022.forEach((corbett: any) => {
        corbetts.push(corbett)
    })
    corbettTops2022.forEach((corbettTop: any) => {
        corbettTops.push(corbettTop)
    })
    grahams2022.forEach((graham: any) => {
        grahams.push(graham)
    })
    subTwos2022.forEach((subTwo: any) => {
        subTwos.push(subTwo)
    })
    donalds2022.forEach((donald: any) => {
        donalds.push(donald)
    })

    var distance2021: number = 0
    var elevation2021: number = 0

    const islands2021: any[] = []
    const munros2021: any[] = []
    const munroTops2021: any[] = []
    const corbetts2021: any[] = []
    const corbettTops2021: any[] = []
    const grahams2021: any[] = []
    const subTwos2021: any[] = []
    const donalds2021: any[] = []

    sportData[2021].projects.forEach((event: any) => {
        distance2021 = distance2021 + event.dist
        elevation2021 = elevation2021 + event.elev

        event.islands.forEach((island: any) => {
            islands2021.push(island)
        })
        event.munros.forEach((munro: any) => {
            munros2021.push(munro)
        })
        event.munroTops.forEach((munroTop: any) => {
            munroTops2021.push(munroTop)
        })
        event.corbetts.forEach((corbett: any) => {
            corbetts2021.push(corbett)
        })
        event.corbettTops.forEach((corbettTop: any) => {
            corbettTops2021.push(corbettTop)
        })
        event.grahams.forEach((graham: any) => {
            grahams2021.push(graham)
        })
        event.subTwos.forEach((subTwo: any) => {
            subTwos2021.push(subTwo)
        })
        event.donalds.forEach((donald: any) => {
            donalds2021.push(donald)
        })
    })

    islands2021.forEach((island: any) => {
        islands.push(island)
    })
    munros2021.forEach((munro: any) => {
        munros.push(munro)
    })
    munroTops2021.forEach((munroTop: any) => {
        munroTops.push(munroTop)
    })
    corbetts2021.forEach((corbett: any) => {
        corbetts.push(corbett)
    })
    corbettTops2021.forEach((corbettTop: any) => {
        corbettTops.push(corbettTop)
    })
    grahams2021.forEach((graham: any) => {
        grahams.push(graham)
    })
    subTwos2021.forEach((subTwo: any) => {
        subTwos.push(subTwo)
    })
    donalds2021.forEach((donald: any) => {
        donalds.push(donald)
    })

    var distance2020: number = 0
    var elevation2020: number = 0

    const islands2020: any[] = []
    const munros2020: any[] = []
    const munroTops2020: any[] = []
    const corbetts2020: any[] = []
    const corbettTops2020: any[] = []
    const grahams2020: any[] = []
    const subTwos2020: any[] = []
    const donalds2020: any[] = []

    sportData[2020].projects.forEach((event: any) => {
        distance2020 = distance2020 + event.dist
        elevation2020 = elevation2020 + event.elev

        event.islands.forEach((island: any) => {
            islands2020.push(island)
        })
        event.munros.forEach((munro: any) => {
            munros2020.push(munro)
        })
        event.munroTops.forEach((munroTop: any) => {
            munroTops2020.push(munroTop)
        })
        event.corbetts.forEach((corbett: any) => {
            corbetts2020.push(corbett)
        })
        event.corbettTops.forEach((corbettTop: any) => {
            corbettTops2020.push(corbettTop)
        })
        event.grahams.forEach((graham: any) => {
            grahams2020.push(graham)
        })
        event.subTwos.forEach((subTwo: any) => {
            subTwos2020.push(subTwo)
        })
        event.donalds.forEach((donald: any) => {
            donalds2020.push(donald)
        })
    })

    islands2020.forEach((island: any) => {
        islands.push(island)
    })
    munros2020.forEach((munro: any) => {
        munros.push(munro)
    })
    munroTops2020.forEach((munroTop: any) => {
        munroTops.push(munroTop)
    })
    corbetts2020.forEach((corbett: any) => {
        corbetts.push(corbett)
    })
    corbettTops2020.forEach((corbettTop: any) => {
        corbettTops.push(corbettTop)
    })
    grahams2020.forEach((graham: any) => {
        grahams.push(graham)
    })
    subTwos2020.forEach((subTwo: any) => {
        subTwos.push(subTwo)
    })
    donalds2020.forEach((donald: any) => {
        donalds.push(donald)
    })

    const islandData: any[] = []
    islandData.push({
        islands: islands.sort(),
        islandsUnq: removeDuplicates(islands).sort(),
        islandsN: islands.length,
        islandsUnqN: removeDuplicates(islands).length,
        islands2023: islands2023.sort(),
        islands2022: islands2022.sort(),
        islands2021: islands2021.sort(),
        islands2020: islands2020.sort(),
        islands2023N: islands2023.length,
        islands2022N: islands2022.length,
        islands2021N: islands2021.length,
        islands2020N: islands2020.length,
    })

    const munroData: any[] = []
    munroData.push({
        munros: munros.sort(),
        munrosUnq: removeDuplicates(munros).sort(),
        munrosN: munros.length,
        munrosUnqN: removeDuplicates(munros).length,
        munros2023: munros2023.sort(),
        munros2022: munros2022.sort(),
        munros2021: munros2021.sort(),
        munros2020: munros2020.sort(),
        munros2023N: munros2023.length,
        munros2022N: munros2022.length,
        munros2021N: munros2021.length,
        munros2020N: munros2020.length,
    })

    const munroTopData: any[] = []
    munroTopData.push({
        munroTops: munroTops.sort(),
        munroTopsUnq: removeDuplicates(munroTops).sort(),
        munroTopsN: munroTops.length,
        munroTopsUnqN: removeDuplicates(munroTops).length,
        munroTops2023: munroTops2023.sort(),
        munroTops2022: munroTops2022.sort(),
        munroTops2021: munroTops2021.sort(),
        munroTops2020: munroTops2020.sort(),
        munroTops2023N: munroTops2023.length,
        munroTops2022N: munroTops2022.length,
        munroTops2021N: munroTops2021.length,
        munroTops2020N: munroTops2020.length,
    })

    const corbettData: any[] = []
    corbettData.push({
        corbetts: corbetts.sort(),
        corbettsUnq: removeDuplicates(corbetts).sort(),
        corbettsN: corbetts.length,
        corbettsUnqN: removeDuplicates(corbetts).length,
        corbetts2023: corbetts2023.sort(),
        corbetts2022: corbetts2022.sort(),
        corbetts2021: corbetts2021.sort(),
        corbetts2020: corbetts2020.sort(),
        corbetts2023N: corbetts2023.length,
        corbetts2022N: corbetts2022.length,
        corbetts2021N: corbetts2021.length,
        corbetts2020N: corbetts2020.length,
    })

    const corbettTopData: any[] = []
    corbettTopData.push({
        corbettTops: corbettTops.sort(),
        corbettTopsUnq: removeDuplicates(corbettTops).sort(),
        corbettTopsN: corbettTops.length,
        corbettTopsUnqN: removeDuplicates(corbettTops).length,
        corbettTops2023: corbettTops2023.sort(),
        corbettTops2022: corbettTops2022.sort(),
        corbettTops2021: corbettTops2021.sort(),
        corbettTops2020: corbettTops2020.sort(),
        corbettTops2023N: corbettTops2023.length,
        corbettTops2022N: corbettTops2022.length,
        corbettTops2021N: corbettTops2021.length,
        corbettTops2020N: corbettTops2020.length,
    })

    const grahamData: any[] = []
    grahamData.push({
        grahams: grahams.sort(),
        grahamsUnq: removeDuplicates(grahams).sort(),
        grahamsN: grahams.length,
        grahamsUnqN: removeDuplicates(grahams).length,
        grahams2023: grahams2023.sort(),
        grahams2022: grahams2022.sort(),
        grahams2021: grahams2021.sort(),
        grahams2020: grahams2020.sort(),
        grahams2023N: grahams2023.length,
        grahams2022N: grahams2022.length,
        grahams2021N: grahams2021.length,
        grahams2020N: grahams2020.length,
    })

    const subTwoData: any[] = []
    subTwoData.push({
        subTwos: subTwos.sort(),
        subTwosUnq: removeDuplicates(subTwos).sort(),
        subTwosN: subTwos.length,
        subTwosUnqN: removeDuplicates(subTwos).length,
        subTwos2023: subTwos2023.sort(),
        subTwos2022: subTwos2022.sort(),
        subTwos2021: subTwos2021.sort(),
        subTwos2020: subTwos2020.sort(),
        subTwos2023N: subTwos2023.length,
        subTwos2022N: subTwos2022.length,
        subTwos2021N: subTwos2021.length,
        subTwos2020N: subTwos2020.length,
    })

    const donaldData: any[] = []
    donaldData.push({
        donalds: donalds.sort(),
        donaldsUnq: removeDuplicates(donalds).sort(),
        donaldsN: donalds.length,
        donaldsUnqN: removeDuplicates(donalds).length,
        donalds2023: donalds2023.sort(),
        donalds2022: donalds2022.sort(),
        donalds2021: donalds2021.sort(),
        donalds2020: donalds2020.sort(),
        donalds2023N: donalds2023.length,
        donalds2022N: donalds2022.length,
        donalds2021N: donalds2021.length,
        donalds2020N: donalds2020.length,
    })

    const projectsMiles: any[] = []
    projectsMiles.push({
        total: toMiles(
            totalProjectMiles2023 +
                totalProjectMiles2022 +
                totalProjectMiles2021 +
                totalProjectMiles2020
        ),
        2023: toMiles(totalProjectMiles2023),
        2022: toMiles(totalProjectMiles2022),
        2021: toMiles(totalProjectMiles2021),
        2020: toMiles(totalProjectMiles2020),
    })

    const projectsElev: any[] = []
    projectsElev.push({
        total: toFeet(
            totalProjectElev2023 +
                totalProjectElev2022 +
                totalProjectElev2021 +
                totalProjectElev2020
        ),
        2023: toFeet(totalProjectElev2023),
        2022: toFeet(totalProjectElev2022),
        2021: toFeet(totalProjectElev2021),
        2020: toFeet(totalProjectElev2020),
    })

    return {
        projects,
        number,
        projectsMiles,
        projectsElev,
        islandData,
        munroData,
        munroTopData,
        corbettData,
        corbettTopData,
        grahamData,
        subTwoData,
        donaldData,
    }
}
