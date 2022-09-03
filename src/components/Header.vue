<template>
  <div class="q-mb-lg">
    <q-parallax src="https://i.postimg.cc/7PGWSbNC/banner-artpage.png" :height="Screen.gt.xs ? 200 : 150">
      <p class="banner header-minor q-pa-none q-ma-none">Art of</p>
      <p class="banner header-major q-pa-none q-ma-none">Flaf</p>
    </q-parallax>
  </div>
</template>

<script setup>
import { Screen } from 'quasar';
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
  font-size: 35px;
  font-weight: 400;
}

.header-major {
  font-size: 60px;
  font-weight: 700;
  line-height: 55px;
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