import enigma from "./machine.ts";

enigma.setRotorPositions([2, 4, 6]);

const text1 = "HELLO WORLD!";

console.log(">>> encrypting...");

const cipher = enigma.encrypt(text1);

enigma.setRotorPositions([2, 4, 6]);

console.log(">>> decrypting...");

const text2 = enigma.decrypt(cipher);

console.log("Plain text 1: ", text1);
console.log("Cipher: ", cipher);
console.log("Plain text 2: ", text2);
