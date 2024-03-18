import { sportData } from "../../data/general/Sport";
import { toMiles } from "../formatters/toMiles";

const compileMilesMiles = () => {
    const allMiles: any[] = [];

    var totalMilesMiles2023: any = 0;
    var totalMilesMiles2022: any = 0;
    var totalMilesMiles2021: any = 0;
    var totalMilesMiles2020: any = 0;

    for (var i in sportData[2023].miles) {
        allMiles.push(sportData[2023].miles[i]);
        totalMilesMiles2023 = totalMilesMiles2023 + sportData[2023].miles[i].dist;
    }

    for (var i in sportData[2022].miles) {
        allMiles.push(sportData[2022].miles[i]);
        totalMilesMiles2022 = totalMilesMiles2022 + sportData[2022].miles[i].dist;
    }

    for (var i in sportData[2021].miles) {
        allMiles.push(sportData[2021].miles[i]);
        totalMilesMiles2021 = totalMilesMiles2021 + sportData[2021].miles[i].dist;
    }

    for (var i in sportData[2020].miles) {
        allMiles.push(sportData[2020].miles[i]);
        totalMilesMiles2020 = totalMilesMiles2020 + sportData[2020].miles[i].dist;
    }

    var totalMilesMiles =
        totalMilesMiles2023
        + totalMilesMiles2022
        + totalMilesMiles2021
        + totalMilesMiles2020;

    totalMilesMiles = toMiles(totalMilesMiles);
    totalMilesMiles2023 = toMiles(totalMilesMiles2023);
    totalMilesMiles2022 = toMiles(totalMilesMiles2022);
    totalMilesMiles2021 = toMiles(totalMilesMiles2021);
    totalMilesMiles2020 = toMiles(totalMilesMiles2020);

    return {
        allMiles,
        totalMilesMiles,
        totalMilesMiles2023,
        totalMilesMiles2022,
        totalMilesMiles2021,
        totalMilesMiles2020
    };
};

export default compileMilesMiles;