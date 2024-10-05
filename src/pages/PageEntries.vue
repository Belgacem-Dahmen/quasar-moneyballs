<template>
  <q-page>
    <div class="q-pa-xs">
      <q-list separator bordered class="flex-center">
        <q-item v-for="entry in entries" :key="entry.id">
          <q-item-section :class="useAmountColor(entry.amount)">
            {{ entry.name }}
          </q-item-section>
          <q-item-section side :class="useAmountColor(entry.amount)">
            {{ useCurrencify(entry.amount) }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
/** imports */
import { ref } from "vue";
import { useCurrencify } from "src/use/useCurrencify";
import { useAmountColor } from "src/use/useAmountColor";
const entries = ref([
  {
    id: 1,
    name: "Salary",
    amount: 1700.99,
  },
  {
    id: 2,
    name: "Rent",
    amount: -680.88,
  },
  {
    id: 3,
    name: "Parking",
    amount: 250.0,
  },
  {
    id: 4,
    name: "null",
    amount: 0,
  },
]);
</script>
