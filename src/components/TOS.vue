<template>
  <div class="flex column flex-center">
    <h3>{{ tos.header }}</h3>
    <div class="flex column flex-start content q-mx-md">
      <div v-for="(item, i) in tos.body" :key="i" :class="`${item.type} ${item.type == 'h4' ? 'self-center' : ''}`">
        <span v-if="item.type == 'span'">{{ item.content }}</span>
        <span v-else-if="item.type == 'format'" v-html="item.content"></span>
        <h5 v-else-if="item.type == 'h5'">{{ item.content }}</h5>
        <h6 v-else-if="item.type == 'h6'" class="text-grey-5">{{ item.content }}</h6>
        <h4 v-else-if="item.type == 'h4'">{{ item.content }}</h4>
        <ul v-else-if="item.type == 'ul'">
          <li v-for="(li, j) in item.content" :key="j">{{ li }}</li>
        </ul>
        <div v-else-if="item.type == 'breadcrumbs'" class="flex column flex-center text-white q-my-sm">
          <div v-for="(el, j) in item.content" :key="j" class="flex column flex-center">
            <q-icon v-if="j > 0" size="15px" name="arrow_downward" color="grey-7 q-my-xs" />
            <span>{{ el }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  tos: {
    type: Object,
    default: () =>({
      header: "TERMS OF SERVICE",
      body: {}
    })
  }
});
</script>


<style scoped lang="scss">
.content {
  max-width: 700px;
  font-weight: 200;
  font-size: 15px;
}

h3 {
  margin-top: 10px;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 45px;
  text-align: center;
}

h4 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
}

h5 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 22px;
}

h6 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 17px;
}

ul {
  margin: 0;
}

.span,
.format,
.breadcrumbs {
  margin-bottom: 10px;
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