<template>
  <q-page>
    <div class="q-pa-xs">
      <q-list separator bordered class="flex-center">
        <q-item v-for="entry in entries" :key="entry.id">
          <q-item-section
            :class="useAmountColor(entry.amount)"
            class="text-weight-bold"
          >
            {{ entry.name }}
          </q-item-section>
          <q-item-section
            side
            :class="useAmountColor(entry.amount)"
            class="text-weight-bold"
          >
            {{ useCurrencify(entry.amount) }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
  <q-footer class="bg-transparent">
    <div class="row q-px-md q-py-sm shadow-up-3">
      <div class="col text-grey-7 text-h6">Balance</div>
      <div
        class="col  text-h6 text-right"
        :class="useAmountColor(balance)"
      >
        {{ useCurrencify(balance) }}
      </div>
    </div>
    <div class="row q-col-sm q-colgutter-sm flex-center bg-primary">
      <div class="col">
        <q-input
          outlined
          placeholder="Name"
          color="white"
          bg-color="white"
          item-aligned
          dense
        />
      </div>
      <div class="col">
        <q-input
          input-class="text-right"
          outlined
          placeholder="Amount"
          color="white"
          bg-color="white"
          item-aligned
          type="number"
          step="0.01"
          dense
        />
      </div>
      <div class="col col-auto">
        Add
        <q-btn round color="secondary" icon="add" class="q-mr-sm" />
      </div>
    </div>
  </q-footer>
</template>

<script setup>
/** imports */
import { ref, computed } from "vue";
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
    amount: 680.88,
  },
  {
    id: 3,
    name: "Parking",
    amount: -50.0,
  },
  {
    id: 4,
    name: "null",
    amount: 0,
  },
]);


const balance = computed(() => {
  return entries.value.reduce((total, element) => total + element.amount, 0);
});

</script>
