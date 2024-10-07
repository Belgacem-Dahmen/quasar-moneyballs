import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppSettingsStore = defineStore("app", () => {
  // État
    const currency = ref("dollar");
    const currencyOptions =  ref(["dollar","Euro","dinars"])

    const language = ref('English');
    const languageOptions = ref(["English","Francais","Italiano"]);
 

  // Actions
  const updateAppSettings = (object) => {
    currency.value = object.currency.value;
    language.value = object.language.value;

  };

  return {
    currency,
    currencyOptions,
    language,
    languageOptions,
    updateAppSettings

  };
});
