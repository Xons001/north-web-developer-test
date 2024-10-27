<template>
    <div>
        <div class="hidden md:flex justify-end">
            <ViewToggle @updateColumns="updateColumns" />
        </div>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <div v-else :class="`grid gap-4 sm:grid-cols-2 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-4'}`">
            <YachtCard v-for="yacht in yachts" :key="yacht.id" :yacht="yacht" />
        </div>

        <div v-if="hasMoreYachts" class="flex justify-center my-8">
            <button @click="fetchMoreYachts"
                class="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
                Load more
            </button>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useYachtsData } from '../composables/useYachtsData';
import YachtCard from './YachtCard.vue';
import ViewToggle from './ViewToggle.vue';

const { yachts, error, fetchMoreYachts, hasMoreYachts } = useYachtsData();
const columns = ref(4);

function updateColumns(newColumns: number) {
    columns.value = newColumns;
}
</script>
