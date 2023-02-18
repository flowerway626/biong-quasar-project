<template lang="pug">
swiper.mySwiper2( :loop='true' :spacebetween='10' :navigation='true' :thumbs='{ swiper: thumbsSwiper }' :modules='modules')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-1.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-2.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-3.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-4.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-5.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-6.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-7.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-8.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-9.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-10.jpg')
swiper.mySwiper(@swiper='setThumbsSwiper' :loop='true' :spacebetween='10' :slidesperview='4' :freemode='true' :watchslidesprogress='true' :modules='modules')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-1.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-2.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-3.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-4.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-5.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-6.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-7.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-8.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-9.jpg')
  swiper-slide
    img(src='https://swiperjs.com/demos/images/nature-10.jpg')
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, FreeMode, Thumbs } from 'swiper'
import 'swiper/css/bundle'
let thumbsSwiper = null
const setThumbsSwiper = (swiper) => {
  thumbsSwiper = swiper
}

const modules = [Navigation, Pagination, Scrollbar, FreeMode, Thumbs]
</script>

<style lang="scss">

</style>
