<template>
  <div class="flex column flex-center q-mx-md">
    <div class="flex column flex-start content">

      <q-form @submit="onSubmit" :action="buy.formUrl" method="post" target="_blank">
        <h4>COMMISSION FORM</h4>
        <div class="mega-spacer"></div>

        <div class="flex flex-start items-center content-center">
          <h5>Contact Info</h5>
          <q-btn round flat icon="mdi-delete" class="q-ml-sm" color="negative" @click="clearContact"></q-btn>
        </div>
        <InputText ref="nameInput" v-model="customer.nickname" :rules="nameRules" :maxlength="64" class="q-mb-sm" />
        <InputText ref="emailInput" v-model="customer.email" :rules="emailRules" :maxlength="64" class="q-mb-sm"
          type="email" />
        <InputText ref="socialInput" v-model="customer.social" :maxlength="64" class="q-mb-sm" />
        <div class="mega-spacer"></div>

        <div class="flex flex-start items-center content-center">
          <h5>Commission Details</h5>
          <q-btn round flat icon="mdi-delete" class="q-ml-sm" color="negative" @click="clearCommission"></q-btn>
        </div>
        <div class="spacer"></div>

        <RadioCards ref="polishingInput" v-model="commission.polishing.value" :options="commission.polishing.options"
          :label="commission.polishing.label" :hint="commission.polishing.hint" :name="commission.polishing.name" />
        <RadioCards ref="sizeInput" v-model="commission.size.value" :options="commission.size.options"
          :label="commission.size.label" :hint="commission.size.hint" :name="commission.size.name"
          :price="sizePriceStr" />
        <RadioCards ref="backgroundInput" v-model="commission.background.value" :options="commission.background.options"
          :label="commission.background.label" :hint="commission.background.hint" :name="commission.background.name"
          :price="backgroundPriceStr" />
        <RadioCards ref="licenseInput" v-model="commission.license.value" :options="commission.license.options"
          :label="commission.license.label" :hint="commission.license.hint" :name="commission.license.name"
          :price="licensePriceStr" />
        <RadioCards ref="privacyInput" v-model="commission.privacy.value" :options="commission.privacy.options"
          :label="commission.privacy.label" :hint="commission.privacy.hint" :name="commission.privacy.name"
          :price="privacyPriceStr" />

        <InputText ref="briefingInput" v-model="commission.briefing" :rules="briefingTextRules" :maxlength="2000"
          type="textarea" autogrow class="q-mb-sm" />
        <InputText ref="referencesInput" v-model="commission.references" :rules="referenceTextRules" :maxlength="1000"
          type="textarea" autogrow class="q-mb-sm" />
        <InputText ref="commentsInput" v-model="commission.comments" :maxlength="512" type="textarea" autogrow
          class="q-mb-sm" />

        <div v-if="totalPrice > 0" class="flex column flex-center finalPrice">
          <h6>Estimated Price</h6>
          <h4>{{ totalPrice }} USD</h4>
          <span class="text-body2">
            * This is a rough estimate, prices can vary greatly.<br>
            * A post-submit reply with the precise value may take a day.
          </span>
        </div>

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
const socialInput = ref(null);
const sizeInput = ref(null);
const polishingInput = ref(null);
const backgroundInput = ref(null);
const licenseInput = ref(null);
const privacyInput = ref(null);
const briefingInput = ref(null);
const referencesInput = ref(null);
const commentsInput = ref(null);

const nameRules = [v => !!v || 'Name is required'];
const emailRules = [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid',];
const briefingTextRules = [v => !!v || "The job must be described.", v => v.length <= 2000];
const referenceTextRules = [v => !!v || "We need references to define a goal.", v => v.length <= 1000];

const fieldsToValidate = [nameInput, emailInput, sizeInput, polishingInput, backgroundInput, licenseInput, privacyInput, briefingInput, referencesInput];
const isFieldValid = (field) => field.value && field.value.isValid;
const isFormValid = computed(() => {
  for (const field of fieldsToValidate) {
    if (!isFieldValid(field)) return false;
  }
  return true;
});

const clearFields = (fields) => fields?.forEach(field => field.value.clear());
const clearContact = () => clearFields([nameInput, emailInput, socialInput]);
const clearCommission = () => clearFields([sizeInput, polishingInput, backgroundInput, licenseInput, privacyInput, briefingInput, referencesInput, commentsInput]);
const clearCommissionPartially = () => clearFields([sizeInput, polishingInput, backgroundInput]);

const onSubmit = (evt) => {
  evt.target.submit();
  clearCommissionPartially();
}

const sumStr = (value) => `+ $${value}`;
const mulStr = (value) => `+ ${value * 100}%`;
const indexOrDefault = (field, defaultValue = -1) => field?.value?.index >= 0 ? field.value.index : defaultValue;
const polishingIndex = computed(() => indexOrDefault(polishingInput));

const sumPriceOrDefault = (field, fees, defaultPrice = 0) => {
  const i = indexOrDefault(field);
  const j = polishingIndex.value;
  return i >= 0 && j >= 0 ? fees[i][j] : defaultPrice;
}
const mulPriceOrDefault = (field, fees, defaultPrice = 0) => {
  const i = indexOrDefault(field);
  return i >= 0 ? fees[i] : defaultPrice;
}

const sizePrice = computed(() => sumPriceOrDefault(sizeInput, props.buy.fees.size));
const sizePriceStr = computed(() => sumStr(sizePrice.value));

const backgroundPrice = computed(() => sumPriceOrDefault(backgroundInput, props.buy.fees.background));
const backgroundPriceStr = computed(() => sumStr(backgroundPrice.value));

const licensePrice = computed(() => mulPriceOrDefault(licenseInput, props.buy.fees.license));
const licensePriceStr = computed(() => mulStr(licensePrice.value));

const privacyPrice = computed(() => mulPriceOrDefault(privacyInput, props.buy.fees.privacy));
const privacyPriceStr = computed(() => mulStr(privacyPrice.value));

const totalPrice = computed(() => (sizePrice.value + backgroundPrice.value) * (1 + (licensePrice.value + privacyPrice.value)));

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

.finalPrice {
  margin-top: 3rem;
  margin-bottom: 2rem;

  h6 {
    margin: 0;
  }

  h4 {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>