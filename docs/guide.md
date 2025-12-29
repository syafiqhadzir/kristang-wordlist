# Introduction

**Kristang** is a critically endangered creole language spoken by the Kristang people of Malacca, Malaysia, and Singapore. It is based on Portuguese with a significant influence from Malay and other local dialects.

This project aims to digitize the Kristang vocabulary to ensure its preservation and accessibility for future generations.

## Installation

You can use this wordlist in your own JavaScript/TypeScript projects.

```bash
npm install kristang-wordlist
```

## Usage

### As a Library

```typescript
import { getWordlist, hasWord } from 'kristang-wordlist';

const allWords = getWordlist();
console.log(allWords.length); // 2900+

if (hasWord('bong')) {
  console.log('Bong is a valid word!');
}
```

### As a CLI

```bash
npx kristang-wordlist search 'bong'
npx kristang-wordlist random 5
```
