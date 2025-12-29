import * as fs from 'fs';
import * as path from 'path';

const WORDLIST_PATH = path.join(import.meta.dirname, '../mcm_MY.dic');
const JSON_OUTPUT_DIR = path.join(import.meta.dirname, '../src/generated');
const JSON_OUTPUT_PATH = path.join(JSON_OUTPUT_DIR, 'words.json');

function sortWordlist() {
  try {
    if (!fs.existsSync(WORDLIST_PATH)) {
      throw new Error(`Wordlist not found at ${WORDLIST_PATH}`);
    }

    const content = fs.readFileSync(WORDLIST_PATH, 'utf-8');
    const lines = content.split(/\r?\n/);

    if (lines.length === 0) {
      console.warn('Wordlist is empty.');
      return;
    }

    // Standard Hunspell DIC: first line is word count.
    // We filter out the header and comments.
    const words = lines
      .slice(1)
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.startsWith('#'));

    const uniqueWords = [...new Set(words)];

    // Sort with specific locale priority
    uniqueWords.sort((a, b) => a.localeCompare(b, ['pt', 'ms', 'en'], { sensitivity: 'base' }));

    const newCount = uniqueWords.length;
    const header = `${newCount}`; // Pure number is standard for .dic

    const newContent = [header, ...uniqueWords].join('\n') + '\n';

    if (content !== newContent) {
      fs.writeFileSync(WORDLIST_PATH, newContent, 'utf-8');
      console.log(`✅ Wordlist sorted. Total words: ${newCount}`);
    } else {
      console.log('ℹ️ Wordlist is already sorted.');
    }

    // Ensure output directory exists before writing JSON
    if (!fs.existsSync(JSON_OUTPUT_DIR)) {
      fs.mkdirSync(JSON_OUTPUT_DIR, { recursive: true });
    }

    fs.writeFileSync(JSON_OUTPUT_PATH, JSON.stringify(uniqueWords, null, 2), 'utf-8');
    console.log(`📦 JSON wordlist generated: ${JSON_OUTPUT_PATH}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`❌ Error processing wordlist: ${message}`);
    process.exit(1);
  }
}

sortWordlist();
