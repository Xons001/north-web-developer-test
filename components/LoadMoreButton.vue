<template>
  <button @click="loadMore"
    class="w-full sm:w-auto bg-white text-gray-700 border border-gray-300 rounded-md px-4 py-2 mt-6 hover:bg-gray-100">
    Load more
  </button>
</template>


<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits<{ (e: 'loadMore'): void }>();

function loadMore() {
  emit('loadMore');
}
</script>