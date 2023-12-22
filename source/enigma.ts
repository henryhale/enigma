import type { Enigma, EnigmaConfig } from "./interface.ts";
import { createPlugboard } from "./plugboard.ts";
import { i2c, startPos, substitute } from "./util.ts";

/**
 * The default options when creating a new machine
 */
const defaultConfig: EnigmaConfig = {
    log: false,
    plugboard: [],
    rotors: [],
    reflector: [],
};

/**
 * Function that creates a new Enigma machine using the provided 
 * `config` object
 */
export function createEnigma(config: EnigmaConfig = defaultConfig): Enigma {
    // resolve to final configuration
    config = Object.assign({}, defaultConfig, config);

    // create a complete plugboard applying the modifications
    const plugboard = createPlugboard(config.plugboard);

    const { rotors, reflector, log } = config;

    // set rotor rotation: leftmost trigger rotation for the right neighbour
    rotors.reduce((x, r, i) => {
        if (!x) return r;
        x.oncycle = () => r.rotate();
        if (log) console.log("rotor: ", i - 1, "=>", i);
        return r;
    });

    // function to transform a character through the pipeline
    function transformCharacter(char = "", encrypt = true) {
        char = char.toUpperCase();

        // only letters - ignore other characters
        if (!/^[A-Z]$/.test(char)) return char;

        // compute unicode value for the input character
        const input = char.charCodeAt(0) - startPos;

        // [1] plugboard
        const output1 = plugboard.get(input, encrypt);
        if (log) console.log("<<input>> {p} ", i2c(input), "=>", i2c(output1));

        // [2] rotate the leftmost rotor
        rotors[0].rotate();

        // [3] rotors
        const output2 = rotors.reduce((x, r, i) => {
            const result = r.get(x, encrypt);
            if (log) console.log(`[${i}] ${i2c(x)} => ${i2c(result)} `);
            return result;
        }, output1);

        // [4] reflector
        const output3 = substitute(reflector, output2, encrypt);
        if (log) console.log("ref: ", i2c(output2), "=>", i2c(output3));

        // [5] rotors (in reverse order)
        const output4 = rotors.reduceRight((x, r, i) => {
            const result = r.get(x, encrypt);
            if (log) console.log(`[${i}] ${i2c(x)} => ${i2c(result)} `);
            return result;
        }, output3);

        // [6] plugboard
        const output5 = plugboard.get(output4, encrypt);
        if (log) console.log("<<output>> {p} ", i2c(output4), "=>", i2c(output5));

        // convert output unicode value into character
        return i2c(output5);
    }

    // function to transform a string one character at a time
    function transform(str: string, flag: boolean) {
        return str
            .split("")
            .map((char) => transformCharacter(char, flag))
            .join("");
    }

    return {
        encrypt: (text: string) => transform(text, true),

        setRotorPositions(positions: number[]) {
            rotors.forEach((r, i) => r.setIndex(positions[i]));
        },

        decrypt: (cipher: string) => transform(cipher, false)
    };
}
