<script lang="ts" setup>
import { Container } from "@/Shared/Container";
import { ICON_BARS, ICON_CART } from "@/Shared/Icon/constants";
import { Icon } from "@/Shared/Icon";
import { avatar, dropdownMenu, logo, userMenu, userProfile } from "@/data/headerData";
import { ref } from "vue";

const isOpenDropdownMenu = ref<boolean>(false);
const isOpenMegaMenu = ref<boolean>(false);

const toggleDropdownMenu = () => {
  isOpenDropdownMenu.value = !isOpenDropdownMenu.value;
};

const closeDropdownMenu = () => {
  if (isOpenDropdownMenu.value) {
    isOpenDropdownMenu.value = false;
  }
};

const toggleMegaMenu = () => {
  isOpenMegaMenu.value = !isOpenMegaMenu.value;
};

const closeMegaMenu = () => {
  if (isOpenMegaMenu.value) {
    isOpenMegaMenu.value = false;
  }
};
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
              <button @mouseenter="toggleMegaMenu" v-click-outside="closeMegaMenu" type="button" class="hidden md:block px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all">
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
          <div class="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div id="cart-menu" class="items-center justify-between font-medium w-full md:flex md:w-auto md:order-1">
              <ul class="flex flex-row p-4 md:p-0 mt-4 border-0 border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li v-for="item in userMenu" :key="item.icon" class="hidden md:block">
                  <a href="#" class="relative flex flex-col items-center space-y-0.5 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-all" aria-current="page">
                    <Icon
                      :type="item.icon"
                    />
                    <span v-text="item.label" class="hidden sm:block text-xs"></span>
                    <div v-if="item.icon === ICON_CART" class="absolute inline-flex items-center justify-center px-1.5 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">2</div>
                  </a>
                </li>
                <button @click="toggleDropdownMenu" v-click-outside="closeDropdownMenu" class="flex items-center text-sm rounded-full md:me-0 focus:ring-0 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" :src="avatar" alt="user photo">
                </button>
              </ul>
            </div>
            <!-- Dropdown menu -->
            <Transition
              name="fade"
              enter-active-class="transition ease-out duration-100 transform"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75 transform"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div v-show="isOpenDropdownMenu" class="absolute top-10 -end-2 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div class="px-4 py-3">
                  <span v-text="userProfile.name" class="block font-bold text-sm text-gray-900 dark:text-white"></span>
                  <span v-text="userProfile.email" class="block text-sm  text-gray-500 truncate dark:text-gray-400"></span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li v-for="item in dropdownMenu" :key="item.label">
                    <a href="#" v-text="item.label" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"></a>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        </div>
        <div v-show="isOpenMegaMenu" id="mega-menu-full-dropdown" class="absolute top-16 mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
          <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul aria-labelledby="mega-menu-full-dropdown-button">
              <li>
                <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="font-semibold">Online Stores</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="font-semibold">Segmentation</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="font-semibold">Marketing CRM</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="font-semibold">Online Stores</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="font-semibold">Segmentation</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="font-semibold">Marketing CRM</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
            </ul>
            <ul class="hidden md:block">
              <li>
                <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="font-semibold">Audience Management</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="font-semibold">Creative Tools</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="font-semibold">Marketing Automation</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  </div>
</template>

<style scoped>
</style>
