import words from './generated/words.json';

/**
 * Returns the entire Kristang wordlist as an array of strings.
 */
export function getWordlist(): string[] {
  return words;
}

/**
 * Checks if a word exists in the Kristang wordlist.
 * Case-insensitive check is optional (default: strict).
 */
export function hasWord(word: string, ignoreCase = false): boolean {
  if (ignoreCase) {
    const lowerWord = word.toLowerCase();
    return words.some((w) => w.toLowerCase() === lowerWord);
  }
  return words.includes(word);
}

export { words };
export default words;
