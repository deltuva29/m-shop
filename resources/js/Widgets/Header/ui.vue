<script lang="ts" setup>
import { Container } from "@/Shared/Container";
import { ICON_BARS } from "@/Shared/Icon/constants";
import { Icon, type IconType } from "@/Shared/Icon";
import { logo, megaMenu } from "@/data/header/data";
import { Navigation } from "@/features/navigation";
import { reactive } from "vue";
import { trans } from "laravel-vue-i18n";

const navItems = reactive<{ icon: IconType, label: string, count: number, link: string }[]>([
  { icon: 'heart', label: trans('Favorites'), count: 0, link: '/' },
  { icon: 'truck', label: trans('Orders'), count: 0, link: '/' },
  { icon: 'cart', label: trans('Cart'), count: 2, link: '/' },
]);

// const { isOpen: isOpenMegaMenu, toggle: toggleMegaMenu, close: closeMegaMenu } = useToggle(false);

</script>

<template>
  <div class="bg-white">
    <Container>
      <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <img :src="logo" class="h-8" alt="M-Shop Logo"/>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              M-Shop
            </span>
            <div class="flex md:order-1 space-x-2">
              <button @click="toggleMegaMenu" v-click-outside="closeMegaMenu" type="button" class="hidden md:block px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all">
              <span class="flex items-center">
                <Icon
                  :type="ICON_BARS"
                />
                <span class="hidden sm:block ms-2">Catalog</span>
              </span>
              </button>

              <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="hidden sm:hidden md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
              </button>
              <div class="relative hidden md:block">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span class="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
              </div>
            </div>
          </div>
          <Navigation
            :data="navItems"
          />
        </div>
        <Transition
          name="fade"
          enter-active-class="transition ease-out duration-100 transform"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75 transform"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div v-show="isOpenMegaMenu" id="mega-menu-full-dropdown" class="absolute top-16 mt-1 z-20 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
            <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
              <ul v-for="item in megaMenu" :key="item.category" aria-labelledby="mega-menu-full-dropdown-button">
                <li v-for="link in item.links" :key="link.label">
                  <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                    <div v-text="link.label" class="font-semibold"></div>
                    <span v-text="link.desc" class="text-sm text-gray-500 dark:text-gray-400"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Transition>
      </nav>
    </Container>
  </div>
</template>

<style scoped>
</style>
