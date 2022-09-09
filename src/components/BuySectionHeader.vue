<template>
  <div class="flex flex-start items-center content-center">
    <h5>{{ text }}</h5>
    <q-btn round flat icon="mdi-delete" class="q-ml-sm" color="negative" @click="$emit('clear')"></q-btn>
  </div>
</template>


<script setup>
const props = defineProps({
  text: { type: String, default: "" }
});
</script>


<style>
h5 {
  margin: 0;
  font-weight: 700;
  font-size: 1.375rem;
  letter-spacing: 0.1rem;

  @media(max-aspect-ratio: 1/1) and (max-width: 480px) {
    font-size: 1.2rem;
  }
}
</style>