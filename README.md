# Kristang (Malacca Creole Portuguese) Wordlist

![CI](https://github.com/SyafiqHadzir/kristang-wordlist/workflows/CI/badge.svg)
![License](https://img.shields.io/github/license/SyafiqHadzir/kristang-wordlist)

A comprehensive wordlist for Kristang (Malacca Creole Portuguese), now modernised as a high-performance TypeScript library.

## Usage

### As a Library

Install via npm:

```bash
npm install kristang-wordlist
```

Use in your project (ESM or CJS):

```typescript
import { getWordlist, hasWord } from 'kristang-wordlist';

const words = getWordlist();
console.log(hasWord('aboh')); // true
```

### via CLI

If installed globally or via `npx`:

```bash
# Search for words
npx kristang-wordlist search bong

# Get random words
npx kristang-wordlist random 5
```

### Hunspell Format

The raw dictionary is also provided for Hunspell-compatible applications:

- Dictionary: `mcm_MY.dic`
- Affix: `mcm_MY.aff`

## Development

This repository uses modern, bleeding-edge tooling (ESM-only, TS 5.9+, ESLint 9 Flat Config).

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Setup

```bash
npm install
```

### Scripts

- `npm run sort`: Sorts the wordlist, removes duplicates, and updates the word count (using `tsx`).
- `npm run lint`: Performs strict type-checked linting using ESLint 9 Flat Config.
- `npm run check-format`: Checks if files are formatted correctly.
- `npm run format`: Formats all files using Prettier.
- `npm run build`: Compiles the library into dual ESM/CJS outputs.
- `npm test`: Runs integration tests via Vitest.

### Formatting Rules

We use a strict sorting order for the wordlist to ensure consistency. Please run `npm run sort` before committing any changes to the dictionary file.

## References

- Pacific Linguistics Dictionary of Kristang

## License

Copyright (C) 2023 SyafiqHadzir

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

See the [LICENSE](LICENSE) file for more details.

## Contact

Syafiq Hadzir - [@syafiqhadzir\_](https://twitter.com/syafiqhadzir_) - inquiry@syafiqhadzir.dev

Project Link: <https://github.com/SyafiqHadzir/kristang-wordlist>
