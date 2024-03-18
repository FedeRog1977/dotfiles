import { sportData } from "../../data/general/Sport";

const compileProjectMiles = () => {
    var totalProjectMiles2023 = 0;
    var totalProjectMiles2022 = 0;
    var totalProjectMiles2021 = 0;
    var totalProjectMiles2020 = 0;

    for (var i in sportData[2023].roadies) {
        totalProjectMiles2023 = totalProjectMiles2023 + sportData[2023].roadies[i].dist;
    }

    for (var i in sportData[2022].roadies) {
        totalProjectMiles2022 = totalProjectMiles2022 + sportData[2022].roadies[i].dist;
    }

    for (var i in sportData[2021].roadies) {
        totalProjectMiles2021 = totalProjectMiles2021 + sportData[2021].roadies[i].dist;
    }

    for (var i in sportData[2020].roadies) {
        totalProjectMiles2020 = totalProjectMiles2020 + sportData[2020].roadies[i].dist;
    }

    const totalRoadieMiles =
        totalProjectMiles2023
        + totalProjectMiles2022
        + totalProjectMiles2021
        + totalProjectMiles2020;

    return {
        totalRoadieMiles,
        totalRoadieMiles2023,
        totalRoadieMiles2022,
        totalRoadieMiles2021,
        totalRoadieMiles2020
    };
};

export default compileProjectMiles;