import { reactive } from "vue";
import { trans } from "laravel-vue-i18n";
import type { IconType } from "@/Shared/Icon";

export const myShop = {
  name: 'M-Shop',
  url: 'https://dev-m-shop.desoftlab.com',
};

export const links = reactive([
  {
    category: trans('Resources'),
    links: [
      { label: trans('Flowbite'), href: '/' },
      { label: trans('Tailwind CSS'), href: '/' },
    ]
  },
  {
    category: trans('Follow us'),
    links: [
      { label: trans('Follow us'), href: '/' },
      { label: trans('Discord'), href: '/' },
    ]
  },
  {
    category: trans('Legal'),
    links: [
      { label: trans('Privacy Policy'), href: '/' },
      { label: trans('Terms & Conditions'), href: '/' },
    ]
  },
]);

export const socials = reactive<{ icon: IconType, href: string }[]>([
  { icon: 'x', href: '/' },
  { icon: 'instagram', href: '/' },
  { icon: 'fb', href: '/' },
]);

export const logo = 'https://flowbite.com/docs/images/logo.svg';

export const copyright = {
  label: 'desoftlab',
  href: 'https://desoftlab.com'
};
