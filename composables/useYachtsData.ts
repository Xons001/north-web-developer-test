import { ref, onMounted } from "vue";
import { Yacht } from "../types/YachtTypes";

export function useYachtsData() {
  const yachts = ref<Yacht[]>([]);
  const error = ref<string | null>(null);
  const page = ref(1);
  const hasMoreYachts = ref(true);

  async function fetchYachts() {
    try {
      const response = await $fetch<{ data: Yacht[] }>(
        `/api/fetchYachtsData?page=${page.value}`
      );
      if (response.data.length > 0) {
        yachts.value.push(...response.data);
        page.value++;
      } else {
        hasMoreYachts.value = false;
      }
    } catch (e) {
      error.value = "Failed to fetch yachts";
    }
  }

  function fetchMoreYachts() {
    fetchYachts();
  }

  onMounted(fetchYachts);

  return { yachts, error, fetchMoreYachts, hasMoreYachts };
}
