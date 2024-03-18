import { sportData } from "../../data/general/Sport";

const compileMilesMiles = () => {
    var totalMilesMiles2023 = 0;
    var totalMilesMiles2022 = 0;
    var totalMilesMiles2021 = 0;
    var totalMilesMiles2020 = 0;

    for (var i in sportData[2023].miles) {
        totalMilesMiles2023 = totalMilesMiles2023 + sportData[2023].miles[i].dist;
    }

    for (var i in sportData[2022].miles) {
        totalMilesMiles2022 = totalMilesMiles2022 + sportData[2022].miles[i].dist;
    }

    for (var i in sportData[2021].miles) {
        totalMilesMiles2021 = totalMilesMiles2021 + sportData[2021].miles[i].dist;
    }

    for (var i in sportData[2020].miles) {
        totalMilesMiles2020 = totalMilesMiles2020 + sportData[2020].miles[i].dist;
    }

    const totalMilesMiles =
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

export default compileMilesMiles;