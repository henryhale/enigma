// Number of letters
export const size = 26;

// Unicode value of letter A
export const startPos = 65;

/**
 * Index to Character: 0 - A, 1 - B, ....
 *  
 * Function to convert an integer into its correponding Unicode character
 */
export function i2c(x: number) {
    return String.fromCharCode(startPos + x);
}

/**
 * Function to shift the values of an array to a particular
 * direction basing on the signed `steps` value
 *
 * Example:
 *  - shiftValues([1,2,3], 1) => [3,1,2]
 *  - shiftValues([1,2,3], -1) => [2,3,1]
 */
export function shiftValues(arr: number[] = [], steps = 0) {
    let i = 0,
        j = Math.abs(steps);
    while (i++ < j) {
        if (steps < 0) {
            arr.push(arr.shift()!);
        } else {
            arr.unshift(arr.pop()!);
        }
    }
    return arr;
}

/**
 * Function that create a list of numbers (0-25) shifted in a certain direction
 */
export function generateMap(shift = 0) {
    const result = [];
    let i = 0;
    while (i < size) result.push(i++);
    return shiftValues(result, shift);
}

/**
 * Function to that return an index of a value `x` if `encrypt` is false
 * otherwise return the corresponding value at the index `x`
 */
export function substitute(arr: number[], x: number, encrypt: boolean) {
    return !!encrypt ? arr[x] : arr.findIndex((v) => v === x);
}
