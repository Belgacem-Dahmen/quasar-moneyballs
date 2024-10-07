import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore("settings", () => {
  // État
  const name = ref("");
  const age = ref();
  const email =ref('');
  const accept = ref(false);
  const notification = ref(false);

  // Actions
  const updateSettings = (object) => {
    name.value = object.name.value;
    age.value = object.age.value;
    email.value = object.email.value
    accept.value = object.accept;
    notification.value = object.notification
  };

  return {
    name,
    age,
    email,
    accept,
    notification,
    updateSettings,
  };
});
