<template>
  <DynamicHtml :html-text="tos" />
</template>

<script setup>
import DynamicHtml from './DynamicHtml.vue';

const props = defineProps({
  tos: {
    type: Object,
    default: () => ({
      header: "TERMS OF SERVICE",
      body: []
    })
  }
});
</script>