import { useEffect, useState } from "react";

export function toMiles(distance) {
    const distanceFormatted = distance.toLocaleString("en-UK") + 'miles';

    return distanceFormatted
}