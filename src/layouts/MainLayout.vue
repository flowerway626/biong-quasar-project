<template lang="pug">
#home
  q-layout
    q-header.bg-primary.text-white
      q-toolbar
        q-btn(round float to="/")
          q-avatar
            img(src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg")
        q-toolbar-title Title
        .q-gutter-x-sm
          q-btn(icon="mdi-home-account" flat round to='/about')
            q-tooltip(anchor="bottom middle" self="top middle") ABOUT
          q-btn(icon="mdi-newspaper" flat round to='/news')
            q-tooltip(anchor="bottom middle" self="top middle") NEWS
          q-btn(icon="mdi-calendar" flat round to='/event')
            q-tooltip(anchor="bottom middle" self="top middle") EVENT
          q-btn(icon="mdi-cart" flat round to='/shopping')
            q-tooltip(anchor="bottom middle" self="top middle") SHOPPING
          q-btn(v-if="isLogin && !isAdmin" icon="mdi-cog" flat round to='/setting')
            q-tooltip(anchor="bottom middle" self="top middle") SETTING
          q-btn(v-if="isLogin && isAdmin" icon="mdi-cog" flat round to='/admin')
            q-tooltip(anchor="bottom middle" self="top middle") SETTING
          q-btn(v-if="!isLogin" icon="login" flat round to='/login')
            q-tooltip(anchor="bottom middle" self="top middle") SIGN IN
          q-btn.q-mr-sm(v-if="isLogin" icon="logout" flat round @click="logout")
            q-tooltip(anchor="bottom middle" self="top middle") SIGN OUT
        q-space
    q-page-container
      router-view
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const user = useUserStore()
const { isLogin, isAdmin } = storeToRefs(user)
const { logout } = user
const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
