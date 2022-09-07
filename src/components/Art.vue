<template>
  <div>
    <ul class="q-mx-xs image-gallery q-mb-lg">
      <li v-for="(item, i) in items" :key="i">
        <img :name="i" :src="item.thumb" :alt="item.title" @click="onItemClick(i)" />
      </li>
    </ul>

    <dialog-gallery v-model="currentIndex" :items="items" :show="showDialog" @update:show="showDialog = $event" />
  </div>
</template>


<script setup>
import { ref } from "vue";
import DialogGallery from './DialogGallery.vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

const currentIndex = ref(-1);
const showDialog = ref(false);

const onItemClick = (value) => {
  currentIndex.value = value;
  showDialog.value = true;
};
</script>

<style scoped>
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
  