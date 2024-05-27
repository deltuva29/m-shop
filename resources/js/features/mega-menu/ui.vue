<script lang="ts" setup>
import { type Props } from "@/features/mega-menu/types";
import { Container } from "@/Shared/Container";

const { data } = defineProps<Props>();

</script>

<template>
  <div>
    <Transition
      name="fade"
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-show="isOpen" id="mega-menu-full-dropdown" class="w-full absolute top-16 left-0 mt-1 z-20 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
        <Container>
          <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul v-for="item in data" :key="item.category" aria-labelledby="mega-menu-full-dropdown-button">
              <li v-for="subItem in item.subcategories" :key="subItem.subcategory">
                <div v-text="subItem.subcategory" class="font-semibold"></div>
                <ul v-for="subSubItem in subItem.subSubCategories" :key="subSubItem.subSubCategory">
                  <li v-for="link in subSubItem.links" :key="link.label">
                    <a href="#" class="block mb-0.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div v-text="link.label" class="text-sm font-normal"></div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
</style>
