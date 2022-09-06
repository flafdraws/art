<template>
  <div :class="`dialog no-select flex flex-center ${show ? 'dialog-show' : 'dialog-hide'}`"
    v-touch-swipe.mouse.left="goNext" v-touch-swipe.mouse.right="goPrevious" v-touch-swipe.mouse.up="hideDialog">
    <div v-if="currentItem" class="dialog-image-container">
      <q-img :src="currentItem" fit="contain" class="dialog-image" />
      <div class="dialog-buttons">
        <q-btn round icon="mdi-fullscreen" flat size="lg" :href="currentItem" target="__blank" class="q-mr-md" />
        <q-btn v-if="items.length > 1" round flat icon="mdi-chevron-left" size="lg" @click="goPrevious"
          class="q-mr-xs" />
        <q-btn v-if="items.length > 1" round flat icon="mdi-chevron-right" size="lg" @click="goNext" class="q-mr-md" />
        <q-btn round flat icon="mdi-chevron-up" size="lg" @click="setDialogVisible(false)" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from '@vue/reactivity';
import { onBeforeUnmount, onMounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: Number,
    default: -1
  },
  items: {
    type: Array,
    default: () => ([])
  },
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'update:show']);
const updateValue = function (value) {
  emit('update:modelValue', value);
}
const updateShow = function (value) {
  emit('update:show', value);
}

const currentItem = computed(() => {
  return props.modelValue >= 0 && props.modelValue < props.items.length ? props.items[props.modelValue].img : null;
});

const keyEvent = (value) => console.log(value);
const roundIndex = (index) => {
  let rv = index;
  if (index < 0) rv += props.items.length;
  rv = rv % props.items.length;
  updateValue(rv);
  return rv;
}


const goNext = () => roundIndex(props.modelValue + 1);
const goPrevious = () => roundIndex(props.modelValue - 1);
const hideDialog = () => setDialogVisible(false);
const setPageScroll = (enabled) => {
  if (enabled) {
    document.body.classList.add("no-scroll");
  }
  else {
    document.body.classList.remove("no-scroll");
  }
}
const setDialogVisible = (visible) => {
  updateShow(visible);
  setPageScroll(visible);
}

const onKeyUp = (event) => {
  if (!props.show) return;

  if (event.key === 'ArrowLeft') goPrevious();
  else if (event.key === 'ArrowRight') goNext();
  else if (event.key === 'Escape' || event.key === 'ArrowUp') hideDialog();
}
onMounted(() => window.addEventListener('keyup', onKeyUp));
onBeforeUnmount(() => window.removeEventListener('keyup', onKeyUp));
</script>
  

<style scoped>
.dialog {
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  z-index: 8000;
}

.dialog-show {
  transform: translateY(0);
  transition: all .4s ease-out;
}

.dialog-hide {
  transform: translateY(-100%);
  transition: all .4s ease-out;
}

.dialog-image-container {
  width: 100%;
  height: 100%;
}

.dialog-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.no-scroll {
  overflow: hidden;
}

.dialog-buttons {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>