export function toFeet(elevation) {
    const elevationFormatted =
        elevation.toFixed(0).toLocaleString("en-UK") + 'ft';

    return elevationFormatted;
}