<script lang="ts" setup>
import { avatar, dropdownMenu, userProfile } from "@/data/header/data";
import { Icon, type IconType } from "@/Shared/Icon";
import { useToggle } from "@/composobles/useToggle";

interface Props {
  data: {
    label: string;
    icon: IconType;
    count: number;
    link: string;
  }[]
}

const { data } = defineProps<Props>();
const {
  isOpen: isOpenMenu,
  toggle: toggleMenu,
  close: closeMenu
} = useToggle(false);

</script>

<template>
  <div class="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <div id="cart-menu" v-click-outside="closeMenu" class="items-center justify-between font-medium w-full md:flex md:w-auto md:order-1">
      <nav class="header-navigation">
        <ul class="flex flex-row p-4 md:p-0 mt-4 border-0 border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li v-for="item in data" :key="item.icon" class="hidden md:block">
            <a href="#" class="relative flex flex-col items-center space-y-0.5 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-all" aria-current="page">
              <Icon
                :type="item.icon"
              />
              <span v-text="item.label" class="hidden sm:block text-xs"></span>
              <div v-if="item.count > 0" v-text="item.count" class="absolute inline-flex items-center justify-center px-1.5 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"></div>
            </a>
          </li>
          <button @click="toggleMenu" class="flex items-center text-sm rounded-full md:me-0 focus:ring-0 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" :src="avatar" alt="user photo">
          </button>
        </ul>
      </nav>
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
      <div v-show="isOpenMenu" class="absolute top-10 -end-2 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
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
</template>

<style scoped>
</style>
