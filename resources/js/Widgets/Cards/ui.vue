<script setup lang="ts">
import { ProductCard } from "@/entities/product/card";
import { type CardsProps } from "./types";

const { info, items } = defineProps<CardsProps>();
</script>

<template>
  <section class="cards">
    <div class="cards__header">
      <!--      <Typography-->
      <!--        v-text="info.title"-->
      <!--        class="header__title title" tagName="h3" bold>-->
      <!--      </Typography>-->
    </div>
    <div class="cards__list">
      <ProductCard v-for="(product, i) in items" :key="product.name + i" :data="product">
        ...
      </ProductCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cards {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  &__list {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    @media (max-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    @media (min-width: 601px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
}
</style>
