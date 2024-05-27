<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import { Header } from "@/Widgets/Header";
import { Container } from "@/Shared/Container";
import { Content } from "@/Shared/Content";
import { Cards } from "@/Widgets/Cards";
import { Footer } from "@/Widgets/Footer";
import { trans } from 'laravel-vue-i18n';
import { MainCarousel } from "@/features/main-carousel";

import { saleInfo, saleItems } from '@/data/cards/data';
</script>

<template>
  <Head :title="trans('Welcome')"/>
  <Header/>
  <MainCarousel/>
  <Content>
    <Container>
      <Cards
        :info="saleInfo"
        :items="saleItems"
      />
    </Container>
  </Content>
  <Footer/>
</template>

<style scoped>

</style>
