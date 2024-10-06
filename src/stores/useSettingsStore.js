import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore("settings", () => {
  // État
  const name = ref("");
  const age = ref();
  const accept = ref(false);

  // Actions
  const updateSettings = (object) => {
    name.value = object.name.value;
    age.value = object.age.value;
    accept.value = object.accept;
  };

  return {
    name,
    age,
    accept,
    updateSettings,
  };
});
