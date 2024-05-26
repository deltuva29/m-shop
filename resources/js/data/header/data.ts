import { reactive } from "vue";
import { trans } from "laravel-vue-i18n";
import type { UserProfile } from "./types";

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

export const megaMenu = reactive<{ category: string, links: { label: string, desc: string, href: string }[] }[]>([
  {
    category: trans('Online Stores'),
    links: [
      {
        label: trans('Online Stores'),
        desc: trans('Connect with third-party tools that you\'re already using.'),
        href: '/'
      },
      {
        label: trans('Online Stores'),
        desc: trans('Connect with third-party tools that you\'re already using.'),
        href: '/'
      },
      {
        label: trans('Audience Management'),
        desc: trans('Connect with third-party tools that you\'re already using.'),
        href: '/'
      },
    ]
  },
  {
    category: trans('Segmentation'),
    links: [
      {
        label: trans('Segmentation'),
        desc: trans('Connect with third-party tools that you\'re already using.'),
        href: '/'
      },
      {
        label: trans('Segmentation'),
        desc: trans('Connect with third-party tools that you\'re already using.'),
        href: '/'
      },
      {
        label: trans('Creative Tools'),
        desc: trans('Connect with third-party tools that you\'re already using.'),
        href: '/'
      },
    ]
  },
  {
    category: trans('Marketing CRM'),
    links: [
      {
        label: trans('Marketing CRM'),
        desc: trans('Connect with third-party tools that you\'re already using.'),
        href: '/'
      },
      {
        label: trans('Marketing CRM'),
        desc: trans('Connect with third-party tools that you\'re already using.'),
        href: '/'
      },
      {
        label: trans('Marketing Automation'),
        desc: trans('Connect with third-party tools that you\'re already using.'),
        href: '/'
      },
    ]
  },
]);
