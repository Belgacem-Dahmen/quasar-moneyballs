<template>
  <q-page>
    <div class="q-pa-xs">
      <q-list separator bordered class="flex-center">
        <q-slide-item
          v-for="entry in entries"
          :key="entry.id"
          @right="deleteEntry(entry.id)"
          right-color="negative"
        >
          <template v-slot:right>
            <div class="row items-center">
              Delete <q-icon right name="delete" />
            </div>
          </template>
          <q-item>
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
        </q-slide-item>
      </q-list>
    </div>
  </q-page>

  <q-footer class="bg-transparent">
    <div class="row q-px-md q-py-sm shadow-up-3">
      <div class="col text-grey-7 text-h6">Balance</div>
      <div class="col text-h6 text-right" :class="useAmountColor(balance)">
        {{ useCurrencify(balance) }}
      </div>
    </div>

    <q-form
      class="row q-col-sm q-colgutter-sm flex-center bg-primary"
      @submit.prevent="addEntry"
    >
      <div class="col">
        <q-input
          outlined
          placeholder="Name"
          color="white"
          bg-color="white"
          item-aligned
          v-model="newEntry.name"
          dense
          ref="nameRef"
        />
      </div>

      <div class="col">
        <q-input
          input-class="text-right"
          v-model.number="newEntry.amount"
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
        <q-btn
          round
          color="secondary"
          icon="add"
          class="q-mr-sm"
          type="submit"
        />
      </div>
    </q-form>
  </q-footer>
</template>


<script setup>
/** imports */
import { ref, computed, reactive } from "vue";
import { useCurrencify } from "src/use/useCurrencify";
import { useAmountColor } from "src/use/useAmountColor";
import { useId } from "quasar";
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
const nameRef = ref(null);
const newEntry = reactive({
  name: "",
  amount: null,
});

const balance = computed(() => {
  return entries.value.reduce((total, element) => total + element.amount, 0);
});
const id = useId();
const addEntry = () => {
  entries.value.push({
    id: useId().value,
    name: newEntry.name,
    amount: newEntry.amount,
  });
  //Reseting the form inputs
  (newEntry.name = ""), (newEntry.amount = null);
  nameRef.value.select();
};

const deleteEntry = (id) => {
  console.log(id);
};
</script>
