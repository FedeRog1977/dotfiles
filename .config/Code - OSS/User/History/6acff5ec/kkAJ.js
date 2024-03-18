export function toMiles(distance) {
    const distanceFormatted =
        distance.toFixed(
            // "en-UK",
            { minimumFractionDigits: 2 }
        ) + 'mi';

    return distanceFormatted;
}