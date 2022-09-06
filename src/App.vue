<template>
  <div>
    <Header :banner-src="banner" @keydown.left="keyEvent" />
    <Navbar v-model="tab" class="q-mb-xl" />

    <Loading :loading="loading" />
    <LoadingFailed v-if="failedToLoad && !loading" @reload="fetchPageData" />

    <div v-if="!loading && !failedToLoad">
      <Art v-if="tab == 0" :items="artProjects" />
      <About v-if="tab == 1" :about="about" :loading="loading" />
      <TOS v-if="tab == 2" :tos="tos" />
      <Prices v-if="tab == 3" :prices="prices" />
    </div>

    <br>
    <div class="q-mt-xl"></div>
    <Socials :socials="socials" />
    <Footer />
    <ScrollButton class="q-mt-lg" />
    <div class="q-mt-lg" />
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { fetchJSON } from './fetch'
import Art from './components/Art.vue';
import Socials from './components/Socials.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollButton from './components/ScrollButton.vue';
import About from './components/About.vue';
import Loading from './components/Loading.vue';
import { computed } from '@vue/reactivity';
import LoadingFailed from './components/LoadingFailed.vue';
import TOS from './components/TOS.vue';
import Prices from './components/Prices.vue';

const keyEvent = (value) => console.log(value);

const banner = ref("");
const isLoaded = ref(false);
const failedToLoad = ref(false);
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
const tos = ref({
  header: "TERMS OF SERVICE",
  body: {}
});
const prices = ref({
  header: undefined,
  body: {}
});

const loading = computed(() => !isLoaded.value);

function fetchPageData() {
  isLoaded.value = false;
  failedToLoad.false = false;
  fetchJSON("https://api.npoint.io/6d9469bf770af6892bb8")
    .then(
      json => {
        banner.value = json.banner;
        socials.value = json.socials;
        artProjects.value = json.art;
        about.value = json.about;
        tos.value = json.tos;
        prices.value = json.prices;
        isLoaded.value = true;
      },
      value => {
        failedToLoad.value = true;
        isLoaded.value = true;
      }
    );
}

fetchPageData();
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