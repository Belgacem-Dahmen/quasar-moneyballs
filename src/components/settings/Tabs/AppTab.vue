<template>
  <q-tab-panel name="app">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-select
        color="teal"
        filled
        v-model="appSettings.language"
        :options="appSettings.languageOptions"
        label="Language"
        options-dense
      >
        <template v-slot:prepend>
          <q-icon name="language" />
        </template>
      </q-select>

      <q-select
        filled
        v-model="appSettings.currency"
        :options="appSettings.currencyOptions"
        label="Currency"
        stack-label
      >
        <template v-slot:prepend>
          <q-icon name="currency_exchange" />
        </template>
      </q-select>
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
import { useSuccessNotification } from "src/use/useNotify";
const appSettings = useAppSettingsStore();
const $q = useQuasar();

const onSubmit = () => {
  appSettings.updateAppSettings({
    language: { value: appSettings.language },
    currency: { value: appSettings.currency },
  });

  useSuccessNotification("Votre configuration a été mise à jour");
};

const onReset = () => {
  appSettings.language = "francais";
  appSettings.currency = "dollar";
};
</script>
