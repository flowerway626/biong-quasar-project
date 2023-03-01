<template lang="pug">
#home
  q-layout(view="hHh Lpr lff")
    q-header#bgTrans
      q-toolbar.q-py-sm
        img.big(src="../assets/images/logo.png" height="30" width="90")
        q-btn.little(flat @click='drawerLeft = !drawerLeft' round dense icon='menu')
        q-btn.big(label="首頁" flat to="/")
        q-btn.big(label="關於地娛室" flat to='/about')
        q-btn.big(label="最新消息" flat to='/news')
        q-btn.big(label="周邊商品" flat to='/shopping')
        q-btn.big(label="活動公告" flat to='/event')
        q-space
        //- img.logo(src="../assets/images/logo.png" height="30" width="90" style="margin-left: 48px")
        q-space

        q-btn(v-if="isLogin && !isAdmin" icon="mdi-cart" flat round to='/cart')
          q-badge(floating round color="warning") {{ cart }}
          q-tooltip(anchor="bottom middle" self="top middle") 購物車

        q-btn(v-if="isLogin && !isAdmin" icon="mdi-cog" flat round to='/setting')
          q-tooltip(anchor="bottom middle" self="top middle") 設定

        q-btn(v-if="isLogin && isAdmin" icon="mdi-cog" flat round to='/admin')
          q-tooltip(anchor="bottom middle" self="top middle") 設定

        q-btn(v-if="!isLogin" icon="login" flat round to='/login')
          q-tooltip(anchor="bottom middle" self="top middle") 登入

        q-btn.logout.q-mr-sm(v-if="isLogin" icon="logout" flat round @click="logout")
          q-tooltip(anchor="bottom middle" self="top middle") 登出

    q-page-container
      router-view
      q-page-scroller(position='bottom-right' :scroll-offset='150' :offset='[18, 18]')
        q-btn(fab icon='keyboard_arrow_up' color='warning')

    q-drawer.drawer.text-white(v-model='drawerLeft' overlay no-swipe-close no-swipe-backdrop behavior="mobile" :width='300' :breakpoint='900')
      q-list.drawerList
        q-item(clickable to="/" active-class="active-white")
          q-item-section(top)
            q-img.q-mx-auto(src="../assets/images/logo.png" width="150px")

        q-expansion-item(group="drawer" :content-inset-level='0.5' expand-separator label='關於地娛室')
          q-list
            q-item(clickable to="/about" active-class="active-white")
              q-item-section 節目企劃
            q-item(clickable v-ripple to="/about" active-class="active-white")
              q-item-section 人物介紹
            q-item(clickable v-ripple to="/about" active-class="active-white")
              q-item-section 現場照片
            q-item(clickable v-ripple to="/about" active-class="active-white")
              q-item-section 影片合集

        q-item(clickable to="/news" active-class="active-white")
          q-item-section 最新消息

        q-item(clickable to="/shopping" active-class="active-white")
          q-item-section 周邊商品

        q-item(clickable to="/event" active-class="active-white")
          q-item-section 活動公告

        q-expansion-item(group="drawer" :content-inset-level='0.5' expand-separator label='會員專區')
          q-list
            q-item(clickable to="/setting" active-class="active-white")
              q-item-section 基本設定
            q-item(clickable v-ripple to="/cart" active-class="active-white")
              q-item-section 購物車
            q-item(clickable v-ripple to="/setting/order" active-class="active-white")
              q-item-section 訂單明細
            q-item(clickable v-ripple to="/setting/event" active-class="active-white")
              q-item-section 報名活動

        q-expansion-item(group="drawer" :content-inset-level='0.5' expand-separator label='關注追蹤')
          q-list
            q-item(clickable active-class="active-white")
              q-item-section(avatar)
                q-icon(name='mdi-facebook')
              q-item-section FACEBOOK

            q-item(clickable active-class="active-white")
              q-item-section(avatar)
                q-icon(name='mdi-instagram')
              q-item-section INSTAGRAM

            q-item(clickable active-class="active-white")
              q-item-section(avatar)
                q-icon(name='mdi-twitter')
              q-item-section TWITTER

            q-item(clickable active-class="active-white")
              q-item-section(avatar)
                q-icon(name='mdi-youtube')
              q-item-section YOUTUBE

      q-btn(v-if="!isLogin").absolute-bottom.q-ma-md(label="登入" color="warning" push to="/login")
      q-btn(v-if="isLogin").absolute-bottom.q-ma-md(label="登出" color="warning" push to="/logout")
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const user = useUserStore()
const { isLogin, isAdmin, cart, name } = storeToRefs(user)
const { logout } = user
const drawerLeft = ref(false)

onMounted(() => {
  let scrollArea = 0
  const burger = document.querySelector('#burger2')
  const bgTrans = document.getElementById('bgTrans')
  window.addEventListener('scroll', () => {
    scrollArea = document.documentElement.scrollTop

    if (document.documentElement.scrollTop >= 350) {
      scrollArea = document.documentElement.scrollTop
      bgTrans.style.background = 'linear-gradient(135deg, #53C2BA 0%, #fff 65%, #C0538A 100%)'
    } else if (scrollArea < 350 && scrollArea !== 0) {
      bgTrans.style.background = 'transparent'
    }
  })
})

</script>

<style lang="scss">
#home {
  #bgTrans {
    background: transparent;
  }
  .q-page-container {
    background-image: url('@/assets/images/stars.jpg');
    background-position: center;
    background-attachment: fixed;
    background-repeat: repeat-y ;
    background-size: cover;
  }

  .drawerList {
    height: calc(100vh - 68px);
    overflow: auto;
  }

  .big,
  .logout {
    display: none;
  }

  .little {
    display: block;
  }

  .active-white {
    color: #fff;
  }

  @media (min-width: 600px) {
      .big {
        display: block;
      }

      .little {
        display: none;
      }
  }
  @media (min-width: 1024px) {
    .logout {
      display: flex;
    }
  }
}
</style>
