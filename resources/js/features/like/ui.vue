<script setup lang="ts">
import { Icon } from "@/Shared/Icon";
import { ICON_HEART } from "@/Shared/Icon/constants";

interface Props {
  isLiked?: boolean;
}

defineProps<Props>();
</script>

<template>
  <span class="absolute top-2 end-2 z-10">
    <button :class="['like', isLiked && 'is-liked']">
      <Icon
        :type="ICON_HEART"
        :color="['like', isLiked && 'is-liked']"
        size="md"
      />
    </button>
  </span>
</template>

<style lang="postcss" scoped>
.like {
  @apply text-gray-400;
}

.is-liked {
  @apply text-blue-500;
}
</style>
