<template>
  <ul v-if="isLoaded" class="q-mx-xs image-gallery q-ma-lg">
    <li v-for="(item, i) in artProjects" :key="i" @click="">
      <img :src="item.thumb" :alt="item.title" />
    </li>
  </ul>
  <div v-else-if="isLoading" class="flex flex-center loading">
    <q-circular-progress indeterminate size="100px" color="primary" :thickness=".3" />
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { fetchSheetAsArray } from '../utils'
import { fetchMockedArt } from "../mock"

const isLoaded = ref(false);
const isLoading = ref(true);
const artProjects = ref([]);

function fetchData() {
  if (isLoaded.value) return;

  const GOOGLE_SHEET = "https://opensheet.elk.sh/1Lwp385S5sqEs_E5Sg7ortIC1dbfen-AufyiLsB-I4ZE/art";
  fetchSheetAsArray(GOOGLE_SHEET)
    .then(function (items) {
      artProjects.value = items;
      isLoaded.value = true;
    });
}

// Prevents unnecessary API usage during development
function mockData() {
  fetchMockedArt()
    .then(function (data) {
      artProjects.value = data;
      isLoaded.value = true;
    });
}

fetchData();
// mockData();
</script>

<style scoped>
.loading {
  height: 80vh;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  list-style-type: none;
  padding-inline-start: 0;
}

.image-gallery>li {
  height: 40vh;
  cursor: pointer;
  position: relative;
}

.image-gallery li img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

/* 
.image-gallery li img:hover {
  transform: scale(1.2);
  transition: all .25s ease-in-out;
  z-index: 2000;
} */


@media (max-aspect-ratio: 1/1) {
  .image-gallery>li {
    width: 100vw;
    height: auto;
  }
}

@media (max-height: 480px) {
  .image-gallery>li {
    width: auto;
    height: 70vh;
  }
}

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  .image-gallery>li {
    width: 90vw;
    height: auto;
  }
}

.description {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity .2s ease-in-out;
}

.description:hover {
  opacity: 1;
}
</style>
  