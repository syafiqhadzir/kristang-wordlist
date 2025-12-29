import { describe, it, expect } from 'vitest';
import { getWordlist, hasWord } from '../src/index.js';

describe('Kristang Wordlist', () => {
  it('should return an array of words', () => {
    const list = getWordlist();
    expect(Array.isArray(list)).toBe(true);
    expect(list.length).toBeGreaterThan(0);
  });

  it('should find known words', () => {
    // "bong" is likely in the list
    // We can't be 100% sure unless we checked the file, but let's assume 'bong' or 'boka'.
    // Let's check for 'aboh' which was in the start of the file we saw earlier.
    expect(hasWord('aboh')).toBe(true);
  });

  it('should return false for unknown words', () => {
    expect(hasWord('xyz123notaword')).toBe(false);
  });

  it('should handle case insensitivity', () => {
    // 'Aboh' vs 'aboh'
    expect(hasWord('ABOH', true)).toBe(true);
  });
});
