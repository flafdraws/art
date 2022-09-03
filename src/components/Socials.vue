<template>
  <div class="flex flex-center">
    <div v-for="(item, i) in socials" :key="i">
      <q-btn v-if="item.show" :icon="item.icon" :href="item.href" target="__blank" outline round :color="item.color"
        class="social-btn">
        <q-tooltip :class="`bg-${item.color} text-weight-bold text-black`" anchor="top middle" self="bottom middle">{{
            item.name
        }}
        </q-tooltip>
      </q-btn>
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
  margin-left: 5px;
  margin-right: 5px;
}
</style>