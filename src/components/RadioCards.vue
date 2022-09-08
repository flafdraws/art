<template>
  <div class="flex flex-center ">
    <div v-for="(item, i) in options" :key="i"
      :class="`flex flex-center radioCard relative-position  ${isSelectedItem(item) ? 'selected' : ''}`" v-ripple
      @click="selectCard(i)">
      <q-img v-if="item.img" :src="item.img" width="300px" height="200px" fit="contain" />
      <q-radio v-model="modelValue" :name="name" :val="item.value" :label="item.label" class="radioBtn"
        :color="isSelectedItem(item) ? 'grey-10' : white">
        <template>

        </template>
      </q-radio>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  options: {
    type: Array,
    default: () => ([])
  },
});

const emit = defineEmits(['update:modelValue']);

const selectCard = (index) => {
  emit('update:modelValue', props.options[index].value);
}
const isSelectedItem = (item) => props.modelValue === item.value;

</script>

<style scoped lang="scss">
.radioCard {
  color: $primary;
  background-color: $dark2;
  width: 270px;
  height: 250px;
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
  color: white;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.selected .radioBtn {
  color: #151515;
  font-weight: 700;
}
</style>