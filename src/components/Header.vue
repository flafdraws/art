<template>
  <q-parallax src="https://i.postimg.cc/NfNHvfvk/banner-artstation.png" :height="bannerHeight">
    <p class="banner header-minor q-pa-none q-ma-none">Art of</p>
    <p class="banner header-major q-pa-none q-ma-none">Flaf</p>
  </q-parallax>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { Screen } from 'quasar';

const bannerHeight = computed(() => {
  return Math.min(Screen.height * 0.4, 450);
});
</script>

<style lang="scss" scoped>
.card {
  background-color: $dark2;
}

.ring {
  border: 5px solid $border;
  border-radius: 100%;
}

.banner {
  text-shadow: 2px 2px 4px black;
}

.header-minor {
  font-size: 4.5vh;
  font-weight: 400;
  line-height: 4.5vh;
}

.header-major {
  font-size: 9vh;
  font-weight: 700;
  line-height: 9vh;
}

.x-margin {
  margin-left: 18px;
  margin-right: 18px;
}

.l-margin {
  margin-left: 14px;
}

.r-margin {
  margin-right: 14px;
}
</style>