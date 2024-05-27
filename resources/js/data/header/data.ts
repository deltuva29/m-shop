import { reactive } from "vue";
import { trans } from "laravel-vue-i18n";
import type { UserProfile } from "./types";
import type { IconType } from "@/Shared/Icon";

export const logo = 'https://flowbite.com/docs/images/logo.svg';

export const avatar = 'https://xsgames.co/randomusers/avatar.php?g=male&name=Mindaugas';

export const userProfile: UserProfile = {
  name: 'Mindaugas',
  email: 'deltuva.mindaugas@gmail.com',
};

export const dropdownMenu = reactive<{ label: string, href: string }[]>([
  { label: trans('Dashboard'), href: '/' },
  { label: trans('Orders'), href: '/' },
  { label: trans('Settings'), href: '/' },
  { label: trans('Sign out'), href: '/' },
]);

export const navItems = reactive<{ icon: IconType, label: string, count: number, link: string }[]>([
  { icon: 'heart', label: trans('Favorites'), count: 0, link: '/' },
  { icon: 'truck', label: trans('Orders'), count: 0, link: '/' },
  { icon: 'cart', label: trans('Cart'), count: 2, link: '/' },
]);

export const megaMenuItems = reactive<{ category: string, subcategories: { subcategory: string, subSubCategories: { subSubCategory: string, links: { label: string, href: string }[] }[] }[] }[]>([
  {
    category: trans('Online Stores'),
    subcategories: [
      {
        subcategory: trans('Electronics'),
        subSubCategories: [
          {
            subSubCategory: trans('Mobile Phones'),
            links: [
              { label: trans('iPhone'), href: '/' },
              { label: trans('Samsung'), href: '/' },

            ]
          },
          {
            subSubCategory: trans('Laptops'),
            links: [
              { label: trans('MacBook'), href: '/' },
              { label: trans('Dell'), href: '/' },
            ]
          },
        ]
      },
    ]
  },
]);
