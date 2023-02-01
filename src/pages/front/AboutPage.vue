<template lang="pug">
#about
  //- q-drawer(v-model="drawer" show-if-above :width="300" :breakpoint="500" bordered)
        q-scroll-area.fit
          q-list
            q-item(clickable v-ripple :active="link === 'plan'" @click="link = 'plan'" active-class="currentLink")
              q-item-section(avatar)
                q-icon(name="plan")
              q-item-section plan

            q-item(clickable v-ripple :active="link === 'profile'" @click="link = 'profile'" active-class="currentLink")
              q-item-section(avatar)
                q-icon(name="mdi-profile")
              q-item-section profile

            q-item(clickable v-ripple :active="link === 'camera-burst'" @click="link = 'camera-burst'" active-class="currentLink")
              q-item-section(avatar)
                q-icon(name="mdi-camera-burst")
              q-item-section camera-burst

            q-item(clickable v-ripple :active="link === 'video'" @click="link = 'video'" active-class="currentLink")
              q-item-section(avatar)
                q-icon(name="mdi-video")
              q-item-section video

            q-item(clickable v-ripple :active="link === 'behind'" @click="link = 'behind'" active-class="currentLink")
              q-item-section(avatar)
                q-icon(name="mdi-video-account")
              q-item-section behind

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

    p
  q-tab-panel(name="PROFILE")
    .text-h4.q-mb-md profile

  q-tab-panel(name="PHOTO")
    .text-h5 最新上傳
    .q-pa-md
      q-carousel(animated v-model="slide" arrows navigation infinite)
        q-carousel-slide(:name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg")
        q-carousel-slide(:name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg")
        q-carousel-slide(:name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg")
        q-carousel-slide(:name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg")
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

  q-tab-panel(name="VIDEO")
    .text-h4.q-mb-md VIDEO

  q-tab-panel(name="BEHIND")
    .text-h4.q-mb-md BEHIND
  </template>

<script setup>
import { ref } from 'vue'

const tab = ref('INFO')
const link = ref('INFO')
const slide = ref(1)
</script>
