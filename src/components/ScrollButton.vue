<template>
  <div class="flex flex-center">
    <q-btn round icon="mdi-chevron-up" color="primary" class="text-black" @click="scrollToTop">
      <q-tooltip anchor="top middle" self="bottom middle" class="bg-primary text-caption text-weight-bold text-black">
        Back to top
      </q-tooltip>
    </q-btn>
  </div>
</template>

<script setup>
import { scroll } from 'quasar';

function scrollToTop() {
  const durationMs = 500;
  scroll.setVerticalScrollPosition(document.documentElement, 0, durationMs);
  scroll.setVerticalScrollPosition(document.body, 0, durationMs);
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}
</script>