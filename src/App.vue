<template>
  <div>
    <Header :banner-src="banner" :email="email" @keydown.left="keyEvent" />
    <Navbar ref="nav" v-model="tab" />

    <Loading :loading="loading" />
    <LoadingFailed v-if="failedToLoad && !loading" @reload="fetchPageData" />

    <div v-if="!loading && !failedToLoad">
      <Art v-show="tab == 0" :items="artProjects" />
      <About v-show="tab == 1" :about="about" :loading="loading" />
      <TOS v-show="tab == 2" :tos="tos" />
      <Buy v-show="tab == 3" :buy="buy" />
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
import { onMounted, ref } from 'vue';
import { fetchJSON } from './fetch'
import { computed } from '@vue/reactivity';
import { getTabFromRoute } from "./routes";
import Socials from './components/Socials.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Loading from './components/Loading.vue';
import LoadingFailed from './components/LoadingFailed.vue';
import ScrollButton from './components/ScrollButton.vue';
import Art from './components/Art.vue';
import About from './components/About.vue';
import TOS from './components/TOS.vue';
import Prices from './components/Prices.vue';
import Buy from './components/Buy.vue';

const keyEvent = (value) => console.log(value);

const nav = ref(null);
const banner = ref("");
const isLoaded = ref(false);
const failedToLoad = ref(false);
const socials = ref([]);
const tab = ref(0);
const artProjects = ref([]);
const about = ref();
const tos = ref();
const prices = ref();
const buy = ref();
const email = ref("");

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
        buy.value = json.buy;
        isLoaded.value = true;
        email.value = json.about.contact[0]
      },
      value => {
        failedToLoad.value = true;
        isLoaded.value = true;
      }
    );
}

fetchPageData();
onMounted(() => {
  tab.value = getTabFromRoute();
  nav.value.updateValue(tab.value)
});
</script>


<script>
export default
  {
    name: 'App',
    created() {
      this.$q.dark.set(true);
    }
  }
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