<template>
  <div>
    <h1>Yachts for Sale</h1>
    <div v-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="yacht in yachts" :key="yacht.id">
        {{ yacht?.name || 'Name not available' }} - 
        {{ yacht?.buyPrice?.EUR || 'Price not available' }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useYachtsData } from './composables/useYachtsData';

const { yachts, error } = useYachtsData();
</script>
