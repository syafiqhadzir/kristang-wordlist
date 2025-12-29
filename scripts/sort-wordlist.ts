import * as fs from 'fs';
import * as path from 'path';

const WORDLIST_PATH = path.join(__dirname, '../mcm_MY.dic');
const JSON_OUTPUT_DIR = path.join(__dirname, '../src/generated');
const JSON_OUTPUT_PATH = path.join(JSON_OUTPUT_DIR, 'words.json');

async function sortWordlist() {
  try {
    const content = fs.readFileSync(WORDLIST_PATH, 'utf-8');
    const lines = content.split(/\r?\n/);

    // The first line is the count, likely formatted like "# 2892" or just "2892"
    // We'll extract comments if any, but standard hunspell usually is just the number.
    // However, the file viewed had "# 2892".

    // Filter out empty lines and the header line(s)
    const words = lines
      .slice(1) // Skip the first line which is the count
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.startsWith('#')); // Remove comments if any mid-file

    // Deduplicate
    const uniqueWords = Array.from(new Set(words));

    // Sort
    // Using simple localeCompare for now.
    uniqueWords.sort((a, b) => a.localeCompare(b, ['pt', 'ms', 'en']));

    const newCount = uniqueWords.length;
    const header = `# ${newCount}`;

    // Write DIC file
    const newContent = [header, ...uniqueWords].join('\n');
    if (content.trim() !== newContent.trim()) {
      fs.writeFileSync(WORDLIST_PATH, newContent + '\n', 'utf-8');
      console.log(`Wordlist updated. Count: ${newCount}`);
    } else {
      console.log('Wordlist is already sorted.');
    }

    // Write JSON file
    if (!fs.existsSync(JSON_OUTPUT_DIR)) {
        fs.mkdirSync(JSON_OUTPUT_DIR, { recursive: true });
    }
    fs.writeFileSync(JSON_OUTPUT_PATH, JSON.stringify(uniqueWords, null, 2), 'utf-8');
    console.log(`Generated JSON wordlist at ${JSON_OUTPUT_PATH}`);

  } catch (error) {
    console.error('Error processing wordlist:', error);
    process.exit(1);
  }
}

sortWordlist();
