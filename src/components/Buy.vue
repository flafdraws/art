<template>
  <div class="flex column flex-center q-mx-md">
    <div class="flex column flex-start content">

      <q-form @submit="clearCommission" :action="buy.formUrl" method="post" target="_blank">

        <h4>COMMISSION FORM</h4>
        <div class="mega-spacer"></div>

        <h5>Contact Info</h5>
        <InputText ref="nameInput" v-model="buy.customer.nickname" :rules="nameRules" />
        <InputText ref="emailInput" v-model="buy.customer.email" :rules="emailRules" />
        <InputText v-model="buy.customer.social" />
        <div class="mega-spacer"></div>

        <h5>Commission Details</h5>
        <RadioCards v-model="buy.commission.size.value" :options="buy.commission.size.options" />

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
import InputText from './InputText.vue';
import BuyNotes from './BuyNotes.vue';
import BuyButton from "./BuyButton.vue";
import RadioCards from "./RadioCards.vue";

const props = defineProps({
  buy: {
    type: Object,
    default: () => ({
      fees: {},
      formUrl: "",
      customer: {
        nickname: {
          name: "",
          value: "",
          label: "",
          placeholder: "",
          hint: ""
        },
        email: {
          name: "",
          value: "",
          label: "",
          placeholder: "",
          hint: ""
        },
        social: {
          name: "",
          value: "",
          label: "",
          placeholder: "",
          hint: ""
        },
      },
      commission: {
        size: {
          name: "",
          value: "",
          options: []
        }
      }
    })
  }
});

const nameInput = ref(null);
const emailInput = ref(null);

const nameRules = [v => !!v || 'Name is required', v => v.length <= 64 || 'Name must be less than 10 characters',];
const emailRules = [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid',];
const radioRules = [v => !!v || "You must choose an option."];
const briefingTextRules = [v => !!v || "The job must be described.", v => v.length <= 2000];
const referenceTextRules = [v => !!v || "We need references to define a goal.", v => v.length <= 1000];
const paragraphRules = [v => v.length <= 512]

const fieldsToValidate = [nameInput, emailInput];
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
  margin-top: 5px;
  margin-bottom: 5px;
}

.big-spacer {
  margin-top: 25px;
}

.mega-spacer {
  margin-top: 45px;
}
</style>