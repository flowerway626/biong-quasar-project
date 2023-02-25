<template lang="pug">
#about
  q-drawer(v-model="drawer" show-if-above :width="250" :breakpoint="500" bordered)
    q-tabs.text-teal(v-model="tab" vertical)
      q-tab(name="INFO" label="INFO")
      q-tab(name="PROFILE" label="PROFILE")
      q-tab(name="GALLERY" label="GALLERY")
      q-tab(name="VIDEO" label="VIDEO")

  q-tab-panels(v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up")
    q-tab-panel(name="INFO")
      .text-h4.q-mb-md INFO
      .row
        .col-auto.q-px-md
          q-img(src="@/assets/images/poster.jpg" width="300px")
        .col.q-px-md
          .column
            .col.text-subtitle1.text-justify.text-indent 在地球看不到的月球背面，有個玉皇大帝經營的休息站，休息站最熱門的商店"宇宙年糕店"，宇宙年糕店中有銷售一等的功臣—兔兔，因為受不了頻繁的加班，因此興起了逃往地球的念頭。發現兔子寫了辭職信逃往地球的玉皇大帝震怒，下令抓到兔子的人將給予豐厚的獎金。為了得到豐厚的獎金，由四位來自平行宇宙地球的勇士就這樣出動了。
            .col.q-mt-xl
              .text-h6.text-center.q-mb-md 播出資訊
              .row
                .text-subtitle1 &nbsp; 播出時間 &nbsp;|
                .text-subtitle1 &nbsp;&nbsp;&nbsp;2022年6月24日－2022年9月16日
              .row
                .text-subtitle1 &nbsp; 總&nbsp;&nbsp;導&nbsp;&nbsp; 演 &nbsp;|
                .text-subtitle1 &nbsp;&nbsp;&nbsp;羅䁐錫、朴賢勇
              .row
                .text-subtitle1 &nbsp; 主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演 &nbsp;|
                .text-subtitle1 &nbsp;&nbsp;&nbsp;李恩智、MIMI、李泳知、安俞真
              .row
                .text-subtitle1 &nbsp; 集&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數 &nbsp;|
                .text-subtitle1 &nbsp;&nbsp;&nbsp;第一季 12 集、第二季 錄製中
              .row
                .text-subtitle1 &nbsp; 串流平台 &nbsp;|
                .text-subtitle1 &nbsp;&nbsp;&nbsp;LINE TV、friDay

    q-tab-panel(name="PROFILE")
      .text-h4.q-mb-md profile
      .row
        .memberInfo.col-5.col-md
          .text-h5 LEE YOUNG JI
        .memberInfo.col-5.col-md
          .text-h5 LEE EUN JI
        .memberInfo.col-5.col-md
          .text-h5 MI MI
        .memberInfo.col-5.col-md
          .text-h5 AN YU JIN

        #youngji.row
          .col-12.col-md-4
            q-img(src="@/assets/images/youngji.jpg" width="250px")
          .col-12.col-md-8
            .text-h5 李泳知
            .text-subtitle1 必殺技：壓制英錫哥底線的‘獅子吼’
            p |
            | 戰力MAX，攻擊力MAX，生命力……無法估量？！
            | 史無前例的娛樂詐騙現身！
            | “英錫哥！” 以吶喊開始新的一天
            | 地球戰士的代表，無限能量。
            | 即使你試圖自信地走到任何地方，
            | 甚至是接受FEEL時趴在光地上的非常規動作！
            | 前所未見的新角色登場！

        #eunji.row
          .col-12.col-md-4
            q-img(src="@/assets/images/eunji.jpg" width="250px")
          .col-12.col-md-8
            .text-h5 李恩智
            .text-subtitle1 必殺技：遠看是“喜劇”，近看是“瘋狂”
            p “獻身廣播！”
            |一個舞者的靈魂被困在一個喜劇演員的身體裡！
            |才華橫溢我無意克制
            |擅長廣播舞蹈（？）頂級喜劇演員
            |我夢想成為一個有魅力的街機迷，
            |現實中，容易被弟弟妹妹罵？！
            |“老大”英雄恩地適應 Z 世代的任務開始了！

        #mimi.row
          .col-12.col-md-4
            q-img(src="@/assets/images/mimi.png" width="250px")
          .col-12.col-md-8
            .text-h5 MiMi
            .text-subtitle1 必殺技：不分情況的“真正正能量光束”
            p |
            | 只要你有冰淇淋，超正模式就開啟！
            | 與世界無害的人類和後地球級別的親和力
            | 連動物的心臟都偷走的這個地區的知情人，
            | “Oh My Mihyun”出現！
            | 通過提交現實且自由奔放的錯誤答案
            | 改變遊戲規則的“K-meme”揭曉！

        #yujin.row
          .col-12.col-md-4
            q-img(src="@/assets/images/yujin.jpg" width="250px")
          .col-12.col-md-8
            .text-h5 安宥真
            .text-subtitle1 必殺技：“慾望” LOVE DIVE！
            p
            | 今年Lv 20，食物面前
            | 第N話最高能力的忙內！
            | 展現出比同齡人更深沉、更豐富的“鄉土味”
            | 不要錯過Ending 妖精
            | 老么的狡黠魅力讓姐姐們戀愛了♥
            | “職業 idol ”宥真的反差開始了！

    q-tab-panel(name="GALLERY")
      .text-h5 最新上傳
      .q-pa-md
        swiper(v-bind="swiperOptions")
          swiper-slide(v-for="photo in photos.slice(0, 1)" :key="photo._id")
            q-img(:src="photo.image")
          template(v-for="photo in photos.slice(0, 1)")
            swiper-slide(v-for="p in photo.images" )
              q-img(:src="p")

      q-separator.q-my-md

      .text-h5 All
        .row.justify-evenly
          .col-3.cursor-pointer.q-ma-md(v-for="(photo, idx) in photos" :key="photo._id" @click="swiperDialog(idx)")
            q-card.card
              q-img(:src='photo.image' height="150px")
              q-card-section
                .text-subtitle1.text-ellipsis {{ photo.name }}
                .text-subtitle2 {{ new Date(photo.date).toLocaleString() }}

    q-tab-panel(name="VIDEO")
      q-expansion-item.q-my-sm.shadow-1.overflow-hidden(default-opened group="ablum" style='border-radius: 10px' icon='album' label='HIGHLIGHT' header-class='bg-warning text-black text-weight-bold' expand-icon-class='text-black')
        .row.justify-evenly
          q-card.my-card.col-3.q-mx-sm.q-my-md
            //- q-skeleton( width="100%" )
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/Q-NxDZLtELc")
            q-card-section
              .text-subtitle1 전설의 레전드 지락실.ZIP??
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/9J28BsI-Z14")
            q-card-section
              .text-subtitle1 未發布的“天氣任務”史詩即將發布
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed//nc3dfwflC4s")
            q-card-section
              .text-subtitle1 KG받는 토롱이 잡기 대작전.ZIP📂
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/durLpBwXh9g")
            q-card-section
              .text-subtitle1 전설의 레전드 지락실.ZIP??
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/g_ETO-W-0lU")
            q-card-section
              .text-subtitle1 憤怒的地球娛樂室老闆.ZIP
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed//1DtzFseJnV4")
            q-card-section
              .text-subtitle1 地娛室成員首次碰面後的未公開花絮
      q-expansion-item.q-my-sm.shadow-1.overflow-hidden(group="ablum" style='border-radius: 10px' icon='album' label='SPECIAL' header-class='bg-warning text-black text-weight-bold' expand-icon-class='text-black')
        .row.justify-evenly
          q-card.my-card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/Q-NxDZLtELc")
            q-card-section
              .text-subtitle1 전설의 레전드 지락실.ZIP??
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/9J28BsI-Z14")
            q-card-section
              .text-subtitle1 未發布的“天氣任務”史詩即將發布
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed//nc3dfwflC4s")
            q-card-section
              .text-subtitle1 KG받는 토롱이 잡기 대작전.ZIP📂
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/durLpBwXh9g")
            q-card-section
              .text-subtitle1 전설의 레전드 지락실.ZIP??
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/g_ETO-W-0lU")
            q-card-section
              .text-subtitle1 憤怒的地球娛樂室老闆.ZIP
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed//1DtzFseJnV4")
            q-card-section
              .text-subtitle1 地娛室成員首次碰面後的未公開花絮
      q-expansion-item.q-my-sm.shadow-1.overflow-hidden(group="ablum" style='border-radius: 10px' icon='album' label='PREVIEW' header-class='bg-warning text-black text-weight-bold' expand-icon-class='text-black')
        .row.justify-evenly
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/EFN9_cj1IfU")
            q-card-section
              .text-subtitle1 [最終話預告] 深夜動作劇★ 過去約定的“覺醒任務”COMING SOON
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/puVobEsPsyc")
            q-card-section
              .text-subtitle1 【最終話預告】震撼曼谷一夜的那個？？ 令人心碎的天氣任務大公開
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed//uPqku0EPkH0")
            q-card-section
              .text-subtitle1 【第11集預告】從吃貨到舞會！ 來一場全程課程包價遊♬
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/A5Jb246DLJ4")
            q-card-section
              .text-subtitle1 【第11集預告】綜合大禮包st暑期獎勵假期？？ 順帶一提...？
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed/2kkHqDS4XEQ")
            q-card-section
              .text-subtitle1 [第10集預告] 點心餅乾測驗！ 吉拉克斯咆哮事件的來龍去脈……？
          q-card.card.col-3.q-mx-sm.q-my-md
            q-video(:ratio='16/9' src="https://www.youtube.com/embed//seqQbIDKr04")
            q-card-section
              .text-subtitle1 【第10集預告】“玉皇大帝請客！”紀念抓到兔瓏！ 國內獎勵假期開始？？

//- 個別相簿
q-dialog(v-model="dialog")
  q-card
    q-card-section
      swiper(v-bind="albumOptions")
        swiper-slide
          q-img(:src="photos[dialogidx].image" width="550px")
        swiper-slide(v-for="p in photos[dialogidx].images" )
          q-img(:src="p")
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import Swal from 'sweetalert2'
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'
import 'swiper/css/bundle'

const tab = ref('INFO')
const link = ref('INFO')
const drawer = ref(true)
const dialog = ref(false)
const dialogidx = ref(0)
const photos = reactive([])
const router = useRouter()

const swiperDialog = (idx) => {
  dialog.value = true
  dialogidx.value = idx
}

// const scrollToElement = () => {
//   const el = document.getElementById(targetId.value)

//   if (el) {
//     el.scrollIntoView()
//   }
// }

// onMounted(() => {
const swiperOptions = {
  modules: [Navigation, Pagination, Scrollbar, Autoplay],
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  // autoplay: {
  //   delay: 2500
  // },
  loop: true,
  scrollbar: {
    draggable: true,
    hide: true
  }
}
const albumOptions = {
  modules: [Navigation, Pagination, Scrollbar, Autoplay],
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  // autoplay: {
  //   delay: 2500
  // },
  loop: true,
  scrollbar: {
    draggable: true
  }
};
// })

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
#about {
  .swiper-button-prev,
  .swiper-button-next {
    color: aliceblue;
  }
  .card .text-subtitle1 {
    -webkit-line-clamp: 1;
  }

  .memberInfo {
    height: 50px;
    background: $secondary;
    margin-right: 10px;
  }
}
</style>
