<script lang="ts" setup>
import { type IconType } from './types';
import { Bars3Icon, HeartIcon, MinusIcon, PlusIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from "@heroicons/vue/24/outline";
import { ICON_BAG, ICON_BARS, ICON_CART, ICON_FB, ICON_HEART, ICON_MINUS, ICON_PLUS, ICON_TRUCK } from "./constants";
import { FwbFooterIcon } from "flowbite-vue";

interface Props {
  type: IconType;
  color?: string[] | string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const props = defineProps<Props>();
const { type, color, size } = props;

const sizeMapping = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-10 w-10',
};

const iconSize = size ? sizeMapping[size] : 'h-5 w-5';
</script>

<template>
  <Bars3Icon
    v-if="type === ICON_BARS"
    :class="[iconSize, color]"
  />
  <ShoppingBagIcon
    v-if="type === ICON_BAG"
    :class="[iconSize, color]"
  />
  <HeartIcon
    v-if="type === ICON_HEART"
    :class="[iconSize, color]"
  />
  <TruckIcon
    v-if="type === ICON_TRUCK"
    :class="[iconSize, color]"
  />
  <ShoppingCartIcon
    v-if="type === ICON_CART"
    :class="[iconSize, color]"
  />
  <MinusIcon
    v-if="type === ICON_MINUS"
    :class="[iconSize, color]"
  />
  <PlusIcon
    v-if="type === ICON_PLUS"
    :class="[iconSize, color]"
  />
  <fwb-footer-icon href="/">
    <svg v-if="type === ICON_FB" :class="[iconSize, color]" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" :key="'fb-icon'">
      <path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"/>
    </svg>
  </fwb-footer-icon>
</template>
