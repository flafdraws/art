<template>
  <q-input :name="modelValue.name" v-model="modelValue.value" :label="modelValue.label"
    :placeholder="modelValue.placeholder" :hint="modelValue.hint" :type="type" hide-hint
    @update:model-value="updateModel" :rules="rules" :maxlength="maxlength" class="inputText" clearable counter
    :autogrow="autogrow">
    <template v-slot:prepend v-if="isRequired">
      <q-icon name="mdi-check-circle" :class="`checkIcon ${isValid > 0 ? 'active' : ''}`">
      </q-icon>
    </template>
  </q-input>
</template>


<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      name: { type: String, default: "" },
      value: { type: String, default: "" },
      label: { type: String, default: "" },
      placeholder: { type: String, default: "" },
      hint: { type: String, default: "" },
    })
  },
  type: { type: String, default: "text" },
  autogrow: { type: Boolean, default: false },
  maxlength: { type: Number, default: 64 },
  rules: {
    type: Array,
    default: () => ([])
  }
});

const emit = defineEmits(['update:modelValue']);

function updateModel(value) {
  props.modelValue.value = value;
  emit('update:modelValue', props.modelValue);
}

const clear = () => updateModel("");
const isRequired = computed(() => props.rules && props.rules.length > 0);
const isValid = computed(() => {
  for (let i = 0; i < props.rules.length; i++) {
    if (props.rules[i](props.modelValue.value) !== true) {
      return false;
    }
  }
  return true;
});


defineExpose({ isValid, clear });
</script>


<style scoped lang="scss">
.inputText {
  font-weight: 500;
}

.checkIcon {
  transform: rotateY(0);
  transition: all 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.checkIcon.active {
  color: $success;
  transform: rotateY(720deg);
  transition: all 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
</style>