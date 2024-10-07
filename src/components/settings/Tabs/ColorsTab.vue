<template>
  <q-tab-panel name="colors">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    
      <div class="q-pa-md">
    <q-badge color="grey-3" text-color="black" class="q-mb-sm">
      {{ hex }}
    </q-badge>

    <q-color
      :model-value="hex"
      @change="val => { hex = val }"
      style="max-width: 200px"
    />
  </div>

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
  </q-tab-panel>
</template>

<script setup>
import { useAppSettingsStore } from "src/stores/useAppStore.js";
import { useQuasar } from "quasar";
import { ref } from "vue";
const appSettings = useAppSettingsStore();
const $q = useQuasar();
const  hex = ref('#112e1b');
const onSubmit = () => {
  appSettings.updateAppSettings({
    language: { value: appSettings.language },
    currency: { value: appSettings.currency },
  });

  $q.notify({
    color: "green-4",
    textColor: "white",
    icon: "cloud_done",
    message: "Vos informations ont été mises à jour",
  });
};

const onReset = () => {
  appSettings.language = "francais";
  appSettings.currency = "dollar";
};
</script>
