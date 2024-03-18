import { sportData } from "../../data/general/Sport";
import { toFeet } from "../formatters/toFeet";
import { toMiles } from "../formatters/toMiles";

const compileProjects = () => {
    const islands: any[] = [];
    var munros: any[] = [];
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

    munros.push('Stob Ghabhar')

    munros = [...new Set(munros.sort())];




    for (var i in sportData[2022].projects) {
        totalProjectMiles2022 = totalProjectMiles2022 + sportData[2022].projects[i].dist;
        totalProjectElev2022 = totalProjectElev2022 + sportData[2022].projects[i].elev;
    }

    for (var i in sportData[2021].projects) {
        totalProjectMiles2021 = totalProjectMiles2021 + sportData[2021].projects[i].dist;
        totalProjectElev2021 = totalProjectElev2021 + sportData[2021].projects[i].elev;
    }

    for (var i in sportData[2020].projects) {
        totalProjectMiles2020 = totalProjectMiles2020 + sportData[2020].projects[i].dist;
        totalProjectElev2020 = totalProjectElev2020 + sportData[2020].projects[i].elev;
    }

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

    console.log(
        'Projects:\n\n',
        projects,
        '\n\nNumber of Projects:\n\n',
        projectsN,
        '\n\nProject Miles:\n\n',
        projectsMiles,
        '\n\nProject Elevation:\n\n',
        projectsElev,
        munros
    );

    return {
        projects,
        projectsN,
        projectsMiles,
        projectsElev,
        munroData: {
            munros,
        }
    };
};

export default compileProjects;