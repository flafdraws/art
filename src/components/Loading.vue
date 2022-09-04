<template>
  <div v-if="loading" class="flex flex-center loading">
    <br>
    <div class="q-mt-xl">
      <q-circular-progress indeterminate size="100px" color="primary" :thickness=".3" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  }
});
</script>