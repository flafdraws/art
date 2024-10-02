<template>
  <q-parallax :src="bannerSrc" :height="bannerHeight">
    <div class="flex column items-center">
      <p class="banner header-minor q-pa-none q-ma-none">Art of</p>
      <p class="banner header-major q-pa-none q-ma-none">Flaf</p>
      <div class="flex items-center row q-pa-none q-pa-none">
        <q-icon name="email" class="q-mx-xs" size="sm"></q-icon>
        <span flat class="q-mx-xs mailbtn " @click="copyToClipboard(email)">flafdraws.buy@gmail.com</span>
      </div>
    </div>
  </q-parallax>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { Screen, useQuasar } from 'quasar';

const props = defineProps({
  bannerSrc: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  }
});

const $q = useQuasar();

const bannerHeight = computed(() => {
  return Math.min(Screen.height * 0.4, 450);
});

const copyToClipboard = async function copyTextToClipboard(email) {
  try {
    await navigator.clipboard.writeText(email);
    $q.notify({
      message: 'Copied to clipboard.',
      caption: email,
      color: 'secondary',
      position: 'top',
      timeout: 1000
    });
  } catch (err) {
    console.error(err.name, err.message);
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: $dark2;
}

.ring {
  border: 5px solid $border;
  border-radius: 100%;
}

.banner {
  text-shadow: 2px 2px 4px black;
}

.mailbtn {
  font-size: 16px;
  text-transform: lowercase;
  font-weight: 400;
  text-shadow: 2px 2px 8px black, 2px 2px 8px black, 2px 2px 8px black;
}

.header-minor {
  font-size: 4.5vh;
  font-weight: 400;
  line-height: 4.5vh;
}

.header-major {
  font-size: 9vh;
  font-weight: 700;
  line-height: 9vh;
}

.x-margin {
  margin-left: 18px;
  margin-right: 18px;
}

.l-margin {
  margin-left: 14px;
}

.r-margin {
  margin-right: 14px;
}
</style>