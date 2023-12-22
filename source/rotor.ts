import type { Rotor } from "./interface.ts";
import { shiftValues, size, substitute } from "./util.ts";

/**
 * Function to create a rotor from a list (`map`) of codes specifying the
 * `notch` index
 *
 * A full cycle occurs when the _current rotor index_ is equal to the `notch` index
 */
export function createRotor(map: number[] = [], notch = size - 1): Rotor {
    const original = map.slice();
    let id: number;
    let onCycleCallback: () => void;

    // function to rotate the rotor map
    function setIndex(n: number) {
        id = n % (size - 1);
        map = shiftValues(original.slice(), id);
        if (id === notch) onCycleCallback?.call(undefined);
    }

    return {
        setIndex,
        get: (x: number, flag: boolean) => substitute(map, x, flag),
        rotate: () => setIndex(id + 1),
        set oncycle(fn: () => void) {
            onCycleCallback = fn;
        },
    };
}
