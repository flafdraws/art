<template>
  <div class="gallery">
    <div v-for="(item, i) in items" :key="i" class="gallery-item">
      <img :src="item.thumb" @click="onItemClick(i)" />
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
  setDialogVisible(true);
}
const setPageScroll = (enabled) => {
  if (enabled) {
    document.body.classList.add("no-scroll");
  }
  else {
    document.body.classList.remove("no-scroll");
  }
}
const setDialogVisible = (visible) => {
  showDialog.value = visible;
  setPageScroll(visible);
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
</style>