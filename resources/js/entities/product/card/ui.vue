<script setup lang="ts">
import { type Card } from "./types";
import { trans } from "laravel-vue-i18n";

const props = defineProps<{ data: Card }>();
const {
  img,
  name = trans("Empty product name"),
  price,
  priceWithSale,
} = props.data;

</script>

<template>
  <article
    class="product-card"
  >
    <div class="product-card__header header">
      <img
        :src="img"
        alt="product image"
        class="header__img"
      />
      <span v-text="name"></span>
      <span v-text="price"></span>
      <span v-text="priceWithSale"></span>
    </div>
  </article>
</template>

<style scoped>
</style>
