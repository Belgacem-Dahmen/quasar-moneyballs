<template>
  <q-page class="q-pa-sm">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="settingsStore.name"
          label="Your name *"
          hint="Name and surname"
        />

        <q-input
          filled
          type="number"
          v-model="settingsStore.age"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-toggle
          v-model="settingsStore.accept"
          label="I accept the license and terms"
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { useSettingsStore } from "src/stores/useSettingsStore";

const settingsStore = useSettingsStore();
const $q = useQuasar();

const onSubmit = () => {
  if (!settingsStore.accept) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  } else {
    settingsStore.updateSettings({
      name: { value: settingsStore.name },
      age: { value: settingsStore.age },
      accept: settingsStore.accept,
    });

    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Vos informations ont été mises à jour",
    });
  }
};

const onReset = () => {
  // Réinitialiser les valeurs aux valeurs par défaut du store
  settingsStore.name = ""; // Valeur par défaut
  settingsStore.age = null; // Valeur par défaut
  settingsStore.accept = false; // Valeur par défaut
};
</script>
