<script lang="ts" setup>
import { type IconType } from './types';
import { MinusIcon, PlusIcon, ShoppingBagIcon } from "@heroicons/vue/24/outline";
import { ICON_CART, ICON_MINUS, ICON_PLUS } from "./constants";

interface Props {
  type: IconType;
}

const props = defineProps<Props>();
const { type } = props;
</script>

<template>
  <ShoppingBagIcon
    v-if="type === ICON_CART"
    class="h-5 w-5"/>
  <MinusIcon
    v-if="type === ICON_MINUS"
    class="h-5 w-5"/>
  <PlusIcon
    v-if="type === ICON_PLUS"
    class="h-5 w-5"/>
</template>
