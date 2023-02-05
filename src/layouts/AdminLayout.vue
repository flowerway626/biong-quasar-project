<template lang="pug">
//- .q-pa-md
q-layout.shadow-2.rounded-borders(view="hHh Lpr lff" container style="height: 100vh")
  q-header.bg-black
    q-toolbar
      q-btn(flat round dense icon="menu" @click="drawer = !drawer")
      q-toolbar-title 管理員設定

  q-drawer(v-model="drawer" show-if-above bordered :width="200" :breakpoint="500")

    q-scroll-area.fit.absolute-top(:horizontal-thumb-style="{ opacity: 0 }" style="height: calc(100vh - 130px);margin-top: 130px")
      q-list(padding)
        q-item(v-ripple clickable :active="link === 'settings'" @click="link = 'settings'" active-class="menu-link" to='/admin')
          q-item-section(avatar)
            q-icon(name="settings")
          q-item-section 會員管理

        q-item(v-ripple clickable :active="link === 'shop'" @click="link = 'shop'" active-class="menu-link" to='/admin/page')
          q-item-section(avatar)
            q-icon(name="shop")
          q-item-section 頁面管理

        q-item(v-ripple clickable :active="link === 'product'" @click="link = 'product'" active-class="menu-link" to='/admin/product')
          q-item-section(avatar)
            q-icon(name="product")
          q-item-section 商品管理

        q-item(v-ripple clickable :active="link === 'list'" @click="link = 'list'" active-class="menu-link" to='/admin/order')
          q-item-section(avatar)
            q-icon(name="list")
          q-item-section 訂單管理

        q-item(v-ripple clickable :active="link === 'event'" @click="link = 'event'" active-class="menu-link" to='/admin/data')
          q-item-section(avatar)
            q-icon(name="event")
          q-item-section 資料統計

        q-item(v-ripple clickable :active="link === 'home'" @click="link = 'home'" active-class="menu-link" to='/')
          q-item-section(avatar)
            q-icon(name="home")
          q-item-section 回首頁

    .absolute-top(style="height: 130px")
      .absolute-bottom.bg-transparent
          q-avatar.q-mb-sm.q-ml-md(size="50px")
            img(:src="avatar")
          .flex.justify-between.q-mx-md.items-end
            .text-h6.text-weight-bold {{ account }}
            q-btn(label="登出" size="sm" color="warning" flat @click="logout" to="/")
  q-page-container
    router-view
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from 'src/stores/user'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const user = useUserStore()
const route = useRoute()
const { logout } = user
const { account, avatar, currentRoute } = storeToRefs(user)
const drawer = ref(false)
const link = route.name
</script>

<style lang="sass">
.menu-link
  font-weight: 600
  color: black
  background: linear-gradient(90deg, #53C2BA 0%, #C0538A 100%)
</style>
