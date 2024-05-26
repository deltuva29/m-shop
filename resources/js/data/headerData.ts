import { reactive } from "vue";
import { trans } from "laravel-vue-i18n";
import type { IconType } from "@/Shared/Icon";

interface UserProfile {
  name: string;
  email: string;
}

export const logo = 'https://flowbite.com/docs/images/logo.svg';

export const userMenu = reactive<{ icon: IconType, label: string, href: string }[]>([
  { icon: 'heart', label: trans('Favorites'), href: '/' },
  { icon: 'truck', label: trans('Orders'), href: '/' },
  { icon: 'cart', label: trans('Cart'), href: '/' },
]);

export const avatar = 'https://xsgames.co/randomusers/avatar.php?g=female&name=Mindaugas';

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
