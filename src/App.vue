<template>
  <div>
    <Header :class="$q.screen.xs ? 'q-mt-xs' : 'q-mt-md'" />
    <Navbar v-model="tab" :class="$q.screen.gt.xs ? 'q-mb-lg' : ''" />
    <Art v-show="tab == 0" />
  </div>
</template>


<script setup>
import Art from './components/Art.vue';
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import { ref } from 'vue';

const tab = ref(0);
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<script>
export default
  {
    name: 'App',
    created() {
      this.$q.dark.set(true);
    }
  }
</script>