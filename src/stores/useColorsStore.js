import { defineStore } from "pinia";
import { ref } from "vue";
import {
  getValueFromLocalStorage,
  setValueToLocalStorage,
} from "src/use/useLocalStorage";

export const useColorsStore = defineStore("colors", () => {
  // État
  const primary = getValueFromLocalStorage("primary")
    ? ref(getValueFromLocalStorage("primary"))
    : ref("#414569");
  const secondary = getValueFromLocalStorage("secondary")
    ? ref(getValueFromLocalStorage("secondary"))
    : ref("#26a69a");
  const iconColors = ref(primary);

  //Actions
  const updateColors = (object) => {
    primary.value = object.primary.value;
    secondary.value = object.secondary.value;
    setValueToLocalStorage("primary", object.primary.value);
  };

  return {
    primary,
    secondary,
    iconColors,
    updateColors,
  };
});

