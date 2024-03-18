import { sportData } from "../../data/general/Sport";
import { toMiles } from "../formatters/toMiles";

const compileProjects = () => {
    const allProjects: any[] = [];

    var totalProjects2023 = sportData[2023].projects.length;
    var totalProjects2022 = sportData[2022].projects.length;
    var totalProjects2021 = sportData[2021].projects.length;
    var totalProjects2020 = sportData[2020].projects.length;

    var totalProjectMiles2023: any = 0;
    var totalProjectMiles2022: any = 0;
    var totalProjectMiles2021: any = 0;
    var totalProjectMiles2020: any = 0;

    var totalProjectElev2023: any = 0;
    var totalProjectElev2022: any = 0;
    var totalProjectElev2021: any = 0;
    var totalProjectElev2020: any = 0;

    for (var i in sportData[2023].projects) {
        allProjects.push(sportData[2023].projects[i]);
        totalProjectMiles2023 = totalProjectMiles2023 + sportData[2023].projects[i].dist;
        totalProjectElev2023 = totalProjectElev2023 + sportData[2023].roadies[i].elev;
    }

    for (var i in sportData[2022].projects) {
        allProjects.push(sportData[2022].projects[i]);
        totalProjectMiles2022 = totalProjectMiles2022 + sportData[2022].projects[i].dist;
        totalProjectElev2022 = totalProjectElev2022 + sportData[2022].roadies[i].elev;
    }

    for (var i in sportData[2021].projects) {
        allProjects.push(sportData[2021].projects[i]);
        totalProjectMiles2021 = totalProjectMiles2021 + sportData[2021].projects[i].dist;
        totalProjectElev2021 = totalProjectElev2021 + sportData[2021].roadies[i].elev;
    }

    for (var i in sportData[2020].projects) {
        allProjects.push(sportData[2020].projects[i]);
        totalProjectMiles2020 = totalProjectMiles2020 + sportData[2020].projects[i].dist;
        totalProjectElev2020 = totalProjectElev2020 + sportData[2020].roadies[i].elev;
    }

    // Total Projects

    var totalProjects =
        totalProjects2023
        + totalProjects2022
        + totalProjects2021
        + totalProjects2020;

    // Total Project Miles

    var totalProjectMiles =
        totalProjectMiles2023
        + totalProjectMiles2022
        + totalProjectMiles2021
        + totalProjectMiles2020;

    totalProjectMiles = toMiles(totalProjectMiles);
    totalProjectMiles2023 = toMiles(totalProjectMiles2023);
    totalProjectMiles2022 = toMiles(totalProjectMiles2022);
    totalProjectMiles2021 = toMiles(totalProjectMiles2021);
    totalProjectMiles2020 = toMiles(totalProjectMiles2020);

    // Total Project Elevation


    // Return Values

    return {
        allProjects,
        totalProjectMiles,
        totalProjectMiles2023,
        totalProjectMiles2022,
        totalProjectMiles2021,
        totalProjectMiles2020
    };
};

export default compileProjects;