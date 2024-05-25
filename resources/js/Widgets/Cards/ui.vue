<script setup lang="ts">
import { ProductCard } from "@/entities/product/card";
import { Typography } from "@/Shared/Typography";
import { type CardsProps } from "./types";
import { trans } from "laravel-vue-i18n";

const {data} = defineProps<CardsProps>();
const {
  title = trans("Empty title"),
  listLinkText = trans("Empty list link text"),
  listLinkHref = "/",
  items,
} = data;

</script>

<template>
  <section class="cards">
    <div class="cards__header">
      <Typography
        v-text="title"
        class="header__title title" tagName="h3" bold>
      </Typography>
    </div>
    <div class="cards__list">
      <ProductCard v-for="(product, i) in items" :key="product.name + i" :data="product">
        ...
      </ProductCard>
    </div>
  </section>
</template>
