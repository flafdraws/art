<template>
  <div class="flex column flex-center">
    <h3 v-if="htmlText.header && htmlText.header !== ''">{{ htmlText.header }}</h3>
    <div class="flex column flex-start content q-mx-md">
      <div v-for="(item, i) in htmlText.body" :key="i"
        :class="`${item.type} ${item.type === 'h4' ? 'self-center' : ''}`">
        <span v-if="item.type === 'span'">{{ item.content }}</span>
        <span v-else-if="item.type === 'format'" v-html="item.content"></span>
        <h5 v-else-if="item.type === 'h5'">
          <q-icon v-if="item.icon" :name="item.icon" :color="item.iconColor"></q-icon>
          {{ item.content }}
        </h5>
        <h6 v-else-if="item.type === 'h6'" class="text-grey-5">{{ item.content }}</h6>
        <h4 v-else-if="item.type === 'h4'">{{ item.content }}</h4>
        <ul v-else-if="item.type === 'ul'">
          <li v-for="(li, j) in item.content" :key="j" v-html="li"></li>
        </ul>
        <ol v-else-if="item.type === 'ol'">
          <li v-for="(li, j) in item.content" :key="j" v-html="li"></li>
        </ol>
        <div v-else-if="item.type === 'breadcrumbs'" class="flex column flex-center text-white q-my-sm">
          <div v-for="(el, j) in item.content" :key="j" class="flex column flex-center">
            <q-icon v-if="j > 0" size="15px" name="arrow_downward" color="grey-7 q-my-xs" />
            <span>{{ el }}</span>
          </div>
        </div>
        <div v-else-if="item.type === 'table'" class="flex flex-center q-my-md">
          <Table :rows="item.content" />
        </div>
        <Gallery v-else-if="item.type === 'gallery'" :items="item.content" />
      </div>
    </div>
  </div>
</template>


<script setup>
import Table from "./Table.vue";
import Gallery from "./Gallery.vue";

const props = defineProps({
  htmlText: {
    type: Object,
    default: () => ({
      header: "",
      body: []
    })
  }
});
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

h3 {
  margin-top: 10px;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 2.8rem;
  text-align: center;
  letter-spacing: 0.25rem;

  @media(max-aspect-ratio: 1/1) and (max-width: 480px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
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
  margin-bottom: 0;
  font-weight: 500;
  font-size: 1.375rem;
  letter-spacing: 0.1rem;

  @media(max-aspect-ratio: 1/1) and (max-width: 480px) {
    font-size: 1.2rem;
  }
}

h6 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 1.06rem;
  letter-spacing: 0.06rem;

  @media(max-aspect-ratio: 1/1) and (max-width: 480px) {
    font-size: 1rem;
  }
}

ul,
ol {
  padding-left: 20px;
  padding-right: 5px;
  margin: 0;
  letter-spacing: 0.0375rem;
}

.span,
.format,
.breadcrumbs {
  margin-bottom: 10px;
  letter-spacing: 0.03125rem;
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