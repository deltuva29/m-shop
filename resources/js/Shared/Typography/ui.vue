<script lang="ts" setup>
interface Props {
  tagName: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  bold?: boolean;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const props = defineProps<Props>();
</script>

<template>
  <component
    :is="props.tagName"
    :class="['typography', size ? `size_${size}` : '' , bold ? 'bold' : '', `tag_${tagName}`]"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
</style>
