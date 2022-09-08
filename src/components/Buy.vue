<template>
  <div class="flex column flex-center q-mx-md">
    <div class="flex column flex-start content">

      <q-form @submit="clearCommission" :action="buy.formUrl" method="post" target="_blank">

        <h4>COMMISSION FORM</h4>
        <div class="mega-spacer"></div>

        <h5>Contact Info</h5>
        <InputText ref="nameInput" v-model="customer.nickname" :rules="nameRules" :maxlength="64" />
        <InputText ref="emailInput" v-model="customer.email" :rules="emailRules" :maxlength="64" />
        <InputText v-model="customer.social" :maxlength="64" />
        <div class="mega-spacer"></div>

        <h5>Commission Details</h5>
        <div class="spacer"></div>
        <RadioCards ref="sizeInput" v-model="commission.size.value" :options="commission.size.options"
          :label="commission.size.label" :hint="commission.size.hint" />
        <RadioCards ref="polishingInput" v-model="commission.polishing.value" :options="commission.polishing.options"
          :label="commission.polishing.label" :hint="commission.polishing.hint" />
        <RadioCards ref="backgroundInput" v-model="commission.background.value" :options="commission.background.options"
          :label="commission.background.label" :hint="commission.background.hint" />
        <RadioCards ref="licenseInput" v-model="commission.license.value" :options="commission.license.options"
          :label="commission.license.label" :hint="commission.license.hint" />
        <RadioCards ref="privacyInput" v-model="commission.privacy.value" :options="commission.privacy.options"
          :label="commission.privacy.label" :hint="commission.privacy.hint" />

        <BuyButton :disable="!isFormValid" />
      </q-form>

      <q-separator color="dark2" class="self-center q-my-xl"></q-separator>

      <BuyNotes />
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { computed } from '@vue/reactivity';
import { Default } from "../default";
import InputText from './InputText.vue';
import BuyNotes from './BuyNotes.vue';
import BuyButton from "./BuyButton.vue";
import RadioCards from "./RadioCards.vue";

const props = defineProps({
  buy: {
    type: Object,
    default: () => ({
      fees: { type: Object, default: () => ({}) },
      formUrl: { type: String, default: "" },
      customer: Default.customer,
      commission: Default.commission
    })
  }
});

const customer = computed(() => props.buy.customer);
const commission = computed(() => props.buy.commission);

const nameInput = ref(null);
const emailInput = ref(null);
const sizeInput = ref(null);
const polishingInput = ref(null);

const nameRules = [v => !!v || 'Name is required'];
const emailRules = [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid',];
const radioRules = [v => !!v || "You must choose an option."];
const briefingTextRules = [v => !!v || "The job must be described.", v => v.length <= 2000];
const referenceTextRules = [v => !!v || "We need references to define a goal.", v => v.length <= 1000];
const paragraphRules = [v => v.length <= 512]

const fieldsToValidate = [nameInput, emailInput, sizeInput, polishingInput];
const isFieldValid = (field) => field.value && field.value.isValid;
const isFormValid = computed(() => {
  for (const field of fieldsToValidate) {
    if (!isFieldValid(field)) return false;
  }
  return true;
});

const clearCommission = () => { }
</script>


<style scoped lang="scss">
.content {
  max-width: 700px;
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
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
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