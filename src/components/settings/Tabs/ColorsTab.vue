<template>
  <q-tab-panel name="colors">
    <div class="row">
      <div class="text-h5 ">Primary </div>
    </div>
    <!-- <q-form class="q-gutter-md"> -->
    <div class="q-pa-md">
      <q-badge color="grey-3" text-color="black" class="q-mb-sm">
        {{ colorsStore.primary }}
      </q-badge>

      <q-color
        :model-value="colorsStore.primary"
        @change="
          (val) => {
            colorsStore.primary = val;
          }
        "
        style="max-width: 200px"
      />
    </div>

    <div>
      <q-btn label="validate" color="primary" @click="updateColors" />
    </div>
    <!-- </q-form> -->
  </q-tab-panel>
</template>

<script setup>
import { useColorsStore } from "src/stores/useColorsStore";
import { useQuasar } from "quasar";

const colorsStore = useColorsStore();
const $q = useQuasar();

const updateColors = () => {
  colorsStore.updateColors({
    primary: { value: colorsStore.primary },
    secondary: { value: colorsStore.secondary },
  });
  $q.notify({
    color: "green-4",
    textColor: "white",
    icon: "cloud_done",
    message: "Vos Couleurs ont été mises à jour",
  });
};
</script>
