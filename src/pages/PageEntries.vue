<template>
  <q-page>
    <div class="q-pa-xs">
      <Loader :isLoading="entriesStore.isLoading" />
      <q-list separator bordered class="flex-center">
        <q-slide-item
          v-for="entry in entries"
          :key="entry.id"
          @right="(details) => deleteEntry(entry, details)"
          right-color="negative"
          ref="slideItems"
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
  <!-- <q-page v-else>
    <div class="q-pa-md text-negative text-h6">
      please add a new entry down below
    </div>
  </q-page> -->
  <q-footer class="bg-transparent">
    <div class="row q-px-md q-py-sm shadow-up-3">
      <div class="col text-grey-7 text-h6">Balance</div>
      <div class="col text-h6 text-right" :class="useAmountColor(balance)">
        {{ useCurrencify(balance) }}
      </div>
    </div>

    <q-form
      class="row q-col-sm q-colgutter-sm flex-center"
      :class="colorsStore.primary === '#00695c' ? 'bg-primary' : ''"
      :style="
        colorsStore.primary !== '#00695c'
          ? { backgroundColor: colorsStore.primary }
          : {}
      "
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
import { ref, reactive } from "vue";
import { useCurrencify } from "src/use/useCurrencify";
import { useAmountColor } from "src/use/useAmountColor";
import { useId, useQuasar } from "quasar";
import { useEntriesStore } from "src/stores/useEntriesStore";
import { useColorsStore } from "src/stores/useColorsStore";
import { computed } from "vue";

const entriesStore = useEntriesStore();
const colorsStore = useColorsStore();
const entries = computed(() => entriesStore.entries);
const balance = computed(() => entriesStore.balance);
const nameRef = ref(null);
const slideRef = ref(null);
const newEntry = reactive({
  name: "",
  amount: null,
});

import Loader from "src/components/Ui/Loader.vue";
import { useSuccessNotification } from "src/use/useNotify";

const id = useId();
const addEntry = () => {
  entriesStore.addEntry({
    id: useId().value,
    name: newEntry.name,
    amount: newEntry.amount,
  });
  (newEntry.name = ""), (newEntry.amount = null);
  nameRef.value.select();
};

const $q = useQuasar();
const slideItems = ref([]);

function resetAllSlideItems() {
  slideItems.value.forEach((slideItem) => {
    if (slideItem) {
      slideItem.reset();
    }
  });
}
const deleteEntry = ({ id, name, amount }) => {
  $q.dialog({
    title: "Supprimer",
    message: `Voulez vous vraiment supprimer cette entrée ?
    <div class="q-mt-md text-weight-bold  ${useAmountColor(amount)}">
      ${name} : $ ${amount}
      </div>

    `,
    cancel: true,
    persistent: true,
    html: true,
    ok: {
      label: "Delete",
      color: "negative",
      noCaps: true,
    },
    cancel: {
      label: "Annuler",
      noCaps: true,
    },
  })
    .onOk(() => {
      entriesStore.deleteEntry(id);
      useSuccessNotification("Entry deleted successfully");
    })
    .onCancel(() => {
      resetAllSlideItems();
    });
};
</script>
