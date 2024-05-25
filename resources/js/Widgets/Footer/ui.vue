<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';
import { Container } from "@/Shared/Container";
import { copyright, links, logo, myShop, socials } from "@/data/footerData";
import { FwbFooter, FwbFooterBrand, FwbFooterCopyright, FwbFooterLink, FwbFooterLinkGroup, } from 'flowbite-vue';
import { Icon } from '@/Shared/Icon';
</script>

<template>
  <fwb-footer footer-type="socialmedia">
    <Container>
      <div class="md:flex md:justify-between">
        <fwb-footer-brand
          alt="M-Shop Logo" :href="myShop.url"
          :name="myShop.name"
          :src="logo"
        />
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div v-for="category in links" :key="category.category">
            <h2 v-text="category.category" class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            </h2>
            <fwb-footer-link-group class="flex flex-col items-start">
              <fwb-footer-link
                v-for="link in category.links"
                :key="link.label"
                :href="link.href"
                v-text="link.label"
                class="mb-4"
              >
              </fwb-footer-link>
            </fwb-footer-link-group>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <fwb-footer-copyright
          :by="copyright.label"
          :href="copyright.href"/>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <Link
            v-for="social in socials" :key="social.icon"
            :href="`#`"
            class="rounded-md px-1 py-2"
          >
            <Icon :type="social.icon"/>
          </Link>
        </div>
      </div>
    </Container>
  </fwb-footer>
</template>

<style scoped>
</style>
