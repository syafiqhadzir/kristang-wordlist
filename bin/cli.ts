#!/usr/bin/env node
import { cac } from 'cac';
import { getWordlist, hasWord } from '../src/index';
// @ts-ignore
import { version } from '../package.json';

const cli = cac('kristang-wordlist');

cli.command('search <term>', 'Search for words containing the term').action((term) => {
  const list = getWordlist();
  const results = list.filter((word) => word.toLowerCase().includes(term.toLowerCase()));

  if (results.length === 0) {
    console.log(`No words found containing "${term}".`);
    return;
  }

  console.log(`Found ${results.length} words:`);
  results.forEach((word) => console.log(`- ${word}`));
});

cli.command('random [count]', 'Get random words').action((count = 1) => {
  const list = getWordlist();
  const max = Math.min(count, list.length);
  const selected: string[] = [];

  // Simple random selection
  while (selected.length < max) {
    const randomIndex = Math.floor(Math.random() * list.length);
    const word = list[randomIndex];
    if (!selected.includes(word)) {
      selected.push(word);
    }
  }

  console.log(`Random ${max} words:`);
  selected.forEach((word) => console.log(`- ${word}`));
});

cli.help();
cli.version(version);

cli.parse();
