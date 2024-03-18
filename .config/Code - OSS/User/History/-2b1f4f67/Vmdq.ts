import { sportData } from "../../data/general/Sport";
import { toFeet } from "../formatters/toFeet";
import { toMiles } from "../formatters/toMiles";

const compileMiles = () => {
    // Miles

    const miles: any[] = [];
    miles.push({
        2023: sportData[2023].miles,
        2022: sportData[2022].miles,
        2021: sportData[2021].miles,
        2020: sportData[2020].miles
    });

    // Number of Miles

    const milesN: any[] = [];
    milesN.push({
        'total': (
            sportData[2023].miles.length
            + sportData[2022].miles.length
            + sportData[2021].miles.length
            + sportData[2020].miles.length
        ),
        2023: sportData[2023].miles.length,
        2022: sportData[2022].miles.length,
        2021: sportData[2021].miles.length,
        2020: sportData[2020].miles.length
    });

    var totalMilesMiles2023: number = 0;
    var totalMilesMiles2022: number = 0;
    var totalMilesMiles2021: number = 0;
    var totalMilesMiles2020: number = 0;

    var totalMilesElev2023: number = 0;
    var totalMilesElev2022: number = 0;
    var totalMilesElev2021: number = 0;
    var totalMilesElev2020: number = 0;

    for (var i in sportData[2023].projects) {
        totalMilesMiles2023 = totalMilesMiles2023 + sportData[2023].projects[i].dist;
        totalMilesElev2023 = totalMilesElev2023 + sportData[2023].projects[i].elev;
    }

    for (var i in sportData[2022].projects) {
        totalMilesMiles2022 = totalMilesMiles2022 + sportData[2022].projects[i].dist;
        totalMilesElev2022 = totalMilesElev2022 + sportData[2022].projects[i].elev;
    }

    for (var i in sportData[2021].projects) {
        totalMilesMiles2021 = totalMilesMiles2021 + sportData[2021].projects[i].dist;
        totalMilesElev2021 = totalMilesElev2021 + sportData[2021].projects[i].elev;
    }

    for (var i in sportData[2020].projects) {
        totalMilesMiles2020 = totalMilesMiles2020 + sportData[2020].projects[i].dist;
        totalMilesElev2020 = totalMilesElev2020 + sportData[2020].projects[i].elev;
    }

    // Miles Miles

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

    // Miles Elevation

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
        'Miles:\n\n',
        projects,
        '\n\nNumber of Miles:\n\n',
        projectsN,
        '\n\Miles Miles:\n\n',
        projectsMiles,
        '\n\Miles Elevation:\n\n',
        projectsElev

    );

    return {
        projects,
        projectsN,
        projectsMiles,
        projectsElev
    };
};

export default compileMiles;