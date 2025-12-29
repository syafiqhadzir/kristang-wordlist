<script setup>
import { ref, computed } from 'vue';
import words from '../../src/generated/words.json';

const searchTerm = ref('');

const filteredWords = computed(() => {
  if (!searchTerm.value) return [];
  const term = searchTerm.value.toLowerCase();
  return words.filter((w) => w.toLowerCase().includes(term)).slice(0, 50);
});
</script>

<template>
  <div class="word-search">
    <input v-model="searchTerm" placeholder="Type a word..." class="search-input" />

    <div v-if="searchTerm" class="results">
      <p v-if="filteredWords.length === 0">No matches found.</p>
      <ul v-else>
        <li v-for="word in filteredWords" :key="word">{{ word }}</li>
        <li
          v-if="words.filter((w) => w.toLowerCase().includes(searchTerm.toLowerCase())).length > 50"
        >
          ...and more
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.search-input {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 1.2rem;
  margin: 1rem 0;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
}

.results ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.results li {
  padding: 8px 12px;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
}
</style>
