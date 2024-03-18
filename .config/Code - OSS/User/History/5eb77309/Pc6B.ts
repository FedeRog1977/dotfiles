import { sportData } from "../../data/general/Sport";
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

    for (var a in sportData[2023].projects) {
        totalProjectMiles2023 = totalProjectMiles2023 + sportData[2023].projects[a].dist;
        totalProjectElev2023 = totalProjectElev2023 + sportData[2023].projects[a].elev;
        for (var w in sportData[2023].projects[a].munros) {
            munros2023.push(sportData[2023].projects[a].munros);
        }
    }

    for (var b in sportData[2022].projects) {
        totalProjectMiles2022 = totalProjectMiles2022 + sportData[2022].projects[b].dist;
        totalProjectElev2022 = totalProjectElev2022 + sportData[2022].projects[b].elev;
    }

    for (var c in sportData[2021].projects) {
        totalProjectMiles2021 = totalProjectMiles2021 + sportData[2021].projects[c].dist;
        totalProjectElev2021 = totalProjectElev2021 + sportData[2021].projects[c].elev;
    }

    for (var d in sportData[2020].projects) {
        totalProjectMiles2020 = totalProjectMiles2020 + sportData[2020].projects[d].dist;
        totalProjectElev2020 = totalProjectElev2020 + sportData[2020].projects[d].elev;
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
        munros2023
    );

    return {
        projects,
        projectsN,
        projectsMiles,
        projectsElev
    };
};

export default compileProjects;