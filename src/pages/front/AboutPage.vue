<template lang="pug">
#about
  q-drawer(v-model="drawer" show-if-above :width="250" :breakpoint="500" bordered)
    q-tabs.text-teal(v-model="tab" vertical)
      q-tab(name="INFO" label="INFO")
      q-tab(name="PROFILE" label="PROFILE")
      q-tab(name="PHOTO" label="PHOTO")
      q-tab(name="VIDEO" label="VIDEO")
      q-tab(name="BEHIND" label="BEHIND")

  q-tab-panels(v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up")
    q-tab-panel(name="INFO")
      .text-h4.q-mb-md INFO
      p 在地球看不到的月球背面，有個玉皇大帝經營的休息站，休息站最熱門的商店"宇宙年糕店"，宇宙年糕店中有銷售一等的功臣—兔兔，因為受不了頻繁的加班，因此興起了逃往地球的念頭。發現兔子寫了辭職信逃往地球的玉皇大帝震怒，下令抓到兔子的人將給予豐厚的獎金。為了得到豐厚的獎金，由四位來自平行宇宙地球的勇士就這樣出動了。

    q-tab-panel(name="PROFILE")
      .text-h4.q-mb-md profile

    q-tab-panel(name="PHOTO")
      .text-h5 最新上傳
      .q-pa-md
        //- :autoplay="{ delay: 2500 }"
        swiper(:modules="modules" navigation :loop="true" :scrollbar="{ draggable: true, hide: true, }"
          :breakpoints="{768: {slidesPerView: 4,spaceBetween: 40}}")
          swiper-slide
            q-img(:src="photos[0].image")
          swiper-slide(v-for="photo in photos[0].images")
            q-img(:src="photo")
      .text-h5 All
        .row.justify-evenly
          a.col-3.cursor-pointer.q-ma-md(v-for="photo in photos" @click="router.push('/about/' + photo._id)")
            q-card.my-card
              q-img(:src='photo.image')
              q-card-section
                .text-subtitle1 {{ photo.name }}
                .text-subtitle2 {{ new Date(photo.date).toLocaleString() }}

    q-tab-panel(name="VIDEO")
      .text-h4.q-mb-md VIDEO
      .text-h5 最新上傳
      .q-pa-md
        //- :autoplay="{ delay: 2500 }"
        swiper(:modules="modules" navigation :loop="true" :scrollbar="{ draggable: true, hide: true, }"
          :breakpoints="{768: {slidesPerView: 4,spaceBetween: 40}}")
          swiper-slide
            q-img(src='https://cdn.quasar.dev/img/parallax1.jpg')
          swiper-slide
            q-img(src='https://cdn.quasar.dev/img/parallax2.jpg')
          swiper-slide
            q-img(src='https://cdn.quasar.dev/img/quasar.jpg')
          swiper-slide
            q-img(src='https://cdn.quasar.dev/img/parallax1.jpg')
          swiper-slide
            q-img(src='https://cdn.quasar.dev/img/parallax2.jpg')
          swiper-slide
            q-img(src='https://cdn.quasar.dev/img/quasar.jpg')

      .text-h5 All
        .row.justify-evenly
          q-card.my-card.col-3.q-ma-md
            q-img(src='https://cdn.quasar.dev/img/parallax2.jpg')
              .absolute-bottom
                .text-h6 Our Changing INFOet
                .text-subtitle2 by John Doe
            q-card-actions
              q-btn(flat) Action 1
              q-btn(flat) Action 2

          q-card.my-card.col-3.q-ma-md
            q-img(src='https://cdn.quasar.dev/img/parallax2.jpg')
              .absolute-bottom
                .text-h6 Our Changing INFOet
                .text-subtitle2 by John Doe
            q-card-actions
              q-btn(flat) Action 1
              q-btn(flat) Action 2

          q-card.my-card.col-3.q-ma-md
            q-img(src='https://cdn.quasar.dev/img/parallax2.jpg')
              .absolute-bottom
                .text-h6 Our Changing Planet
                .text-subtitle2 by John Doe
            q-card-actions
              q-btn(flat) Action 1
              q-btn(flat) Action 2

    q-tab-panel(name="BEHIND")
      .text-h4.q-mb-md BEHIND
  </template>

<script setup>
import { ref, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import Swal from 'sweetalert2'
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'
import 'swiper/css/bundle'

const tab = ref('VIDEO')
const link = ref('INFO')
const drawer = ref(true)
const photos = reactive([])
const router = useRouter()
const modules = [Navigation, Pagination, Scrollbar, Autoplay];

(async () => {
  try {
    const { data } = await api.get('/photos')
    photos.push(...data.result)
    photos.reverse()
    console.log(photos)
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '發生錯誤！'
    })
  }
})()
</script>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  color: aliceblue;
}
</style>
