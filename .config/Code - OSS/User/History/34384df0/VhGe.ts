import _ from 'lodash'
import { sportData } from '../../data'
import { getResponse } from '../api/get-response'
import { getSessionItem } from '../api/get-session-item'
import { removeDuplicates, toMiles, toFeet, sum } from '../formatters'
import { CompiledProjectProps, ProjectProps } from './types'

type SportDataKeys = keyof typeof sportData

export function compileProjects() {
    // --- Start of Refactor ---

    getResponse(
        'https://raw.githubusercontent.com/FedeRog1977/brittonsbash/master/src/data/api/sport.data-test.json',
        'GET',
        _
    )

    const sportDataTest = {
        2024: getSessionItem('response-2024'),
        2023: getSessionItem('response-2023'),
        2022: getSessionItem('response-2022'),
        2021: getSessionItem('response-2021'),
        2020: getSessionItem('response-2020'),
    }

    console.log(sportData, sportDataTest)

    const years = Object.keys(sportData)

    const Projects = Object.keys(sportData).reduce((object, key) => {
        return {
            ...object,
            [key]: sportData[key as unknown as SportDataKeys].projects,
        }
    }, {})

    const Count = Object.keys(sportData).reduce((object, key) => {
        let total = 0

        years.forEach((year) => {
            total +=
                sportData[year as unknown as unknown as SportDataKeys].projects
                    .length
        })

        return {
            ...object,
            total: total,
            [key]: sportData[key as unknown as SportDataKeys].projects.length,
        }
    }, {})

    const Distance = Object.keys(sportData).reduce((object, key) => {
        let total = 0
        let yearTotal = 0

        years.forEach((year) => {
            sportData[year as unknown as SportDataKeys].projects.forEach(
                (project: ProjectProps) => (total += project.distance)
            )
        })

        sportData[key as unknown as SportDataKeys].projects.forEach(
            (project: ProjectProps) => (yearTotal += project.distance)
        )

        return {
            ...object,
            total: toMiles(total),
            [key]: toMiles(yearTotal),
        }
    }, {})

    const Elevation = Object.keys(sportData).reduce((object, key) => {
        let total = 0
        let yearTotal = 0

        years.forEach((year) => {
            sportData[year as unknown as SportDataKeys].projects.forEach(
                (project: ProjectProps) => (total += project.elevation)
            )
        })

        sportData[key as unknown as SportDataKeys].projects.forEach(
            (project: ProjectProps) => (yearTotal += project.elevation)
        )

        return {
            ...object,
            total: toFeet(total),
            [key]: toFeet(yearTotal),
        }
    }, {})

    const Islands = Object.keys(sportData).reduce((object, key) => {
        let total: string[] = []
        let yearTotal: string[] = []

        years.forEach((year) => {
            sportData[year as unknown as SportDataKeys].projects.forEach(
                (project: ProjectProps) =>
                    project.islands?.forEach((island) => total.push(island))
            )
        })

        sportData[key as unknown as SportDataKeys].projects.forEach(
            (project: ProjectProps) =>
                project.islands?.forEach((island) => yearTotal.push(island))
        )

        return {
            ...object,
            total: total.sort(),
            unique: removeDuplicates(total).sort(),
            [key]: yearTotal.sort(),
            totalCount: total.length,
            uniqueCount: removeDuplicates(total).length,
            [key + 'Count']: yearTotal.length,
        }
    }, {})

    const Munros = Object.keys(sportData).reduce((object, key) => {
        let total: string[] = []
        let yearTotal: string[] = []

        years.forEach((year) => {
            sportData[year as unknown as SportDataKeys].projects.forEach(
                (project: ProjectProps) =>
                    project.munros?.forEach((munro) => total.push(munro))
            )
        })

        sportData[key as unknown as SportDataKeys].projects.forEach(
            (project: ProjectProps) =>
                project.munros?.forEach((munro) => yearTotal.push(munro))
        )

        return {
            ...object,
            total: total.sort(),
            unique: removeDuplicates(total).sort(),
            [key]: yearTotal.sort(),
            totalCount: total.length,
            uniqueCount: removeDuplicates(total).length,
            [key + 'Count']: yearTotal.length,
        }
    }, {})

    const MunroTops = Object.keys(sportData).reduce((object, key) => {
        let total: string[] = []
        let yearTotal: string[] = []

        years.forEach((year) => {
            sportData[year as unknown as SportDataKeys].projects.forEach(
                (project: ProjectProps) =>
                    project.munroTops?.forEach((munroTop) =>
                        total.push(munroTop)
                    )
            )
        })

        sportData[key as unknown as SportDataKeys].projects.forEach(
            (project: ProjectProps) =>
                project.munroTops?.forEach((munroTop) =>
                    yearTotal.push(munroTop)
                )
        )

        return {
            ...object,
            total: total.sort(),
            unique: removeDuplicates(total).sort(),
            [key]: yearTotal.sort(),
            totalCount: total.length,
            uniqueCount: removeDuplicates(total).length,
            [key + 'Count']: yearTotal.length,
        }
    }, {})

    const Corbetts = Object.keys(sportData).reduce((object, key) => {
        let total: string[] = []
        let yearTotal: string[] = []

        years.forEach((year) => {
            sportData[year as unknown as SportDataKeys].projects.forEach(
                (project: ProjectProps) =>
                    project.corbetts?.forEach((corbett) => total.push(corbett))
            )
        })

        sportData[key as unknown as SportDataKeys].projects.forEach(
            (project: ProjectProps) =>
                project.corbetts?.forEach((corbett) => yearTotal.push(corbett))
        )

        return {
            ...object,
            total: total.sort(),
            unique: removeDuplicates(total).sort(),
            [key]: yearTotal.sort(),
            totalCount: total.length,
            uniqueCount: removeDuplicates(total).length,
            [key + 'Count']: yearTotal.length,
        }
    }, {})

    const CorbettTops = Object.keys(sportData).reduce((object, key) => {
        let total: string[] = []
        let yearTotal: string[] = []

        years.forEach((year) => {
            sportData[year as unknown as SportDataKeys].projects.forEach(
                (project: ProjectProps) =>
                    project.corbettTops?.forEach((corbettTop) =>
                        total.push(corbettTop)
                    )
            )
        })

        sportData[key as unknown as SportDataKeys].projects.forEach(
            (project: ProjectProps) =>
                project.corbettTops?.forEach((corbettTop) =>
                    yearTotal.push(corbettTop)
                )
        )

        return {
            ...object,
            total: total.sort(),
            unique: removeDuplicates(total).sort(),
            [key]: yearTotal.sort(),
            totalCount: total.length,
            uniqueCount: removeDuplicates(total).length,
            [key + 'Count']: yearTotal.length,
        }
    }, {})

    const Grahams = Object.keys(sportData).reduce((object, key) => {
        let total: string[] = []
        let yearTotal: string[] = []

        years.forEach((year) => {
            sportData[year as unknown as SportDataKeys].projects.forEach(
                (project: ProjectProps) =>
                    project.grahams?.forEach((graham) => total.push(graham))
            )
        })

        sportData[key as unknown as SportDataKeys].projects.forEach(
            (project: ProjectProps) =>
                project.grahams?.forEach((graham) => yearTotal.push(graham))
        )

        return {
            ...object,
            total: total.sort(),
            unique: removeDuplicates(total).sort(),
            [key]: yearTotal.sort(),
            totalCount: total.length,
            uniqueCount: removeDuplicates(total).length,
            [key + 'Count']: yearTotal.length,
        }
    }, {})

    const SubTwos = Object.keys(sportData).reduce((object, key) => {
        let total: string[] = []
        let yearTotal: string[] = []

        years.forEach((year) => {
            sportData[year as unknown as SportDataKeys].projects.forEach(
                (project: ProjectProps) =>
                    project.subTwos?.forEach((subTwo) => total.push(subTwo))
            )
        })

        sportData[key as unknown as SportDataKeys].projects.forEach(
            (project: ProjectProps) =>
                project.subTwos?.forEach((subTwo) => yearTotal.push(subTwo))
        )

        return {
            ...object,
            total: total.sort(),
            unique: removeDuplicates(total).sort(),
            [key]: yearTotal.sort(),
            totalCount: total.length,
            uniqueCount: removeDuplicates(total).length,
            [key + 'Count']: yearTotal.length,
        }
    }, {})

    const Donalds = Object.keys(sportData).reduce((object, key) => {
        let total: string[] = []
        let yearTotal: string[] = []

        years.forEach((year) => {
            sportData[year as unknown as SportDataKeys].projects.forEach(
                (project: ProjectProps) =>
                    project.donalds?.forEach((donald) => total.push(donald))
            )
        })

        sportData[key as unknown as SportDataKeys].projects.forEach(
            (project: ProjectProps) =>
                project.donalds?.forEach((donald) => yearTotal.push(donald))
        )

        return {
            ...object,
            total: total.sort(),
            unique: removeDuplicates(total).sort(),
            [key]: yearTotal.sort(),
            totalCount: total.length,
            uniqueCount: removeDuplicates(total).length,
            [key + 'Count']: yearTotal.length,
        }
    }, {})

    console.log({
        Projects,
        Count,
        Distance,
        Elevation,
        Islands,
        Munros,
        MunroTops,
        Corbetts,
        CorbettTops,
        Grahams,
        SubTwos,
        Donalds,
    })

    // --- End of Refactor ---

    const projects: CompiledProjectProps['projects'] = {
        2024: sportData[2024].projects,
        2023: sportData[2023].projects,
        2022: sportData[2022].projects,
        2021: sportData[2021].projects,
        2020: sportData[2020].projects,
    }

    const number: CompiledProjectProps['number'] = {
        total:
            sportData[2024].projects.length +
            sportData[2023].projects.length +
            sportData[2022].projects.length +
            sportData[2021].projects.length +
            sportData[2020].projects.length,
        2024: sportData[2024].projects.length,
        2023: sportData[2023].projects.length,
        2022: sportData[2022].projects.length,
        2021: sportData[2021].projects.length,
        2020: sportData[2020].projects.length,
    }

    const islandsTotal: string[] = []
    const munrosTotal: string[] = []
    const munroTopsTotal: string[] = []
    const corbettsTotal: string[] = []
    const corbettTopsTotal: string[] = []
    const grahamsTotal: string[] = []
    const subTwosTotal: string[] = []
    const donaldsTotal: string[] = []

    var distance2024: number = 0
    var elevation2024: number = 0

    const islands2024: string[] = []
    const munros2024: string[] = []
    const munroTops2024: string[] = []
    const corbetts2024: string[] = []
    const corbettTops2024: string[] = []
    const grahams2024: string[] = []
    const subTwos2024: string[] = []
    const donalds2024: string[] = []

    sportData[2024].projects.forEach((event: ProjectProps) => {
        distance2024 = distance2024 + event.distance
        elevation2024 = elevation2024 + event.elevation

        event.islands?.forEach((island: string) => {
            islands2024.push(island)
        })
        event.munros?.forEach((munro: string) => {
            munros2024.push(munro)
        })
        event.munroTops?.forEach((munroTop: string) => {
            munroTops2024.push(munroTop)
        })
        event.corbetts?.forEach((corbett: string) => {
            corbetts2024.push(corbett)
        })
        event.corbettTops?.forEach((corbettTop: string) => {
            corbettTops2024.push(corbettTop)
        })
        event.grahams?.forEach((graham: string) => {
            grahams2024.push(graham)
        })
        event.subTwos?.forEach((subTwo: string) => {
            subTwos2024.push(subTwo)
        })
        event.donalds?.forEach((donald: string) => {
            donalds2024.push(donald)
        })
    })

    islands2024.forEach((island: string) => {
        islandsTotal.push(island)
    })
    munros2024.forEach((munro: string) => {
        munrosTotal.push(munro)
    })
    munroTops2024.forEach((munroTop: string) => {
        munroTopsTotal.push(munroTop)
    })
    corbetts2024.forEach((corbett: string) => {
        corbettsTotal.push(corbett)
    })
    corbettTops2024.forEach((corbettTop: string) => {
        corbettTopsTotal.push(corbettTop)
    })
    grahams2024.forEach((graham: string) => {
        grahamsTotal.push(graham)
    })
    subTwos2024.forEach((subTwo: string) => {
        subTwosTotal.push(subTwo)
    })
    donalds2024.forEach((donald: string) => {
        donaldsTotal.push(donald)
    })

    var distance2023: number = 0
    var elevation2023: number = 0

    const islands2023: string[] = []
    const munros2023: string[] = []
    const munroTops2023: string[] = []
    const corbetts2023: string[] = []
    const corbettTops2023: string[] = []
    const grahams2023: string[] = []
    const subTwos2023: string[] = []
    const donalds2023: string[] = []

    sportData[2023].projects.forEach((event: ProjectProps) => {
        distance2023 = distance2023 + event.distance
        elevation2023 = elevation2023 + event.elevation

        event.islands?.forEach((island: string) => {
            islands2023.push(island)
        })
        event.munros?.forEach((munro: string) => {
            munros2023.push(munro)
        })
        event.munroTops?.forEach((munroTop: string) => {
            munroTops2023.push(munroTop)
        })
        event.corbetts?.forEach((corbett: string) => {
            corbetts2023.push(corbett)
        })
        event.corbettTops?.forEach((corbettTop: string) => {
            corbettTops2023.push(corbettTop)
        })
        event.grahams?.forEach((graham: string) => {
            grahams2023.push(graham)
        })
        event.subTwos?.forEach((subTwo: string) => {
            subTwos2023.push(subTwo)
        })
        event.donalds?.forEach((donald: string) => {
            donalds2023.push(donald)
        })
    })

    islands2023.forEach((island: string) => {
        islandsTotal.push(island)
    })
    munros2023.forEach((munro: string) => {
        munrosTotal.push(munro)
    })
    munroTops2023.forEach((munroTop: string) => {
        munroTopsTotal.push(munroTop)
    })
    corbetts2023.forEach((corbett: string) => {
        corbettsTotal.push(corbett)
    })
    corbettTops2023.forEach((corbettTop: string) => {
        corbettTopsTotal.push(corbettTop)
    })
    grahams2023.forEach((graham: string) => {
        grahamsTotal.push(graham)
    })
    subTwos2023.forEach((subTwo: string) => {
        subTwosTotal.push(subTwo)
    })
    donalds2023.forEach((donald: string) => {
        donaldsTotal.push(donald)
    })

    var distance2022: number = 0
    var elevation2022: number = 0

    const islands2022: string[] = []
    const munros2022: string[] = []
    const munroTops2022: string[] = []
    const corbetts2022: string[] = []
    const corbettTops2022: string[] = []
    const grahams2022: string[] = []
    const subTwos2022: string[] = []
    const donalds2022: string[] = []

    sportData[2022].projects.forEach((event: ProjectProps) => {
        distance2022 = distance2022 + event.distance
        elevation2022 = elevation2022 + event.elevation

        event.islands?.forEach((island: string) => {
            islands2022.push(island)
        })
        event.munros?.forEach((munro: string) => {
            munros2022.push(munro)
        })
        event.munroTops?.forEach((munroTop: string) => {
            munroTops2022.push(munroTop)
        })
        event.corbetts?.forEach((corbett: string) => {
            corbetts2022.push(corbett)
        })
        event.corbettTops?.forEach((corbettTop: string) => {
            corbettTops2022.push(corbettTop)
        })
        event.grahams?.forEach((graham: string) => {
            grahams2022.push(graham)
        })
        event.subTwos?.forEach((subTwo: string) => {
            subTwos2022.push(subTwo)
        })
        event.donalds?.forEach((donald: string) => {
            donalds2022.push(donald)
        })
    })

    islands2022.forEach((island: string) => {
        islandsTotal.push(island)
    })
    munros2022.forEach((munro: string) => {
        munrosTotal.push(munro)
    })
    munroTops2022.forEach((munroTop: string) => {
        munroTopsTotal.push(munroTop)
    })
    corbetts2022.forEach((corbett: string) => {
        corbettsTotal.push(corbett)
    })
    corbettTops2022.forEach((corbettTop: string) => {
        corbettTopsTotal.push(corbettTop)
    })
    grahams2022.forEach((graham: string) => {
        grahamsTotal.push(graham)
    })
    subTwos2022.forEach((subTwo: string) => {
        subTwosTotal.push(subTwo)
    })
    donalds2022.forEach((donald: string) => {
        donaldsTotal.push(donald)
    })

    var distance2021: number = 0
    var elevation2021: number = 0

    const islands2021: string[] = []
    const munros2021: string[] = []
    const munroTops2021: string[] = []
    const corbetts2021: string[] = []
    const corbettTops2021: string[] = []
    const grahams2021: string[] = []
    const subTwos2021: string[] = []
    const donalds2021: string[] = []

    sportData[2021].projects.forEach((event: ProjectProps) => {
        distance2021 = distance2021 + event.distance
        elevation2021 = elevation2021 + event.elevation

        event.islands?.forEach((island: string) => {
            islands2021.push(island)
        })
        event.munros?.forEach((munro: string) => {
            munros2021.push(munro)
        })
        event.munroTops?.forEach((munroTop: string) => {
            munroTops2021.push(munroTop)
        })
        event.corbetts?.forEach((corbett: string) => {
            corbetts2021.push(corbett)
        })
        event.corbettTops?.forEach((corbettTop: string) => {
            corbettTops2021.push(corbettTop)
        })
        event.grahams?.forEach((graham: string) => {
            grahams2021.push(graham)
        })
        event.subTwos?.forEach((subTwo: string) => {
            subTwos2021.push(subTwo)
        })
        event.donalds?.forEach((donald: string) => {
            donalds2021.push(donald)
        })
    })

    islands2021.forEach((island: string) => {
        islandsTotal.push(island)
    })
    munros2021.forEach((munro: string) => {
        munrosTotal.push(munro)
    })
    munroTops2021.forEach((munroTop: string) => {
        munroTopsTotal.push(munroTop)
    })
    corbetts2021.forEach((corbett: string) => {
        corbettsTotal.push(corbett)
    })
    corbettTops2021.forEach((corbettTop: string) => {
        corbettTopsTotal.push(corbettTop)
    })
    grahams2021.forEach((graham: string) => {
        grahamsTotal.push(graham)
    })
    subTwos2021.forEach((subTwo: string) => {
        subTwosTotal.push(subTwo)
    })
    donalds2021.forEach((donald: string) => {
        donaldsTotal.push(donald)
    })

    var distance2020: number = 0
    var elevation2020: number = 0

    const islands2020: string[] = []
    const munros2020: string[] = []
    const munroTops2020: string[] = []
    const corbetts2020: string[] = []
    const corbettTops2020: string[] = []
    const grahams2020: string[] = []
    const subTwos2020: string[] = []
    const donalds2020: string[] = []

    sportData[2020].projects.forEach((event: ProjectProps) => {
        distance2020 = distance2020 + event.distance
        elevation2020 = elevation2020 + event.elevation

        event.islands?.forEach((island: string) => {
            islands2020.push(island)
        })
        event.munros?.forEach((munro: string) => {
            munros2020.push(munro)
        })
        event.munroTops?.forEach((munroTop: string) => {
            munroTops2020.push(munroTop)
        })
        event.corbetts?.forEach((corbett: string) => {
            corbetts2020.push(corbett)
        })
        event.corbettTops?.forEach((corbettTop: string) => {
            corbettTops2020.push(corbettTop)
        })
        event.grahams?.forEach((graham: string) => {
            grahams2020.push(graham)
        })
        event.subTwos?.forEach((subTwo: string) => {
            subTwos2020.push(subTwo)
        })
        event.donalds?.forEach((donald: string) => {
            donalds2020.push(donald)
        })
    })

    islands2020.forEach((island: string) => {
        islandsTotal.push(island)
    })
    munros2020.forEach((munro: string) => {
        munrosTotal.push(munro)
    })
    munroTops2020.forEach((munroTop: string) => {
        munroTopsTotal.push(munroTop)
    })
    corbetts2020.forEach((corbett: string) => {
        corbettsTotal.push(corbett)
    })
    corbettTops2020.forEach((corbettTop: string) => {
        corbettTopsTotal.push(corbettTop)
    })
    grahams2020.forEach((graham: string) => {
        grahamsTotal.push(graham)
    })
    subTwos2020.forEach((subTwo: string) => {
        subTwosTotal.push(subTwo)
    })
    donalds2020.forEach((donald: string) => {
        donaldsTotal.push(donald)
    })

    const islands: CompiledProjectProps['islands'] = {
        names: {
            total: islandsTotal.sort(),
            unique: removeDuplicates(islandsTotal).sort(),
            2024: islands2024.sort(),
            2023: islands2023.sort(),
            2022: islands2022.sort(),
            2021: islands2021.sort(),
            2020: islands2020.sort(),
        },
        number: {
            total: islandsTotal.length,
            unique: removeDuplicates(islandsTotal).length,
            2024: islands2024.length,
            2023: islands2023.length,
            2022: islands2022.length,
            2021: islands2021.length,
            2020: islands2020.length,
        },
    }

    const munros: CompiledProjectProps['munros'] = {
        names: {
            total: munrosTotal.sort(),
            unique: removeDuplicates(munrosTotal).sort(),
            2024: munros2024.sort(),
            2023: munros2023.sort(),
            2022: munros2022.sort(),
            2021: munros2021.sort(),
            2020: munros2020.sort(),
        },
        number: {
            total: munrosTotal.length,
            unique: removeDuplicates(munrosTotal).length,
            2024: munros2024.length,
            2023: munros2023.length,
            2022: munros2022.length,
            2021: munros2021.length,
            2020: munros2020.length,
        },
    }

    const munroTops: CompiledProjectProps['munroTops'] = {
        names: {
            total: munroTopsTotal.sort(),
            unique: removeDuplicates(munroTopsTotal).sort(),
            2024: munroTops2024.sort(),
            2023: munroTops2023.sort(),
            2022: munroTops2022.sort(),
            2021: munroTops2021.sort(),
            2020: munroTops2020.sort(),
        },
        number: {
            total: munroTopsTotal.length,
            unique: removeDuplicates(munroTopsTotal).length,
            2024: munroTops2024.length,
            2023: munroTops2023.length,
            2022: munroTops2022.length,
            2021: munroTops2021.length,
            2020: munroTops2020.length,
        },
    }

    const corbetts: CompiledProjectProps['corbetts'] = {
        names: {
            total: corbettsTotal.sort(),
            unique: removeDuplicates(corbettsTotal).sort(),
            2024: corbetts2024.sort(),
            2023: corbetts2023.sort(),
            2022: corbetts2022.sort(),
            2021: corbetts2021.sort(),
            2020: corbetts2020.sort(),
        },
        number: {
            total: corbettsTotal.length,
            unique: removeDuplicates(corbettsTotal).length,
            2024: corbetts2024.length,
            2023: corbetts2023.length,
            2022: corbetts2022.length,
            2021: corbetts2021.length,
            2020: corbetts2020.length,
        },
    }

    const corbettTops: CompiledProjectProps['corbettTops'] = {
        names: {
            total: corbettTopsTotal.sort(),
            unique: removeDuplicates(corbettTopsTotal).sort(),
            2024: corbettTops2024.sort(),
            2023: corbettTops2023.sort(),
            2022: corbettTops2022.sort(),
            2021: corbettTops2021.sort(),
            2020: corbettTops2020.sort(),
        },
        number: {
            total: corbettTopsTotal.length,
            unique: removeDuplicates(corbettTopsTotal).length,
            2024: corbettTops2024.length,
            2023: corbettTops2023.length,
            2022: corbettTops2022.length,
            2021: corbettTops2021.length,
            2020: corbettTops2020.length,
        },
    }

    const grahams: CompiledProjectProps['grahams'] = {
        names: {
            total: grahamsTotal.sort(),
            unique: removeDuplicates(grahamsTotal).sort(),
            2024: grahams2024.sort(),
            2023: grahams2023.sort(),
            2022: grahams2022.sort(),
            2021: grahams2021.sort(),
            2020: grahams2020.sort(),
        },
        number: {
            total: grahamsTotal.length,
            unique: removeDuplicates(grahamsTotal).length,
            2024: grahams2024.length,
            2023: grahams2023.length,
            2022: grahams2022.length,
            2021: grahams2021.length,
            2020: grahams2020.length,
        },
    }

    const subTwos: CompiledProjectProps['subTwos'] = {
        names: {
            total: subTwosTotal.sort(),
            unique: removeDuplicates(subTwosTotal).sort(),
            2024: subTwos2024.sort(),
            2023: subTwos2023.sort(),
            2022: subTwos2022.sort(),
            2021: subTwos2021.sort(),
            2020: subTwos2020.sort(),
        },
        number: {
            total: subTwosTotal.length,
            unique: removeDuplicates(subTwosTotal).length,
            2024: subTwos2024.length,
            2023: subTwos2023.length,
            2022: subTwos2022.length,
            2021: subTwos2021.length,
            2020: subTwos2020.length,
        },
    }

    const donalds: CompiledProjectProps['donalds'] = {
        names: {
            total: donaldsTotal.sort(),
            unique: removeDuplicates(donaldsTotal).sort(),
            2024: donalds2024.sort(),
            2023: donalds2023.sort(),
            2022: donalds2022.sort(),
            2021: donalds2021.sort(),
            2020: donalds2020.sort(),
        },
        number: {
            total: donaldsTotal.length,
            unique: removeDuplicates(donaldsTotal).length,
            2024: donalds2024.length,
            2023: donalds2023.length,
            2022: donalds2022.length,
            2021: donalds2021.length,
            2020: donalds2020.length,
        },
    }

    const distance: CompiledProjectProps['distance'] = {
        total: toMiles(
            distance2024 +
                distance2023 +
                distance2022 +
                distance2021 +
                distance2020
        ),
        2024: toMiles(distance2024),
        2023: toMiles(distance2023),
        2022: toMiles(distance2022),
        2021: toMiles(distance2021),
        2020: toMiles(distance2020),
    }

    const elevation: CompiledProjectProps['elevation'] = {
        total: toFeet(
            elevation2024 +
                elevation2023 +
                elevation2022 +
                elevation2021 +
                elevation2020
        ),
        2024: toFeet(elevation2024),
        2023: toFeet(elevation2023),
        2022: toFeet(elevation2022),
        2021: toFeet(elevation2021),
        2020: toFeet(elevation2020),
    }

    const compiledProjects: CompiledProjectProps = {
        projects,
        number,
        distance,
        elevation,
        islands,
        munros,
        munroTops,
        corbetts,
        corbettTops,
        grahams,
        subTwos,
        donalds,
    }

    console.log('All Projects:\n\n', compiledProjects)
    return compiledProjects
}
