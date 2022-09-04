<template>
  <div v-show="!loading">
    <div class="flex justify-center items-start">
      <div class="flex column justify-center items-center q-pt-md avatar-column">
        <img src="avatar.png" width="200" height="200" class="moon r-margin" />
        <span class="text-h6 w500 q-mt-lg">{{ about.name }}</span>
        <span class="w200 q-mt-sm">{{ about.title }}</span>
        <div class="flex column q-mt-sm">
          <span v-for="(item, i) in about.contact" :key="i" class="text-caption email text-grey-4">
            {{ item }}
          </span>
        </div>
      </div>

      <div class="flex column flex-center text-column">
        <p class="text-subtitle1 q-mt-lg q-mb-md welcome">Welcome!</p>
        <div class="flex column flex-start q-my-sm">
          <span v-for="(item, i) in about.text" :key="i">
            {{ item }}
            <br v-if="item == ''">
          </span>
        </div>
        <span class="q-mt-md">{{ about.thanks }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  about: {
    type: Object,
    default: () => ({
      name: "",
      title: "",
      contact: [],
      text: [],
      thanks: ""
    })
  },
  loading: {
    type: Boolean,
    default: false,
  }
})
</script>

<style scoped lang="scss">
.welcome {
  font-weight: 500;
}

.avatar-column {
  margin-right: 12px;
}

.text-column {
  margin-left: 12px;
}

span {
  font-weight: 200;
  max-width: 270px;
  line-height: 22px;
}

.moon {
  // border: 5px solid $border;
  box-shadow: 0rem 0.15rem 0.15rem 0.15rem $border;
  border-radius: 100%;
}

.w500 {
  font-weight: 500;
}

.w200 {
  font-weight: 200;
}

.email {
  text-align: center;
  line-height: 18px;
}
</style>