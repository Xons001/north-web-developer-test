<template>
    <div v-if="error">{{ error }}</div>
    <ul v-else>
        <li v-for="yacht in yachts" :key="yacht.id">
            {{ yacht.name }} - Price: {{ yacht.buyPrice ? yacht.buyPrice.EUR : 'Not available' }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useYachtsData } from '../composables/useYachtsData';

const { yachts, error } = useYachtsData();
</script>