<template>
  <div
    class="relative transition-transform transform hover:scale-105 border rounded-lg overflow-hidden shadow-lg group">
    <img :src="yacht.coverImage.url" :alt="yacht.name" class="w-full h-48 sm:h-64 object-cover" />
    <div class="p-3 sm:p-4">
      <p class="text-[#858585] font-medium text-xs sm:text-sm">
        Price: €{{ yacht.buyPrice?.EUR ? yacht.buyPrice.EUR.toLocaleString() : "Not available" }}
      </p>
      <p class="text-[#4E4E4E] text-xs mb-3 sm:mb-4">
        Length: {{ yacht.length.meters }}m | Guests: {{ yacht.guestsNumber || "N/A" }} | Cabins: {{ yacht.cabinsNumber
          || "N/A" }}
      </p>
      <div class="flex justify-between items-center">
        <p class="text-base sm:text-lg font-semibold text-[#091919]">{{ yacht.name || 'Yacht Name' }}</p>
        <button
          class="bg-[#0B2020] text-white py-1 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
          Enquiry
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Yacht } from '../types/YachtTypes';

const props = defineProps<{ yacht: Yacht }>();
</script>
