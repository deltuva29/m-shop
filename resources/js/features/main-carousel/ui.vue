<script lang="ts" setup>
import { Carousel, Slide } from 'vue3-carousel';
import { Typography } from '@/Shared/Typography';

import desktopBg from '@/assets/slides/slider-bg-1.jpg';
import tabletBg from '@/assets/slides/slider-bg-1.jpg';
import mobileBg from '@/assets/slides/slider-bg-1.jpg';
import { trans } from "laravel-vue-i18n";

const slides = [
  {
    background: {
      desktop: desktopBg,
      tablet: tabletBg,
      mobile: mobileBg,
    },
    text: trans('Free delivery, over 50 €'),
  },
  {
    background: {
      desktop: desktopBg,
      tablet: tabletBg,
      mobile: mobileBg,
    },
    text: trans('Black Friday'),
  },
  {
    background: {
      desktop: desktopBg,
      tablet: tabletBg,
      mobile: mobileBg,
    },
    text: trans('New arrivals'),
  },
];
</script>

<template>
  <carousel class="carousel" :items-to-show="1" :wrapAround="true" :autoplay="6000">
    <slide v-for="slide in slides" :key="slide.text">
      <div class="slide">
        <picture>
          <source
            class="slide__background"
            :srcset="slide.background.mobile"
            media="(max-width: 767px)"
          />
          <source
            class="slide__background"
            :srcset="slide.background.tablet"
            media="(max-width: 1207px)"
          />
          <img class="slide__background"
               :src="slide.background.desktop"
               alt="Slide Background"
          />
        </picture>
        <Typography
          v-html="slide.text"
          class="slide__text"
          tagName="h2"
          bold
        ></Typography>
      </div>
    </slide>
  </carousel>
</template>

<style lang="scss" scoped>
.slide {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__text {
    margin-left: 20%;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    user-select: none;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 1207px) {
    height: 160px;

    &__text {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 767px) {
    height: 80px;

    &__text {
      margin-left: 0;
      font-size: 18px;
    }
  }
}
</style>
