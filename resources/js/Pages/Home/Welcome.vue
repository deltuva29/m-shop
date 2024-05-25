<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import { Header } from "@/Widgets/Header";
import { Container } from "@/Shared/Container";
import { Content } from "@/Shared/Content";
import { Cards } from "@/Widgets/Cards";
import { trans } from 'laravel-vue-i18n';

import { saleCards } from '@/data/saleCardsData';
</script>

<template>
  <Head :title="trans('Welcome')"/>
  <Header/>
  <Content>
    <Container>
      <Cards
        :data="saleCards.data"
      />
    </Container>
  </Content>
</template>

<style scoped>

</style>
