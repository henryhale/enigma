import { createEnigma, createRotor } from "../source/index.ts";

/**
 * Rotors
 */
const rotor1 = createRotor(
    /**
     * index - value | mapping
     * 0 - 4    |   A - E
     * 1 - 10   |   B - K
     * ...      |   ...
     */
    [
        4, 10, 12, 5, 11, 6, 3, 16, 21, 25, 13, 19, 14, 22, 24, 7, 23, 20, 18, 15,
        0, 8, 1, 17, 2, 9,
    ],

    /**
     * Turnover or Notch index
     * - The value which when reached marks a complete rotor cycle
     */
    16
);

const rotor2 = createRotor(
    [
        0, 9, 3, 10, 18, 8, 17, 20, 23, 1, 11, 7, 22, 19, 12, 2, 16, 6, 25, 13, 15,
        24, 5, 21, 14, 4,
    ],
    4
);

const rotor3 = createRotor(
    [
        1, 3, 5, 7, 9, 11, 2, 15, 17, 19, 23, 21, 25, 13, 24, 4, 8, 22, 6, 0, 10,
        12, 20, 18, 16, 14,
    ],
    21
);

/**
 * Reflector: maps a value back into another but not itself
 */
const reflector = [
    24, 17, 20, 7, 16, 18, 11, 3, 15, 23, 13, 6, 14, 10, 12, 8, 4, 1, 5, 25, 2,
    22, 21, 9, 19, 0,
];

/**
 * Plugboard: optionally change a value into another
 */
const plugboard = [
    [1, 4],
    [23, 17],
    [16, 19],
    [9, 5],
    [20, 12],
];

/**
 * The Enigma Machine
 */
const enigma = createEnigma({
    log: true, // turns on logging
    plugboard,
    rotors: [rotor1, rotor2, rotor3], // change to desired order
    reflector,
});

export default enigma;
