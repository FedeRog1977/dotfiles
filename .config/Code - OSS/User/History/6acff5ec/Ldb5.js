export function toMiles(distance) {
    const distanceFormatted =
        distance.toLocaleString("en-UK", { maximumFractionDigits: 2 }) + 'mi';

    return distanceFormatted;
}