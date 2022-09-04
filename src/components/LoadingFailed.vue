<template>
  <div class="flex column flex-center">
    <div class="text-h5 q-mt-md q-mb-xl failed">Failed to load data from server.</div>
    <div class="text-h4 again">Try again?</div>
    <q-btn round icon="mdi-reload" color="primary" size="xl" class="q-mt-lg" @click="$emit('reload');">
      <q-tooltip class="bg-primary text-weight-bold text-black">Reload Page
      </q-tooltip>
    </q-btn>
  </div>
</template>

<style scoped>
.failed {
  font-weight: 300;
}

.again {
  font-weight: 600;
}
</style>