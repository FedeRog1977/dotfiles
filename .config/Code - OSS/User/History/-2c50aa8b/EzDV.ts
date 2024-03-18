import { sportData } from "../../data/general/Sport";

const compileRoadieMiles = () => {
    var totalRoadieMiles2023 = 0;
    var totalRoadieMiles2022 = 0;
    var totalRoadieMiles2021 = 0;
    var totalRoadieMiles2020 = 0;

    for (var i in sportData[2023].roadies) {
        totalRoadieMiles2023 = totalRoadieMiles2023 + sportData[2023].roadies[i].dist;
    }

    for (var i in sportData[2022].roadies) {
        totalRoadieMiles2022 = totalRoadieMiles2022 + sportData[2022].roadies[i].dist;
    }

    for (var i in sportData[2021].roadies) {
        totalRoadieMiles2021 = totalRoadieMiles2021 + sportData[2021].roadies[i].dist;
    }

    for (var i in sportData[2020].roadies) {
        totalRoadieMiles2020 = totalRoadieMiles2020 + sportData[2020].roadies[i].dist;
    }

    const totalRoadieMiles =
        totalRoadieMiles2023
        + totalRoadieMiles2022
        + totalRoadieMiles2021
        + totalRoadieMiles2020;

    return {
        totalRoadieMiles,
        totalRoadieMiles2023,
        totalRoadieMiles2022,
        totalRoadieMiles2021,
        totalRoadieMiles2020
    };
};