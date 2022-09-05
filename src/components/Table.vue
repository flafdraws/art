<template>
  <table v-if="rows && rows.length > 0" class="expand">
    <tr>
      <th v-for="(item, i) in rows[0]" :key="i">{{ item }}</th>
    </tr>
    <tr v-for="(row, i) in rows" :key="i">
      <td v-if="i>0" v-for="(column, j) in row" :key="j">{{ column }}</td>
    </tr>
  </table>
</template>


<script setup>
const props = defineProps({
  rows: {
    type: Array,
    default: () => ([])
  }
});
</script>


<style scoped lang="scss">
.expand {
  text-align: start;
  width: 100%;
}

td {
  padding: 5px 0px 5px 5px;
  border-top: 2px solid $dark3;
}

tr:nth-child(3)>td {
  padding-top: 10px;
}

tr:not(:nth-child(3))>td {
  border-top: 2px solid $dark2;
  ;
}

th {
  padding: 10px 5px 10px 5px;
  text-align: start;
  border-bottom: 2px solid $grey-10;
}

table {
  border-collapse: collapse;
}

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  .expand {
    font-size: 0.8rem;
  }
}
</style>