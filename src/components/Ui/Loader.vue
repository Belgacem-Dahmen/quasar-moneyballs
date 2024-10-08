<template>
  <div
    v-if="isLoading"
    class="q-pa-sm q-gutter-md row full-width row justify-center content-center"
  >
    <q-spinner-tail color="gray" size="5rem" class="col-auto" />
  </div>
</template>

<script setup>
const { isLoading } = defineProps({
  isLoading: {
    type: Boolean,
    Required: true,
  },
});

</script>
