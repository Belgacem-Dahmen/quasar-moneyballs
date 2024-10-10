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

  // Action pour charger les entrées
  const loadData = async () => {
    try {
      const data = await fetchData();
      entries.value = data;
    } catch (error) {
      console.error("Erreur lors du chargement des entrées : ", error);
    }
  };

  const addEntry = async (object) => {
    if (object.id && object.name && typeof object.amount === "number") {
      await insertData(object);
      loadData();
      useSuccessNotification("entrée ajoutée avec succés");
    } else {
      console.error("Invalid entry object:", object);
    }
  };

  const deleteEntry = async (id) => {
    await deleteData(id);
    await loadData();
    useSuccessNotification("entrée supprimée avec succés");
  };

  return {
    entries,
    isLoading,
    balance,
    addEntry,
    deleteEntry,
    loadData,
  };
});
