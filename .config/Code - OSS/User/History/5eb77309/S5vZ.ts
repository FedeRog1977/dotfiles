import { sportData } from "../../data/general/Sport";
import { removeDuplicates } from "../formatters/removeDuplicates";
import { toFeet } from "../formatters/toFeet";
import { toMiles } from "../formatters/toMiles";

const compileProjects = () => {
    const islands: any[] = [];
    const munros: any[] = [];
    const munroTops: any[] = [];
    const corbetts: any[] = [];
    const corbettTops: any[] = [];
    const grahams: any[] = [];
    const subTwos: any[] = [];
    const donalds: any[] = [];

    const islands2023: any[] = [];
    const munros2023: any[] = [];
    const munroTops2023: any[] = [];
    const corbetts2023: any[] = [];
    const corbettTops2023: any[] = [];
    const grahams2023: any[] = [];
    const subTwos2023: any[] = [];
    const donalds2023: any[] = [];

    const islands2022: any[] = [];
    const munros2022: any[] = [];
    const munroTops2022: any[] = [];
    const corbetts2022: any[] = [];
    const corbettTops2022: any[] = [];
    const grahams2022: any[] = [];
    const subTwos2022: any[] = [];
    const donalds2022: any[] = [];

    const islands2021: any[] = [];
    const munros2021: any[] = [];
    const munroTops2021: any[] = [];
    const corbetts2021: any[] = [];
    const corbettTops2021: any[] = [];
    const grahams2021: any[] = [];
    const subTwos2021: any[] = [];
    const donalds2021: any[] = [];

    const islands2020: any[] = [];
    const munros2020: any[] = [];
    const munroTops2020: any[] = [];
    const corbetts2020: any[] = [];
    const corbettTops2020: any[] = [];
    const grahams2020: any[] = [];
    const subTwos2020: any[] = [];
    const donalds2020: any[] = [];

    const projects: any[] = [];
    projects.push({
        2023: sportData[2023].projects,
        2022: sportData[2022].projects,
        2021: sportData[2021].projects,
        2020: sportData[2020].projects
    });

    const projectsN: any[] = [];
    projectsN.push({
        'total': (
            sportData[2023].projects.length
            + sportData[2022].projects.length
            + sportData[2021].projects.length
            + sportData[2020].projects.length
        ),
        2023: sportData[2023].projects.length,
        2022: sportData[2022].projects.length,
        2021: sportData[2021].projects.length,
        2020: sportData[2020].projects.length
    });

    var totalProjectMiles2023: number = 0;
    var totalProjectMiles2022: number = 0;
    var totalProjectMiles2021: number = 0;
    var totalProjectMiles2020: number = 0;

    var totalProjectElev2023: number = 0;
    var totalProjectElev2022: number = 0;
    var totalProjectElev2021: number = 0;
    var totalProjectElev2020: number = 0;

    for (var i in sportData[2023].projects) {
        totalProjectMiles2023 = totalProjectMiles2023 + sportData[2023].projects[i].dist;
        totalProjectElev2023 = totalProjectElev2023 + sportData[2023].projects[i].elev;
        for (var j in sportData[2023].projects[i].islands) {
            islands2023.push(sportData[2023].projects[i].islands[j]);
        }
        for (var j in sportData[2023].projects[i].munros) {
            munros2023.push(sportData[2023].projects[i].munros[j]);
        }
        for (var j in sportData[2023].projects[i].munroTops) {
            munroTops2023.push(sportData[2023].projects[i].munroTops[j]);
        }
        for (var j in sportData[2023].projects[i].corbetts) {
            corbetts2023.push(sportData[2023].projects[i].corbetts[j]);
        }
        for (var j in sportData[2023].projects[i].corbettTops) {
            corbettTops2023.push(sportData[2023].projects[i].corbettTops[j]);
        }
        for (var j in sportData[2023].projects[i].grahams) {
            grahams2023.push(sportData[2023].projects[i].grahams[j]);
        }
        for (var j in sportData[2023].projects[i].subTwos) {
            subTwos2023.push(sportData[2023].projects[i].subTwos[j]);
        }
        for (var j in sportData[2023].projects[i].donalds) {
            donalds2023.push(sportData[2023].projects[i].donalds[j]);
        }
    }

    for (var x in islands2023) {
        islands.push(islands2023[x]);
    }
    for (var x in munros2023) {
        munros.push(munros2023[x]);
    }
    for (var x in munroTops2023) {
        munroTops.push(munroTops2023[x]);
    }
    for (var x in corbetts2023) {
        corbetts.push(corbetts2023[x]);
    }
    for (var x in corbettTops2023) {
        corbettTops.push(corbettTops2023[x]);
    }
    for (var x in grahams2023) {
        grahams.push(grahams2023[x]);
    }
    for (var x in subTwos2023) {
        subTwos.push(subTwos2023[x]);
    }
    for (var x in donalds2023) {
        donalds.push(donalds2023[x]);
    }

    for (var i in sportData[2022].projects) {
        totalProjectMiles2022 = totalProjectMiles2022 + sportData[2022].projects[i].dist;
        totalProjectElev2022 = totalProjectElev2022 + sportData[2022].projects[i].elev;
        for (var j in sportData[2022].projects[i].islands) {
            islands2022.push(sportData[2022].projects[i].islands[j]);
        }
        for (var j in sportData[2022].projects[i].munros) {
            munros2022.push(sportData[2022].projects[i].munros[j]);
        }
        for (var j in sportData[2022].projects[i].munroTops) {
            munroTops2022.push(sportData[2022].projects[i].munroTops[j]);
        }
        for (var j in sportData[2022].projects[i].corbetts) {
            corbetts2022.push(sportData[2022].projects[i].corbetts[j]);
        }
        for (var j in sportData[2022].projects[i].corbettTops) {
            corbettTops2022.push(sportData[2022].projects[i].corbettTops[j]);
        }
        for (var j in sportData[2022].projects[i].grahams) {
            grahams2022.push(sportData[2022].projects[i].grahams[j]);
        }
        for (var j in sportData[2022].projects[i].subTwos) {
            subTwos2022.push(sportData[2022].projects[i].subTwos[j]);
        }
        for (var j in sportData[2022].projects[i].donalds) {
            donalds2022.push(sportData[2022].projects[i].donalds[j]);
        }
    }

    for (var x in islands2022) {
        islands.push(islands2022[x]);
    }
    for (var x in munros2022) {
        munros.push(munros2022[x]);
    }
    for (var x in munroTops2022) {
        munroTops.push(munroTops2022[x]);
    }
    for (var x in corbetts2022) {
        corbetts.push(corbetts2022[x]);
    }
    for (var x in corbettTops2022) {
        corbettTops.push(corbettTops2022[x]);
    }
    for (var x in grahams2022) {
        grahams.push(grahams2022[x]);
    }
    for (var x in subTwos2022) {
        subTwos.push(subTwos2022[x]);
    }
    for (var x in donalds2022) {
        donalds.push(donalds2022[x]);
    }

    for (var i in sportData[2021].projects) {
        totalProjectMiles2021 = totalProjectMiles2021 + sportData[2021].projects[i].dist;
        totalProjectElev2021 = totalProjectElev2021 + sportData[2021].projects[i].elev;
        for (var j in sportData[2021].projects[i].islands) {
            islands2021.push(sportData[2021].projects[i].islands[j]);
        }
        for (var j in sportData[2021].projects[i].munros) {
            munros2021.push(sportData[2021].projects[i].munros[j]);
        }
        for (var j in sportData[2021].projects[i].munroTops) {
            munroTops2021.push(sportData[2021].projects[i].munroTops[j]);
        }
        for (var j in sportData[2021].projects[i].corbetts) {
            corbetts2021.push(sportData[2021].projects[i].corbetts[j]);
        }
        for (var j in sportData[2021].projects[i].corbettTops) {
            corbettTops2021.push(sportData[2021].projects[i].corbettTops[j]);
        }
        for (var j in sportData[2021].projects[i].grahams) {
            grahams2021.push(sportData[2021].projects[i].grahams[j]);
        }
        for (var j in sportData[2021].projects[i].subTwos) {
            subTwos2021.push(sportData[2021].projects[i].subTwos[j]);
        }
        for (var j in sportData[2021].projects[i].donalds) {
            donalds2021.push(sportData[2021].projects[i].donalds[j]);
        }
    }

    for (var x in islands2021) {
        islands.push(islands2021[x]);
    }
    for (var x in munros2021) {
        munros.push(munros2021[x]);
    }
    for (var x in munroTops2021) {
        munroTops.push(munroTops2021[x]);
    }
    for (var x in corbetts2021) {
        corbetts.push(corbetts2021[x]);
    }
    for (var x in corbettTops2021) {
        corbettTops.push(corbettTops2021[x]);
    }
    for (var x in grahams2021) {
        grahams.push(grahams2021[x]);
    }
    for (var x in subTwos2021) {
        subTwos.push(subTwos2021[x]);
    }
    for (var x in donalds2021) {
        donalds.push(donalds2021[x]);
    }

    for (var i in sportData[2020].projects) {
        totalProjectMiles2020 = totalProjectMiles2020 + sportData[2020].projects[i].dist;
        totalProjectElev2020 = totalProjectElev2020 + sportData[2020].projects[i].elev;
        for (var j in sportData[2020].projects[i].islands) {
            islands2020.push(sportData[2020].projects[i].islands[j]);
        }
        for (var j in sportData[2020].projects[i].munros) {
            munros2020.push(sportData[2020].projects[i].munros[j]);
        }
        for (var j in sportData[2020].projects[i].munroTops) {
            munroTops2020.push(sportData[2020].projects[i].munroTops[j]);
        }
        for (var j in sportData[2020].projects[i].corbetts) {
            corbetts2020.push(sportData[2020].projects[i].corbetts[j]);
        }
        for (var j in sportData[2020].projects[i].corbettTops) {
            corbettTops2020.push(sportData[2020].projects[i].corbettTops[j]);
        }
        for (var j in sportData[2020].projects[i].grahams) {
            grahams2020.push(sportData[2020].projects[i].grahams[j]);
        }
        for (var j in sportData[2020].projects[i].subTwos) {
            subTwos2020.push(sportData[2020].projects[i].subTwos[j]);
        }
        for (var j in sportData[2020].projects[i].donalds) {
            donalds2020.push(sportData[2020].projects[i].donalds[j]);
        }
    }

    for (var x in islands2020) {
        islands.push(islands2020[x]);
    }
    for (var x in munros2020) {
        munros.push(munros2020[x]);
    }
    for (var x in munroTops2020) {
        munroTops.push(munroTops2020[x]);
    }
    for (var x in corbetts2020) {
        corbetts.push(corbetts2020[x]);
    }
    for (var x in corbettTops2020) {
        corbettTops.push(corbettTops2020[x]);
    }
    for (var x in grahams2020) {
        grahams.push(grahams2020[x]);
    }
    for (var x in subTwos2020) {
        subTwos.push(subTwos2020[x]);
    }
    for (var x in donalds2020) {
        donalds.push(donalds2020[x]);
    }

    const munroData: any[] = [];
    munroData.push({
        munros: munros,
        munrosUnq: removeDuplicates(munros),
        munrosN: munros.length,
        munrosUnqN: removeDuplicates(munros).length,
        munros2023: munros2023,
        munros2022: munros2022,
        munros2021: munros2021,
        munros2020: munros2020,
        munros2023N: munros2023.length,
        munros2022N: munros2022.length,
        munros2021N: munros2021.length,
        munros2020N: munros2020.length
    });

    const projectsMiles: any[] = [];
    projectsMiles.push({
        'total': (
            toMiles(
                totalProjectMiles2023
                + totalProjectMiles2022
                + totalProjectMiles2021
                + totalProjectMiles2020
            )
        ),
        2023: toMiles(totalProjectMiles2023),
        2022: toMiles(totalProjectMiles2022),
        2021: toMiles(totalProjectMiles2021),
        2020: toMiles(totalProjectMiles2020)
    });

    const projectsElev: any[] = [];
    projectsElev.push({
        'total': (
            toFeet(
                totalProjectElev2023
                + totalProjectElev2022
                + totalProjectElev2021
                + totalProjectElev2020
            )
        ),
        2023: toFeet(totalProjectElev2023),
        2022: toFeet(totalProjectElev2022),
        2021: toFeet(totalProjectElev2021),
        2020: toFeet(totalProjectElev2020)
    });

    return {
        projects,
        projectsN,
        projectsMiles,
        projectsElev,
        munroData
    };
};

export default compileProjects;

console.log(compileProjects());
