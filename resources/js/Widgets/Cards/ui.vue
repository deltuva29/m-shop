<script setup lang="ts">
import { ProductCard } from "@/entities/product/card";
import { type Card, type CardsProps } from "./types";
import { Typography } from "@/Shared/Typography";
import { Like } from "@/features/like";

const { info, items } = defineProps<CardsProps>();
const emit = defineEmits<{
  (e: 'on-change-card', product: Card): void
}>();

const toggleLike = (product: Card) =>
  emit('on-change-card', {
    ...product, isLiked: !product.isLiked
  });
</script>

<template>
  <section class="cards">
    <div class="cards__header">
      <Typography
        v-text="info.title"
        class="font-extrabold text-2xl my-4 header__title title" tagName="h3" bold>
      </Typography>
      <a :href="info.listLinkHref" v-text="info.listLinkText" class="text-blue-500"></a>
    </div>
    <div class="cards__list">
      <ProductCard
        v-for="(product, i) in items"
        :key="product.name + i"
        :data="product"
        @on-change="(p) => emit('on-change-card', p)"
      >
        <template #headerTopRight>
          <Like
            :isLiked="product.isLiked"
            @click="() => toggleLike(product)"
          />
        </template>
        <template v-if="product.sale" #headerTopLeft>
          <span class="absolute top-2 start-2 z-10">
            <span v-text="`-${product.sale}%`" class="bg-blue-400 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"></span>
          </span>
        </template>
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
  }

  &__list {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    @media (max-width: 600px) {
      gap: 0;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    @media (min-width: 601px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
}
</style>
