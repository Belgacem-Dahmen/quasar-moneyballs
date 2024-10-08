<template>
  <q-page class="q-pa-sm">
    <div>
      <q-splitter v-model="splitterModel" style="height: auto">
        <template v-slot:before>
          <q-tabs v-model="tab" vertical class="text-teal">
            <q-tab
              name="user"
              icon="manage_accounts"
              label="user"
              :style="{ color: colorStore.iconColors }"
            />
            <q-tab
              name="app"
              icon="settings"
              label="app"
              :style="{ color: colorStore.iconColors }"
            />
            <q-tab
              :style="{ color: colorStore.iconColors }"
              name="colors"
              icon="palette"
              label="colors"
            />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <UserTab name="user" />
            <AppTab name="app" />
            <ColorsTab name="colors" />
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
    <div class="q-pa-md" style="max-width: 400px"></div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

import UserTab from "src/components/settings/Tabs/UserTab.vue";
import AppTab from "src/components/settings/Tabs/AppTab.vue";
import ColorsTab from "src/components/settings/Tabs/ColorsTab.vue";
import { useColorsStore } from "src/stores/useColorsStore";
const colorStore = useColorsStore();
const tab = ref("user");
const splitterModel = ref(10);

console.log(process.env.FIREBASE_apiKey);
</script>
