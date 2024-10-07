<template>
  <q-tab-panel name="user">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="settingsStore.name"
        label="Your name *"
        hint="Name and surname"
      />
      <q-input
        filled
        v-model="settingsStore.email"
        label="Your email *"
        hint="Email adress"
        type="email"
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

      <div class="q-pa-xs">
        <div class="q-gutter-sm">
          <q-checkbox
            v-model="settingsStore.notification"
            color="secondary"
            label="Do you want to receive email notifications ?"
            true-value="yes"
            false-value="no"
          />
        </div>
      </div>

      <div>
        <q-toggle
          v-model="settingsStore.accept"
          label="I accept the license and terms"
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
import { useQuasar } from "quasar";
import { useSettingsStore } from "src/stores/useSettingsStore";
import {
  useErrorNotification,
  useSuccessNotification,
} from "src/use/useNotify";

const settingsStore = useSettingsStore();
const $q = useQuasar();

const onSubmit = () => {
  if (!settingsStore.accept) {
    useErrorNotification("Vous devez accepter les termes d'utilisation");
  } else {
    settingsStore.updateSettings({
      name: { value: settingsStore.name },
      age: { value: settingsStore.age },
      email: { value: settingsStore.email },
      accept: settingsStore.accept,
      notification: settingsStore.notification,
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
  settingsStore.name = "";
  settingsStore.age = null;
  settingsStore.email = "";
  settingsStore.accept = false;
};
</script>
