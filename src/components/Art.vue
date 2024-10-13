<template>
  <div>
    <ul class="q-mx-none gallery q-mb-lg">
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
  display: grid;
  gap: 2px;
  list-style-type: none;
  padding-inline-start: 0;
  grid-template-columns: 1fr;
  justify-items: left;
  align-items: center;
}

@media(min-width: 640px) {
    .gallery {
        grid-template-columns:repeat(2,1fr)
    }
}

@media(min-width: 992px) {
    .gallery {
        grid-template-columns:repeat(3,1fr)
    }
}

@media(min-width: 1200px) {
    .gallery {
        grid-template-columns:repeat(4,1fr)
    }
}

@media(min-width: 1440px) {
    .gallery {
        grid-template-columns:repeat(4,1fr)
    }
}

@media(min-width: 1680px) {
    .gallery {
        grid-template-columns:repeat(5,1fr)
    }
}

@media(min-width: 1920px) {
    .gallery {
        grid-template-columns:repeat(6,1fr)
    }
}

@media(min-width: 2560px) {
    .gallery {
        grid-template-columns:repeat(7,1fr)
    }
}

@media(min-width: 3000px) {
    .gallery {
        grid-template-columns:repeat(8,1fr)
    }
}

.gallery-item {
  justify-self: flex-start;
  align-self: flex-start;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
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

.dummy {
  flex-grow: 10;
  height: 200px;
  background-color: greenyellow;
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
  