<template>
  <div class="flex justify-center items-start">
    <div class="flex column justify-center items-center q-pt-md column-margin">
      <img :src="about.avatar" width="200" height="200" class="avatar" />
      <span class="name">{{ about.name }}</span>
      <span class="title">{{ about.title }}</span>
      <div class="flex column q-mt-sm q-mb-md">
        <span v-for="(item, i) in about.contact" :key="i" class="contact text-grey-4">
          {{ item }}
        </span>
      </div>
    </div>

    <div class="flex column flex-center column-margin">
      <p class="text-subtitle1 q-mt-lg q-mb-sm welcome">Welcome!</p>
      <div class="flex column flex-start q-my-sm">
        <span v-html="about.text"></span>
      </div>
      <span class="q-mt-md">{{ about.thanks }}</span>
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
      thanks: "",
      avatar: "https://raw.githubusercontent.com/flafdraws/gallery/main/ui/avatar.jpg"
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

.column-margin {
  margin-right: 12px;
  margin-left: 12px;
}

span {
  font-weight: 300;
  max-width: 300px;
  line-height: 22px;
  letter-spacing: 0.6px;
}

.avatar {
  box-shadow: 0rem 0.15rem 0.15rem 0.15rem $border;
  border-radius: 100%;
}

.name {
  font-size: 25px;
  font-weight: 500;
  margin-top: 25px;
  letter-spacing: 3px;
}

.title {
  color: $primary;
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
  letter-spacing: 1px;
}

.contact {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  line-height: 18px;

}
</style>