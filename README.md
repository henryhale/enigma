<div align=center>

<img width=60 src=https://upload.wikimedia.org/wikipedia/commons/3/37/Enigma-logo.svg>

# enigma

_The World War II's cryptic game-changer, a mechanical marvel of secrecy and encryption_

</div>

## Overview

This repository features a TypeScript simulation of the iconic Enigma machine — _an encryption device used by the German military during World War II._

Having watched [The Imitation Game](http://theimitationgamemovie.com/) movie with prior understanding of cryptography, I decided to challenge myself into creating a simulation of the basic functionality of the original Enigma machines. Then later try to break it just like Alan Turing and his collegues did.

Now the first step is done 🎉

The rest of this document tells what I found out and provides a guide to run the simulation on your computer.

## How it Works

The Enigma machine consisted of rotors, reflector, plugboard and a keyboard.
Each key press initiated a complex encryption process involving the rotation of rotors and the reflection of signals.
Its daily-changing settings posed a significant challenge to Allied codebreakers.

The process of transforming an input character involves a sequence of steps through various components, including the plugboard, rotors, reflector, and plugboard again before reaching the lampboard.
Here's a brief description of the transformation pipeline:

1. **Plugboard:**

   - The input character enters the plugboard, where initial letter swaps occur. Pairs of letters are connected, providing an additional layer of complexity to the encryption.

2. **Rotors:**

   - The character then passes through a series of rotors, each with its own internal wiring. As the rotors rotate with each keypress, the electrical signal is further scrambled through these intricate pathways.

3. **Reflector:**

   - After passing through the rotors, the signal is directed to the reflector. The reflector ensures that the signal is then sent back through the rotors in a different path, contributing to the complexity of the encryption.

4. **Rotors (again):**

   - The signal, now reflected, passes through the rotors again in the reverse direction. This double-pass through the rotors adds a crucial non-linearity to the encryption process.

5. **Plugboard (again):**

   - The signal re-enters the plugboard for a second letter swap. This final permutation provides an additional layer of complexity to the output.

6. **Lampboard:**
   - The transformed signal finally reaches the lampboard, where the illuminated letter represents the encrypted output. This letter corresponds to the final encrypted character.

The transformation process involves a carefully orchestrated series of steps through various components, creating a highly secure and dynamic encryption process during each keypress.

## Getting Started

Follow these steps to set up and run the Enigma machine simulation on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/henryhale/enigma.git
   ```

2. Navigate to the project directory:

   ```bash
   cd enigma
   ```

3. Install dependencies:

   ```bash
   npm install
   # pnpm install
   ```

## Usage

Run the provided example script to witness the Enigma machine in action:

- Node.js

  ```bash
  npm run simulate
  # pnpm simulate
  ```

- Browser

  ```bash
  npm run dev
  # pnpm dev
  ```

Explore the script to create your own scenarios and delve into different Enigma machine configurations.

To build the simulation for production, run the provided command

```bash
npm run build
# pnpm build
```

## Structure

- [source/](./source/): Implementation of the Enigma machine, rotors, plugboard and reflector.
- [demo/simulate.ts](./demo/simulate.ts): Example script for Node.js.
- [demo/browser.ts](./demo/browser.ts): Example script for the browser (with [index.html](./index.html))

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or create a pull request.

## References

- How did the Enigma work? [Youtube Video](https://youtu.be/ybkkiGtJmkM)
- The Imitation Game (2014) - [Film](http://theimitationgamemovie.com/)
- Enigma Machine - [Wikipedia article](https://en.wikipedia.org/wiki/Enigma_machine)
- The Enigma Machine - [Crypto Museum](https://www.cryptomuseum.com/crypto/enigma/)
- _Enigma: The Battle for the Code_ by Hugh Sebag-Montefiore

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.

Copyright &copy; 2023 [Henry Hale](https://github.com/henryhale)
