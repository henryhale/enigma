import "./style.css";

import Alpine from "alpinejs";
import enigma from "./machine";

// Number of letters
const size = 26;

// Unicode value of letter A
const startPos = 65;

// Operation mode
const MODE = {
    ENCRYPT: "0", // encryption
    DECRYPT: "1", // decryption
};

// define app state
Alpine.data("app", () => ({
    positions: [0, 0, 0],

    mode: MODE.ENCRYPT,

    // qwerty keyboard layout
    keys: ["QWERTYUIOP".split(""), "ASDFGHJKL".split(""), "ZXCVBNM".split("")],

    key: null,

    input: "",

    output: "",

    init() {
        /**
         * Transform the input whenever it changes
         */
        this.$watch("input", (n: string) => {
            enigma.setRotorPositions(this.positions);
            let result: string;
            if (this.mode == MODE.ENCRYPT) {
                result = enigma.decrypt(n);
            } else {
                result = enigma.encrypt(n);
            }
            this.key = result.substring(this.output.length);
            setTimeout(() => (this.key = null), 500);
            this.output = result;
        });
    },

    // function to modify a specific rotor position
    increment(index: number, value: number, step: number) {
        this.positions[index] = (size + value + step) % size;
        this.input = "";
    },

    // convert a unicode number into a character
    toChar(position: number) {
        return String.fromCharCode(startPos + ((size + position) % size));
    },
}));

window.queueMicrotask(() => Alpine.start());
