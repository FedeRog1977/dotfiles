import { sportData } from "../../data/general/Sport";

const compileRoadieMiles = () => {
    var totalMilesMiles2023 = 0;
    var totalMilesMiles2022 = 0;
    var totalMilesMiles2021 = 0;
    var totalMilesMiles2020 = 0;

    for (var i in sportData[2023].roadies) {
        totalMilesMiles2023 = totalMilesMiles2023 + sportData[2023].roadies[i].dist;
    }

    for (var i in sportData[2022].roadies) {
        totalMilesMiles2022 = totalMilesMiles2022 + sportData[2022].roadies[i].dist;
    }

    for (var i in sportData[2021].roadies) {
        totalMilesMiles2021 = totalMilesMiles2021 + sportData[2021].roadies[i].dist;
    }

    for (var i in sportData[2020].roadies) {
        totalMilesMiles2020 = totalMilesMiles2020 + sportData[2020].roadies[i].dist;
    }

    const totalRoadieMiles =
        totalMilesMiles2023
        + totalMilesMiles2022
        + totalMilesMiles2021
        + totalMilesMiles2020;

    return {
        totalMilesMiles,
        totalMilesMiles2023,
        totalMilesMiles2022,
        totalMilesMiles2021,
        totalMilesMiles2020
    };
};

export default compileRoadieMiles;