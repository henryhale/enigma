import type { Plugboard } from "./interface.ts";
import { generateMap, substitute } from "./util.ts";

/**
 * Function to create a plugboard and apply the customisations
 * from the `mods` array
 */
export function createPlugboard(mods: number[][] = []): Plugboard {
    const map = generateMap();
    mods.forEach(([k, v]) => {
        map[k] = v;
        map[v] = k;
    });
    return {
        get: (x: number, flag: boolean) => substitute(map, x, flag),
    };
}
