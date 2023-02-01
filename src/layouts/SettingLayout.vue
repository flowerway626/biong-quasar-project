<template lang="pug">
//- .q-pa-md
q-layout.shadow-2.rounded-borders(view="hHh Lpr lff" container style="height: 100vh")
  q-header.bg-black
    q-toolbar
      q-btn(flat round dense icon="menu" @click="drawer = !drawer")
      q-toolbar-title 會員管理

  q-drawer(v-model="drawer" show-if-above bordered @mouseover="miniState = false" @mouseout="miniState = true"
    :mini="miniState" mini-to-overlay :width="200" :breakpoint="500")
    //- q-img.absolute-top(src="https://cdn.quasar.dev/img/material.png" style="height: 150px")
    .absolute-top.bg-transparent
      q-avatar.q-mb-sm(size="50px")
        //- img(src="https://cdn.quasar.dev/img/boy-avatar.png")
      .d-none
        //- .text-weight-bold Razvan Stoenescu
        //- p @rstoenescu
    q-scroll-area.fit.absolute-top(:horizontal-thumb-style="{ opacity: 0 }" style="height: calc(100vh - 100px);margin-top: 100px")
      q-list(padding)
        q-item(v-ripple clickable to='/setting/')
          q-item-section(avatar)
            q-icon(name="settings")
          q-item-section 基本設定

        q-item(v-ripple clickable to='/setting/cart')
          q-item-section(avatar)
            q-icon(name="shop")
          q-item-section 購物車

        q-item(v-ripple clickable to='/setting/order')
          q-item-section(avatar)
            q-icon(name="list")
          q-item-section 訂單管理

        q-item(v-ripple clickable to='/setting/event')
          q-item-section(avatar)
            q-icon(name="event")
          q-item-section 活動管理

        q-separator

        q-item(v-ripple clickable to='/')
          q-item-section(avatar)
            q-icon(name="home")
          q-item-section 回首頁

  q-page-container
    router-view
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const miniState = ref(true)
</script>
