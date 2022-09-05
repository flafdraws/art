<template>
  <DynamicHtml :html-text="prices" />
</template>

<script setup>
import DynamicHtml from './DynamicHtml.vue';

const props = defineProps({
  prices: {
    type: Object,
    default: () => ({
      header: undefined,
      body: []
    })
  }
});
</script>