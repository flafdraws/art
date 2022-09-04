<template>
  <div>
    <div class="flex flex-center xs">
      <q-btn :icon="mobileMenuIcon" :label="mobileMenuLabel" @click="toggleMobileVisility" size="lg" flat square
        class="fluid" />
    </div>

    <div :class="menuClass">
      <q-tabs v-model="modelValue" @update:model-value="updateValue" inline-label :vertical="$q.screen.xs"
        active-color="primary" class="inactive">
        <q-tab v-for="(item, i) in tabs" :key=i :name="i" :label="item.label" :icon="item.icon" />
      </q-tabs>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import { Screen } from 'quasar';

const modelValue = ref(0);
const mobileMenuExpanded = ref(false);
const mobileMenuIcon = computed(() => mobileMenuExpanded.value ? 'mdi-chevron-up' : 'mdi-menu');
const mobileMenuLabel = computed(() => mobileMenuExpanded.value ? '' : 'Menu');
const menuClass = computed(() => {
  return Screen.xs ? `mobileMenu ${mobileMenuExpanded.value ? '' : 'shrink'}` : '';
});
const toggleMobileVisility = () => { mobileMenuExpanded.value = !mobileMenuExpanded.value }

const tabs = ref([
  { label: "Art", icon: "mdi-brush" },
  { label: "About", icon: "mdi-account-circle" },
  { label: "TOS", icon: "mdi-file-document" },
  { label: "Prices", icon: "mdi-currency-usd" },
  { label: "Order", icon: "mdi-cart" }
])

const emit = defineEmits(['update:modelValue']);
function updateValue(value) {
  emit('update:modelValue', modelValue.value);
}
</script>

<style scoped lang="scss">
.inactive {
  color: $disabled;
}

.fluid {
  width: 100%;
}

.mobileMenu {
  max-height: 1000px;
  transition: max-height .4s ease-in;
  overflow: hidden;
}

.shrink {
  max-height: 0;
  transition: max-height .4s ease-out;
}
</style>