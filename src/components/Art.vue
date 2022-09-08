<template>
  <div>
    <ul class="q-mx-xs gallery q-mb-lg">
      <li v-for="(item, i) in items" :key="i" class="gallery-item">
        <img :name="i" :src="item.thumb" :alt="item.title" @click="onItemClick(i)" />
        <div class="item-fade flex justify-center items-end no-pointer">
          <span class="gallery-item-text">
            {{ item.title }}
          </span>
        </div>
      </li>
    </ul>

    <DialogGallery v-model="currentIndex" :items="items" :show="showDialog" @update:show="showDialog = $event" />
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
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  list-style-type: none;
  padding-inline-start: 0;
}

.gallery-item {
  height: 40vh;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

@media (max-aspect-ratio: 1/1) {
  .gallery-item {
    width: 70vw;
    height: auto;
  }
}

@media (max-height: 480px) {
  .gallery-item {
    width: auto;
    height: 70vh;
  }
}

.gallery-item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.no-pointer {
  pointer-events: none;
}

.item-fade {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
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

.gallery-item-text {
  margin-bottom: 0.8rem;
  font-size: 1rem;
  transform: translateY(150%);
  transition: transform 0.2s ease-in-out;
}

.gallery-item:hover .gallery-item-text {
  transform: translateY(0);
  transition: transform 0.2s ease-in-out;
}
</style>
  