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
  const colors = {
    primary: getValueFromLocalStorage("colors.primary")
      ? ref(getValueFromLocalStorage("colors.primary"))
      : ref("00695c"),
    secondary: getValueFromLocalStorage("colors.secondary")
      ? ref(getValueFromLocalStorage("colors.secondary"))
      : ref("#26a69a"),
  };

  //Actions
  const updateColors = (object) => {
    primary.value = object.primary.value;
    secondary.value = object.secondary.value;
    setValueToLocalStorage("primary", object.primary.value);
  };

  const toogleDarkMode = () => {};

  return {
    primary,
    secondary,
    iconColors,
    updateColors,
  };
});

/**
 *
 *  $primary: #00695c;
$secondary: #26a69a;
$accent: #9c27b0;
$dark: #1d1d1d;
$dark-page: #121212;
$positive: #7eb004;
$negative: #d73f01;
$info: #31ccec;
$warning: #f2c037;
$white : #FFF
 */
