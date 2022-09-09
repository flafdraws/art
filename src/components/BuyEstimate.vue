<template>
  <div v-if="totalPrice > 0" class="flex column flex-center priceCardContainer">
    <q-card class="flex flex-center column q-pa-md priceCard">
      <q-card-section>
        <h6>Estimated Price</h6>
      </q-card-section>

      <q-separator class="separator" />

      <q-card-section class="flex column self-start full-width">
        <div v-if="baseTotal > 0">
          <div v-for="(item, i) in sums" :key="i">
            <div v-if="item.value > 0" class="row q-mt-sm">
              <span class="col-grow serviceText" v-html="item.label"></span>
              <span class="col-auto text-right" v-html="item.costLabel"></span>
            </div>
          </div>
          <div class="row q-mt-sm q-mb-md">
            <span class="col-grow serviceText"><b>Subtotal</b></span>
            <span class="col-auto text-right"><b>+ {{ baseTotal }} USD</b></span>
          </div>
        </div>

        <div v-if="mulTotal > 1">
          <div v-for="(item, i) in muls" :key="i">
            <div v-if="item.value > 0" class="row q-mt-sm">
              <span class="col-grow serviceText" v-html="item.label"></span>
              <span class="col-auto text-right" v-html="item.costLabel"></span>
            </div>
          </div>
          <div class="row q-mt-sm q-mb-md">
            <span class="col-grow serviceText"><b>Subtotal</b></span>
            <span class="col-auto text-right flex column no-wrap">
              <b><span>+ {{ 100 * mulPercent }}%</span></b>
              <span class="mini-text">(x {{mulTotal}})</span>
            </span>
          </div>
        </div>
      </q-card-section>

      <q-separator class="separator" />

      <q-card-section class="q-py-lg full-width">
        <div class="flex flex-center justify-between">
          <h5 class="q-mb-md">Total</h5>
          <h4 class="">{{ totalPrice }} USD</h4>
        </div>
      </q-card-section>

      <q-separator class="separator" />

      <q-card-section class="">
        <span v-if="notes" class="text-body2" v-html="notes"></span>
      </q-card-section>
    </q-card>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { computed } from '@vue/reactivity';

const props = defineProps({
  data: {
    polishing: { type: Object, default: () => ({ label: "", value: 0 }) },
    size: { type: Object, default: () => ({ label: "", value: 0 }) },
    background: { type: Object, default: () => ({ label: "", value: 0 }) },
    license: { type: Object, default: () => ({ label: "", value: 0 }) },
    privacy: { type: Object, default: () => ({ label: "", value: 0 }) },
  },
  notes: { type: String, default: "" }
});

const polishingStr = computed(() => props.data.polishing.value ? 'Painting' : 'Sketch');
const sums = computed(() => [
  { label: `<u>Size</u><br>${props.data.size.label} (${polishingStr.value})`, costLabel: `+ ${props.data.size.price} USD`, value: props.data.size.price },
  { label: `<u>Background</u><br>${props.data.background.label} (${polishingStr.value})`, costLabel: `+ ${props.data.background.price} USD`, value: props.data.background.price },
]);
const muls = computed(() => [
  { label: `<u>License</u><br>${props.data.license.label}`, costLabel: `+ ${100 * props.data.license.price}%`, value: props.data.license.price },
  { label: `<u>Privacy</u><br>${props.data.privacy.label}`, costLabel: `+ ${100 * props.data.privacy.price}%`, value: props.data.privacy.price },
]);

const baseTotal = computed(() => props.data.size.price + props.data.background.price);
const mulPercent = computed(() => props.data.license.price + props.data.privacy.price);
const mulTotal = computed(() => 1 + mulPercent.value);
const totalPrice = computed(() => baseTotal.value * mulTotal.value);
</script>


<style scoped lang="scss">
.priceCard {
  background-color: $dark3;

  h6,
  h5 {
    margin: 0;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 0;
  }

  hr {
    width: 100%;
    background-color: $dark4;
  }

}

.serviceText {
  font-size: 0.95rem;
}

.mini-text {
  color: $disabled;
  font-size: 0.85rem;
  margin: 0;
  padding: 0;
}

@media (max-aspect-ratio: 1/1) {
  .serviceText {
    font-size: 0.8rem;
  }
}

.priceCardContainer {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.full-width {
  width: 100%;
}
</style>