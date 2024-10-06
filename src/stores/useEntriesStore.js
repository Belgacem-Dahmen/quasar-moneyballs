import { defineStore } from "pinia";
import { ref } from "vue";

export const useEntriessStore = defineStore("entries", () => {
  // État
  const entries = ref([]);

  // Actions
  const addEntry = (object) => {
    entries.value.push(object.value);
  };
  const findEntry = (id) => {
    return entries.value.find((entry) => {
      entry.id === id.value;
    });
  };
  const deleteEntry = (id) => {
    return entries.value.filter((entry) => {
      return (entry.id = !id.value);
    });
  };

  return {
    entries,
    addEntry,
    findEntry,
    deleteEntry,
  };
});
