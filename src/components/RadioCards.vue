<template>
  <div class="flex column flex-start q-mb-xl">
    <div v-if="label || hint" class="flex column flex-start q-mb-md">
      <div class="flex flex-start items-center row no-wrap">
        <q-icon name="mdi-check-circle" size="sm" :class="`checkIcon ${isValid > 0 ? 'active' : ''}`">
        </q-icon>
        <h5 v-if="label">{{ label }}</h5>
      </div>
      <span v-if="hint" class="hint" v-html="hint"></span>
    </div>
    <div class="flex flex-center">
      <div v-for="(item, i) in options" :key="i"
        :class="`flex flex-center radioCard relative-position  ${isItemSelected(item) ? 'selected' : ''}`" v-ripple
        @click="selectCard(i)">
        <div class="flex flex-center column">
          <q-img v-if="item.img" :src="item.img" class="preview" fit="contain" />
          <q-radio v-model="modelValue" :name="name" :val="item.value" :label="item.label" class="radioBtn"
            :color="isItemSelected(item) ? 'grey-10' : 'grey-6'">
          </q-radio>
        </div>
        <q-tooltip v-if="item.tooltip" class="text-caption bg-info text-weight-bold text-black" anchor="top middle"
          self="top middle">{{
          item.tooltip }}</q-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  modelValue: { type: String, default: "" },
  name: { type: String, default: "" },
  label: { type: String, default: "" },
  hint: { type: String, default: undefined },
  options: { type: Array, default: () => ([]) },
});

const emit = defineEmits(['update:modelValue']);

const selectCard = (index) => {
  emit('update:modelValue', props.options[index].value);
}
const isItemSelected = (item) => props.modelValue === item.value;

const isValid = computed(() => props.options.some(el => el.value === props.modelValue));

const clear = () => emit('update:modelValue', "");

defineExpose({ isValid, clear });
</script>

<style scoped lang="scss">
.preview {
  width: 15rem;
  height: 13rem;
}

.hint {
  font-size: 0.85rem;
  font-weight: 400;
  padding-left: 2.2rem;
}

.radioCard {
  color: $primary;
  background-color: $dark2;
  width: 17rem;
  height: 16rem;
  margin: 12px;
  border-radius: 4px;
  padding: 8px;

  transform: scale(1.0);
  transition: all .2s ease-out;
}

.radioCard:hover {
  transform: scale(1.1);
  transition: all .2s ease-out;
  box-shadow: 0 5px 6px -3px black;
}

.radioCard.selected {
  background-color: #2196f3;
  transform: scale(1.05);
  transition: all .4s cubic-bezier(0.68, -1.55, 0.27, 2.55);
}

.radioBtn {
  pointer-events: none;
  color: $grey-6;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
}

.selected .radioBtn {
  color: #151515;
  font-weight: 700;
}

h5 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;

  @media(max-aspect-ratio: 1/1) and (max-width: 480px) {
    font-size: 1.2rem;
  }
}

.checkIcon {
  margin-right: 10px;
  transform: rotateY(0);
  transition: all 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.checkIcon.active {
  color: $success;
  transform: rotateY(720deg);
  transition: all 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

@media (max-aspect-ratio: 1/1) {
  .preview {
    width: 10rem;
    height: 7rem;
  }

  .radioCard {
    width: 14rem;
    height: 10rem;
  }

  .radioBtn {
    font-size: 0.85rem;
  }
}
</style>