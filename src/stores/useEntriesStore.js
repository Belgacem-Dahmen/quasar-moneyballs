import { defineStore } from "pinia";
import { ref,computed } from "vue";

export const useEntriesStore = defineStore("entries", () => {
  // État
 
  const entries = ref([
    {
      id: 1,
      name: "Salary-store",
      amount: 1700.99,
    },
    {
      id: 2,
      name: "Rent-store",
      amount: 680.88,
    },
    {
      id: 3,
      name: "Parking-store",
      amount: -50.0,
    },
    {
      id: 4,
      name: "Facture STEG -store",
      amount: -22,
    },
  ]);

  // Actions
  const addEntry = (object) => {
    // Ensure the object has an id, name, and amount before pushing it to entries
    if (object.id && object.name && typeof object.amount === "number") {
      entries.value.push(object);
    } else {
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

   const balance = computed(() => {
    return entries.value.reduce((total, element) => total + element.amount, 0);
  });

  return {
    entries,
    balance,
    addEntry,
    deleteEntry,
  };
});
