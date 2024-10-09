import { defineStore } from "pinia";
import { fetchData } from "src/use/useFetchData";


import { ref, computed } from "vue";

export const useEntriesStore = defineStore("entries", () => {
  // État

  const entries = ref([]);
  const isLoading = ref(false);
  // Computed
  const balance = computed(() => {
    return entries.value.reduce((total, element) => total + element.amount, 0);
  });

  // Actions
  const loadData = async () => {
    isLoading.value = true;
    entries.value = await fetchData();
    isLoading.value = false;
    return entries;
  };


  loadData();


  
  const addEntry = (object) => {
    if (object.id && object.name && typeof object.amount === "number") {
      entries.value.push(object);
    } else {
      
      console.error("Invalid entry object:", object);
    }
  };



  const deleteEntry = (id) => {
   
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
