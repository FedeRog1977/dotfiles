import { sportData } from "../../data/general/Sport";
import { toFeet } from "../formatters/toFeet";
import { toMiles } from "../formatters/toMiles";

const compileRoadies = () => {
    const roadies: any[] = [];
    roadies.push({
        2023: sportData[2023].roadies,
        2022: sportData[2022].roadies,
        2021: sportData[2021].roadies,
        2020: sportData[2020].roadies
    });

    const roadiesN: any[] = [];
    roadiesN.push({
        all: (
            sportData[2023].roadies.length
            + sportData[2022].roadies.length
            + sportData[2021].roadies.length
            + sportData[2020].roadies.length
        ),
        2023: sportData[2023].roadies.length,
        2022: sportData[2022].roadies.length,
        2021: sportData[2021].roadies.length,
        2020: sportData[2020].roadies.length
    });

    var totalRoadieMiles2023: any = 0;
    var totalRoadieMiles2022: any = 0;
    var totalRoadieMiles2021: any = 0;
    var totalRoadieMiles2020: any = 0;

    var totalRoadieElev2023: any = 0;
    var totalRoadieElev2022: any = 0;
    var totalRoadieElev2021: any = 0;
    var totalRoadieElev2020: any = 0;

    for (var i in sportData[2023].roadies) {
        totalRoadieMiles2023 = totalRoadieMiles2023 + sportData[2023].roadies[i].dist;
        totalRoadieElev2023 = totalRoadieElev2023 + sportData[2023].roadies[i].elev;
    }

    for (var i in sportData[2022].roadies) {
        totalRoadieMiles2022 = totalRoadieMiles2022 + sportData[2022].roadies[i].dist;
        totalRoadieElev2022 = totalRoadieElev2022 + sportData[2022].roadies[i].elev;
    }

    for (var i in sportData[2021].roadies) {
        totalRoadieMiles2021 = totalRoadieMiles2021 + sportData[2021].roadies[i].dist;
        totalRoadieElev2021 = totalRoadieElev2021 + sportData[2021].roadies[i].elev;
    }

    for (var i in sportData[2020].roadies) {
        totalRoadieMiles2020 = totalRoadieMiles2020 + sportData[2020].roadies[i].dist;
        totalRoadieElev2020 = totalRoadieElev2020 + sportData[2020].roadies[i].elev;
    }

    // Total Roadie Miles

    var totalRoadieMiles =
        totalRoadieMiles2023
        + totalRoadieMiles2022
        + totalRoadieMiles2021
        + totalRoadieMiles2020;

    totalRoadieMiles = toMiles(totalRoadieMiles);
    totalRoadieMiles2023 = toMiles(totalRoadieMiles2023);
    totalRoadieMiles2022 = toMiles(totalRoadieMiles2022);
    totalRoadieMiles2021 = toMiles(totalRoadieMiles2021);
    totalRoadieMiles2020 = toMiles(totalRoadieMiles2020);

    // Total Roadie Elevation

    var totalRoadieElev =
        totalRoadieElev2023
        + totalRoadieElev2022
        + totalRoadieElev2021
        + totalRoadieElev2020;

    totalRoadieElev = toFeet(totalRoadieElev);
    totalRoadieElev2023 = toFeet(totalRoadieElev2023);
    totalRoadieElev2022 = toFeet(totalRoadieElev2022);
    totalRoadieElev2021 = toFeet(totalRoadieElev2021);
    totalRoadieElev2020 = toFeet(totalRoadieElev2020);

    console.log(
        'Roadies:\n\n',
        roadies,
        'Number of Roadies:\n\n',
        roadiesN
    );

    // Return Values

    return {
        roadies,
        roadiesN,
        totalRoadieMiles,
        totalRoadieMiles2023,
        totalRoadieMiles2022,
        totalRoadieMiles2021,
        totalRoadieMiles2020,
        totalRoadieElev,
        totalRoadieElev2023,
        totalRoadieElev2022,
        totalRoadieElev2021,
        totalRoadieElev2020
    };
};

export default compileRoadies;