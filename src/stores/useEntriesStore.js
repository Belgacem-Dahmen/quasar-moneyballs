import { defineStore } from "pinia";
import {  fetchData} from "src/use/useFetchData";
import { useErrorNotification } from "src/use/useNotify";



import { ref, computed } from "vue";

export const useEntriesStore = defineStore("entries", () => {
  // État

  const entries = ref([]);
  const isLoading = ref(false)
  // Computed
  const balance = computed(() => {
    return entries.value.reduce((total, element) => total + element.amount, 0);
  });

  // Actions
const loadData = async () => {
    isLoading.value = true
    
   entries.value = await fetchData()
   isLoading.value = false
   
   return entries
}
loadData()
  const addEntry = (object) => {
    if (object.id && object.name && typeof object.amount === "number") {
      entries.value.push(object);
    } else {
      useErrorNotification('Invalid entry object');
      console.error("Invalid entry object:", object);
    }
  };

  // const findEntry = (id) => {
  //   // Use a simple return statement with the correct comparison
  //   return entries.value.find((entry) => entry.id === id);
  // };

  const deleteEntry = (id) => {
    // Use filter to return a new array excluding the entry with the given id
    entries.value = entries.value.filter((entry) => entry.id !== id);
  };

  return {
    entries,
    isLoading,
    balance,
    addEntry,
    deleteEntry,
  };
});
