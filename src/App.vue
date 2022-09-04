<template>
  <div>
    <Header />
    <Navbar v-model="tab" class="q-mb-xl" @update:model-value="onTabChange" />

    <Loading :loading="loading" />
    <Art v-if="tab == 0" :items="artProjects" />
    <About v-if="tab == 1" :about="about" :loading="loading" />

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
import { fetchSheetAsArray, fetchSheetAsJSON, stringToBooleanInArray } from './fetch'
import Art from './components/Art.vue';
import Socials from './components/Socials.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollButton from './components/ScrollButton.vue';
import About from './components/About.vue';
import Loading from './components/Loading.vue';
import { computed } from '@vue/reactivity';

// Refs
const isLoaded = ref({
  socials: false,
  art: false,
  about: false,
  tos: false,
  prices: false,
  order: false
});
const socials = ref([]);
const tab = ref(0);
const artProjects = ref([]);
const about = ref({
  name: "",
  title: "",
  contact: [],
  text: [],
  thanks: ""
});

// Computed
const loading = computed(() => {
  return (tab.value === 0 && !isLoaded.value.art) || (tab.value === 1 && !isLoaded.value.about);
});

// Methods
function onTabChange(newTab) {
  switch (newTab) {
    default:
    case 0:
      fetchArtTab();
      break;
    case 1:
      fetchAboutTab();
      break;
  }
}

function fetchArtTab() {
  if (isLoaded.value.art) return;

  const GOOGLE_SHEET = "https://opensheet.elk.sh/1Lwp385S5sqEs_E5Sg7ortIC1dbfen-AufyiLsB-I4ZE/art";
  fetchSheetAsArray(GOOGLE_SHEET)
    .then(function (items) {
      artProjects.value = items;
      isLoaded.value.art = true;
      // console.log('ART: ', items);
    });
}

function fetchAboutTab() {
  if (isLoaded.value.about) return;

  const GOOGLE_SHEET = "https://opensheet.elk.sh/1Lwp385S5sqEs_E5Sg7ortIC1dbfen-AufyiLsB-I4ZE/about";
  fetchSheetAsJSON(GOOGLE_SHEET)
    .then(function (json) {
      about.value = json;
      isLoaded.value.about = true;
      console.log('ABOUT: ', json);
    });
}

function fetchSocials() {
  if (isLoaded.value.socials) return;

  const GOOGLE_SHEET = "https://opensheet.elk.sh/1Lwp385S5sqEs_E5Sg7ortIC1dbfen-AufyiLsB-I4ZE/socials";
  fetchSheetAsArray(GOOGLE_SHEET)
    .then(items => stringToBooleanInArray(items))
    .then(items => {
      socials.value = items;
      isLoaded.value.socials = true;
      // console.log('SOCIALS: ', items);
    });
}

fetchSocials();
fetchArtTab();
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