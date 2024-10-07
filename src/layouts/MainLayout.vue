<template>
  <q-layout view="hHh lpR lff">
    <q-header elevated>
      <q-toolbar
        :class="colorsStore.primary === '#00695c' ? 'bg-primary' : ''"
        :style="
          colorsStore.primary !== '#00695c'
            ? { backgroundColor: colorsStore.primary }
            : {}
        "
      >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="absolute-center">
            <q-icon name="savings" />
            MoneyBalls
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="250"
      :class="colorsStore.primary === '#00695c' ? 'bg-primary' : ''"
      :style="
        colorsStore.primary !== '#00695c'
          ? { backgroundColor: colorsStore.primary }
          : {}
      "
      show-if-above
      v-model="leftDrawerOpen"
      bordered
      :breakpoint="768"
    >
      <q-list>
        <q-item-label header class="text-white"> Navigation </q-item-label>

        <NavLink v-for="link in navLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import NavLink from "components/nav/NavLink.vue";
import { useColorsStore } from "src/stores/useColorsStore";
const colorsStore = useColorsStore();
defineOptions({
  name: "MainLayout",
});
const navLinks = [
  {
    title: "Entries",
    icon: "savings",
    link: "/",
  },
  {
    title: "Settings",
    icon: "settings",
    link: "/settings",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
