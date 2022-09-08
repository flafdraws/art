<template>
  <div class="flex row flex-center q-mt-xl">
    <q-btn class="self-center purchaseButton content-center" type="submit" :disable="disable">
      <div class="flex column flex-center">
        <span class="q-mb-sm">Submit Order</span>
        <q-icon large class="mt-1" size="md" name="mdi-cart-arrow-right"></q-icon>
      </div>
    </q-btn>
  </div>
</template>


<script setup>
const props = defineProps({
  disable: { type: Boolean, default: false }
});
</script>


<style lang="scss">
.purchaseButton {
  background-color: $focus;
  font-size: 20px;
  width: 220px;
  height: 110px;
  transform: scale(1.0);
  transition: all .2s ease-out;
  font-weight: 500;
}

.purchaseButton:disabled {
  background-color: rgba(255, 255, 255, 0.12);
  transform: scale(0.8);
  transition: all .2s ease-out;
  font-weight: normal;
}

.purchaseButton:not(:disabled):hover {
  transform: scale(1.15);
  transition: all .2s ease-out;
  font-weight: 500;
}
</style>