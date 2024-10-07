<template>
  <q-tab-panel name="user">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="userStore.name"
        label="Your name *"
        hint="Name and surname"
      />
      <q-input
        filled
        v-model="userStore.email"
        label="Your email *"
        hint="Email adress"
        type="email"
      />

      <q-input
        filled
        type="number"
        v-model="userStore.age"
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
            v-model="userStore.notification"
            color="secondary"
            label="Do you want to receive email notifications ?"
            true-value="yes"
            false-value="no"
          />
        </div>
      </div>

      <div>
        <q-toggle
          v-model="userStore.accept"
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
import { useUserStore } from "src/stores/useUserStore";
import {
  useErrorNotification,
  useSuccessNotification,
} from "src/use/useNotify";

const userStore = useUserStore();
const $q = useQuasar();

const onSubmit = () => {
  if (!userStore.accept) {
    useErrorNotification("Vous devez accepter les termes d'utilisation");
  } else {
    userStore.updateSettings({
      name: { value: userStore.name },
      age: { value: userStore.age },
      email: { value: userStore.email },
      accept: userStore.accept,
      notification: userStore.notification,
    });
    useSuccessNotification("Vos informations ont été mises à jour");
  }
};

const onReset = () => {
  userStore.name = "";
  userStore.age = null;
  userStore.email = "";
  userStore.accept = false;
};
</script>
