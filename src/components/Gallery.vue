<template>
  <div class="gallery">
    <div v-for="(item, i) in items" :key="i" class="gallery-item">
      <img :src="item.thumb" @click="onItemClick(i)" />
      <div class="flex flex-center item-fade no-pointer">
        <q-icon name="mdi-magnify" size="xl" />
      </div>
    </div>

    <dialog-gallery v-model="currentIndex" :items="items" :show.sync="showDialog" @update:show="showDialog = $event" />
  </div>
</template>


<script setup>
import { ref } from 'vue';
import DialogGallery from './DialogGallery.vue';

const showDialog = ref(false);
const currentIndex = ref(-1);

const onItemClick = (itemIndex) => {
  currentIndex.value = itemIndex;
  showDialog.value = true;
}

const props = defineProps({
  items: {
    type: Array,
    default: () => ([])
  }
});
</script>


<style scoped>
.gallery {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding-inline-start: 0;
}

.gallery>.gallery-item {
  height: 25vh;
  position: relative;
  flex-grow: 1;
  cursor: pointer;
}

.gallery .gallery-item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.no-scroll {
  overflow: hidden;
}

.no-pointer {
  pointer-events: none;
}

.item-fade {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity .2s ease-in-out;
}

.gallery-item:hover .item-fade {
  opacity: 1;
}
</style>