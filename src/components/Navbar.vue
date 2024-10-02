<template>
  <div>
    <div v-if="$q.screen.xs" class="mobileNav flex column xs">
      <q-btn icon="mdi-menu" label="" @click="toggleMobileVisility" size="lg" flat square class="mobileNavButton self-end"/>
      
      <div :class="`mobileTabsContainer ${mobileMenuExpanded ? '' : 'wawawa'}`" @click.stop>
        <q-tabs v-model="modelValue" @update:model-value="updateValue" inline-label vertical
          active-color="primary" class="inactive mobileTabs q-ma-sm">
          <q-tab v-for="(item, i) in tabs" :key=i :name="i" :label="item.label" :icon="item.icon"/>
        </q-tabs>
      </div>

      <div class="mobileFullScreenEmptyZone" v-show="mobileMenuExpanded" @click="hideVisibility"></div>
    </div>

    <div v-else>
      <div :class="menuClass">
        <q-tabs v-model="modelValue" @update:model-value="updateValue" inline-label
          active-color="primary" class="inactive">
          <q-tab v-for="(item, i) in tabs" :key=i :name="i" :label="item.label" :icon="item.icon" />
        </q-tabs>
      </div>
    </div>

  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import { Screen } from 'quasar';
import { setRouteFromTab } from "../routes";

// Refs
const modelValue = ref(0);
const mobileMenuExpanded = ref(false);
const tabs = ref([
  { label: "Art", icon: "mdi-brush" },
  { label: "About", icon: "mdi-account-circle" },
  { label: "TOS", icon: "mdi-file-document" },
  { label: "Buy", icon: "mdi-cart" }
]);

// Computed
const mobileMenuIcon = computed(() => mobileMenuExpanded.value ? 'mdi-chevron-up' : 'mdi-menu');
const mobileMenuLabel = computed(() => mobileMenuExpanded.value ? '' : 'Menu');
const menuClass = computed(() => {
  return Screen.xs ? `mobileMenu ${mobileMenuExpanded.value ? '' : 'shrink'}` : '';
});

// Methods
const toggleMobileVisility = () => { mobileMenuExpanded.value = !mobileMenuExpanded.value }
const hideVisibility = () => { mobileMenuExpanded.value = false };

// Emits
const emit = defineEmits(['update:modelValue']);
function updateValue(value) {
  setRouteFromTab(value);
  modelValue.value = value;
  emit('update:modelValue', value);
}

// Exposes
defineExpose({ updateValue });
</script>

<style scoped lang="scss">
.inactive {
  color: $disabled;
}

.mobileNav {
  top: 0;
  right: 0;
  z-index: 6000;
  position: fixed;
}

.mobileNavButton {
  z-index: 6020;
}

.mobileTabs {
  align-items: start !important;
}

.mobileTabsContainer {
  background-color: black;
  opacity: 0.85;
  transition: transform 0.25s ease-out;
  z-index: 6010;
}
.mobileTabsContainer.wawawa {
  transform: translateX(100%);
}

.mobileFullScreenEmptyZone {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.mobileMenu {
  max-height: 1000px;
  transition: max-height .4s ease-in;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
}

.shrink {
  max-height: 0;
  transition: max-height .4s ease-out;
}
</style>