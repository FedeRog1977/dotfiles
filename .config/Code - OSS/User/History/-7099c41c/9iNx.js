export function add(accumulator) {
    // return accumulator + a;

    for (var i in accumulator) {
        var sum = accumulator[i] + accumulator[i];
    }
}