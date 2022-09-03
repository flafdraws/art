<template>
  <div>
    <Header />
    <!-- <Socials class="q-mb-xl" :socials="socials" /> -->
    <Navbar v-model="tab" :class="$q.screen.gt.xs ? 'q-mb-lg' : 'q-mb-xl'" />
    <Art v-show="tab == 0" />
    <About v-show="tab == 1" />

    <br>
    <div class="q-mt-xl"></div>
    <Socials :socials="socials" />
    <Footer />
    <ScrollButton v-show="tab != 1" class="q-mt-lg" />
    <div class="q-mt-lg" />
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { fetchSheetAsArray } from './utils'
import Art from './components/Art.vue';
import Socials from './components/Socials.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollButton from './components/ScrollButton.vue';
import About from './components/About.vue';


const socials = ref([]);
const tab = ref(0);
var isSocialsLoaded = false;
const GOOGLE_SHEET = "https://opensheet.elk.sh/1Lwp385S5sqEs_E5Sg7ortIC1dbfen-AufyiLsB-I4ZE/socials";
fetchSheetAsArray(GOOGLE_SHEET)
  .then(items => {
    if (isSocialsLoaded) return;

    for (let i = 0; i < items.length; i++) {
      const social = items[i];
      social.show = social.show === "O" ? true : false;
    }

    socials.value = items;
    isSocialsLoaded = true;
  });
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