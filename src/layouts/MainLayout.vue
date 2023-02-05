<template lang="pug">
#home
  q-layout
    q-header.text-white(reveal=true style="background: #0004!important")
      q-toolbar.q-py-sm
        q-btn(label="INDEX" float to="/")
        q-btn(label="ABOUT" flat to='/about')
        q-btn(label="NEWS" flat to='/news')
        q-btn(label="SHOPPING" flat to='/shopping')
        q-btn(label="EVENT" flat to='/event')
        q-space

        q-btn(v-if="isLogin && !isAdmin" icon="mdi-cart" flat round to='/setting/cart')
          q-badge(floating round color="secondary") {{ cart }}
          q-tooltip(anchor="bottom middle" self="top middle") Cart

        q-btn(v-if="isLogin && !isAdmin" icon="mdi-cog" flat round to='/setting')
          q-tooltip(anchor="bottom middle" self="top middle") SETTING

        q-btn(v-if="isLogin && isAdmin" icon="mdi-cog" flat round to='/admin')
          q-tooltip(anchor="bottom middle" self="top middle") SETTING

        q-btn(v-if="!isLogin" icon="login" flat round to='/login')
          q-tooltip(anchor="bottom middle" self="top middle") SIGN IN

        q-btn.q-mr-sm(v-if="isLogin" icon="logout" flat round @click="logout")
          q-tooltip(anchor="bottom middle" self="top middle") SIGN OUT

    q-page-container
      router-view
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)
const { logout } = user
const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="scss">
</style>
