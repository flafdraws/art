<template>
  <div class="flex flex-center">
    <div v-for="(item, i) in socials" :key="i">
      <a v-if="item.show" :icon="item.icon" :href="item.href" target="__blank" flat round dense size="md" :color="item.color"
      class="social-btn">
        <q-icon :name="`fa-brands ${item.icon}`" :color="item.color" size="24px"></q-icon>
        <q-tooltip :class="`bg-${item.color} text-caption text-weight-bold text-black`" anchor="top middle"
          self="bottom middle">{{
          item.name
          }}
        </q-tooltip>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  socials: {}
});
</script>

<style scoped lang="scss">
.social-btn {
  margin-left: 4px;
  margin-right: 4px;
}
</style>