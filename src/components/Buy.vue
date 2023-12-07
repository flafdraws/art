<template>
  <div class="flex column flex-center q-mx-md">
    <div class="flex column flex-start content">
      
      <h4>COMMISSION FORM</h4>

      <BuyButton :href="computedFormURL" />

      <q-separator color="dark2" class="self-center q-my-xl"></q-separator>

      <BuyNotes />
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref } from "vue";
import { computed } from '@vue/reactivity';
import { debounce } from "quasar";
import { Default } from "../default";
import BuyNotes from './BuyNotes.vue';
import BuyButton from "./BuyButton.vue";

const props = defineProps({
  buy: {
    type: Object,
    default: () => ({
      formUrl: { type: String, default: "" }
    })
  }
});
const computedFormURL = computed(() => props.buy.formUrl);
</script>


<style scoped lang="scss">
.content {
  font-weight: 300;
  font-size: 1.05rem;
  text-align: justify;

  @media(max-aspect-ratio: 1/1) and (max-width: 480px) {
    font-size: 0.8rem;
  }
}

hr {
  width: 100%;
  background-color: $dark3;
}

h4 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 1.88rem;
  text-align: center;
  letter-spacing: 0.25rem;

  @media(max-aspect-ratio: 1/1) and (max-width: 480px) {
    font-size: 1.6rem;
  }
}

h5 {
  margin: 0;
  font-weight: 700;
  font-size: 1.375rem;
  letter-spacing: 0.1rem;

  @media(max-aspect-ratio: 1/1) and (max-width: 480px) {
    font-size: 1.2rem;
  }
}

.spacer {
  margin-top: 15px;
  margin-bottom: 15px;
}

.big-spacer {
  margin-top: 25px;
}

.mega-spacer {
  margin-top: 45px;
}
</style>