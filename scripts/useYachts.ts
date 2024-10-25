import { ref, onMounted } from "vue";
import { Yacht } from "../types/YachtTypes";

export function useYachts() {
  const yachts = ref<Yacht[]>([]);
  const error = ref<string | null>(null);

  onMounted(async () => {
    try {
      const response = await fetch("/api/yachts");
      console.log(response);
      
      //yachts.value = response.data;
    } catch (e) {
      error.value = "Failed to fetch yachts";
    }
  });

  return { yachts, error };
}