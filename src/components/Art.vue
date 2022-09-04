<template>
  <ul class="q-mx-xs image-gallery q-ma-lg">
    <li v-for="(item, i) in items" :key="i">
      <img :src="item.thumb" :alt="item.title" />
    </li>
  </ul>
</template>


<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
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
  