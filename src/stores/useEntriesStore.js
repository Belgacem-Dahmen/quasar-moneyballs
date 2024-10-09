import { defineStore } from "pinia";
import { deleteData, fetchData, insertData } from "src/use/useFetchData";
import { useSuccessNotification } from "src/use/useNotify";

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
    let data = await fetchData();
    entries.value = data;
    isLoading.value = false;
  };

  loadData();
  const addEntry = async (object) => {
    if (object.id && object.name && typeof object.amount === "number") {
      await insertData(object);
      useSuccessNotification("entrée ajoutée avec succés");
    } else {
      console.error("Invalid entry object:", object);
    }
  };

  const deleteEntry = (id) => {
    deleteData(id);
    useSuccessNotification("entrée supprimée avec succés");
  };

  return {
    entries,
    isLoading,
    balance,
    addEntry,
    deleteEntry,
  };
});
