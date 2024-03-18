export function sum(accumulator) {
    for (var i in accumulator) {
        var sum = accumulator[i] + accumulator[i];
    }

    return sum;
}