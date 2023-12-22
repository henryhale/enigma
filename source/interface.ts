/**
 * Type declarations
 * by Henry Hale (https://github.com/henryhale)
 */
export type Rotor = {
    setIndex: (n: number) => void;
    get: (x: number, flag: boolean) => number;
    rotate: () => void;
    oncycle: () => void;
};

export type Plugboard = {
    get: (x: number, flag: boolean) => number;
};

export type EnigmaConfig = {
    log?: boolean;
    plugboard: number[][];
    rotors: Rotor[];
    reflector: number[];
};

export type Enigma = {
    encrypt: (text: string) => string;
    setRotorPositions(positions: number[]): void;
    decrypt: (cipher: string) => string;
};
