<script lang="ts" setup>
import { type IconType } from './types';
import { MinusIcon, PlusIcon, ShoppingBagIcon } from "@heroicons/vue/24/outline";

interface Props {
  type: IconType;
}

const props = defineProps<Props>();
const {type} = props;
</script>

<template>
  <ShoppingBagIcon
    v-if="type === 'cart'"
    class="h-5 w-5"/>
  <MinusIcon
    v-if="type === 'minus'"
    class="h-5 w-5"/>
  <PlusIcon
    v-if="type === 'plus'"
    class="h-5 w-5"/>
</template>
