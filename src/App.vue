<template>
  <div>
    <Header :class="$q.screen.xs ? 'q-mt-xs' : 'q-mt-md'" />
    <Socials class="q-mb-xl" :socials="socials" />
    <Navbar v-model="tab" :class="$q.screen.gt.xs ? 'q-mb-lg' : 'q-mb-xl'" />
    <Art v-show="tab == 0" />
    <br>
    <Socials class="q-mt-xl" :socials="socials" />
    <Footer />
  </div>
</template>


<script setup>
import Art from './components/Art.vue';
import Socials from './components/Socials.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';
import { fetchSheetAsArray } from './utils'
import { fetchMockedSocials } from './mock'

const socials = ref([]);
const GOOGLE_SHEET = "https://opensheet.elk.sh/1Lwp385S5sqEs_E5Sg7ortIC1dbfen-AufyiLsB-I4ZE/socials";

// fetchSheetAsArray(GOOGLE_SHEET)
fetchMockedSocials()
  .then(items => {
    for (let i = 0; i < items.length; i++) {
      const social = items[i];
      social.show = social.show === "O" ? true : false;
    }

    socials.value = items;
  });

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