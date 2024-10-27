<template>
    <div class="flex justify-end items-center space-x-2 sm:space-x-3 text-sm sm:text-base">
        <span class="text-gray-700">View</span>

        <button @click="setGridColumns(4)"
            :class="`p-2 rounded-md ${columns === 4 ? 'text-gray-700' : 'text-gray-400'}`">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5"
                :fill="columns === 4 ? 'black' : 'currentColor'" viewBox="0 0 20 20">
                <rect x="3" y="4" width="4" height="6"></rect>
                <rect x="8" y="4" width="4" height="6"></rect>
                <rect x="3" y="11" width="4" height="6"></rect>
                <rect x="8" y="11" width="4" height="6"></rect>
            </svg>
        </button>

        <button @click="setGridColumns(2)"
            :class="`p-2 rounded-md ${columns === 2 ? 'text-gray-700' : 'text-gray-400'}`">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5"
                :fill="columns === 2 ? 'black' : 'currentColor'" viewBox="0 0 20 20">
                <rect x="3" y="4" width="6" height="12"></rect>
                <rect x="11" y="4" width="6" height="12"></rect>
            </svg>
        </button>
    </div>
</template>


<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits<{ (e: 'updateColumns', columns: number): void }>();

const columns = ref(4);

function setGridColumns(num: number) {
    columns.value = num;
    emit('updateColumns', num);
}
</script>
