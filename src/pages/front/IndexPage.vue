<template lang="pug">
q-page
  section#section1.row
    q-img(fit src="http://img.lifestyler.co.kr/uploads/programtemplate/20220614/f637908113779910034.jpg")

  q-parallax(src="@/assets/images/stars.jpg" :speed="1.5" :height="350")
    #text.row.flex-center
      .col-7.text-subtitle1.text-justify.q-mb-md 在地球看不到的月球背面，有個玉皇大帝經營的休息站，休息站最熱門的商店"宇宙年糕店"，宇宙年糕店中有銷售一等的功臣 — 兔瓏，因為受不了頻繁的加班，因此興起了逃往地球的念頭。
      .col-7.text-subtitle1.text-justify 發現兔瓏寫了辭職信逃往地球的玉皇大帝震怒，下令抓到兔瓏的人將給予豐厚的獎金。為了得到豐厚的獎金，由四位來自平行宇宙地球的勇士就這樣出動了...

  section#info.q-pa-xl(data-aos='fade-up')
    .row
      .col.mask.absolute
        q-img(src="@/assets/images/yujin.jpg")
      .col.mask.absolute
        q-img(src="@/assets/images/youngji.jpg")
      .col.mask.absolute
        q-img(src="@/assets/images/eunji.jpg")
      .col.mask.absolute
        q-img(src="@/assets/images/mimi.png")

  section#new.q-pa-md-xl.bg-secondary
    .text-h5.q-my-md.text-center 最新消息
    .column
      router-link.row.newInfo(v-for="newInfo in news" :key="newInfo._id" :to="'/news/' + newInfo._id" )
        .text-subtitle2.q-mr-xl {{ new Date(newInfo.date).toLocaleDateString() }}
        .text-subtitle1 {{ newInfo.title }}

  //- q-parallax(speed="2" src="@/assets/images/stars.jpg" :height="650")
  section#section2.row.q-pa-xl.q-mx-auto.justify-center
    .text-h5.col-12.text-center 周邊商品
    .col-12.row.flex-center
      .col-xs-12.col-sm-4.col-md-3.q-mx-lg.q-my-md(v-for="product in products" :key="product.id")
          q-img(:src="product.image")
            .mask.flex.flex-center.column.absolute
              .text-subtitle1.q-ma-xs {{ product.name }}
              q-btn.q-ma-xs(label="詳情" push color="secondary" :to="'/shopping/' + product._id" style="width: 72px")
    q-btn.q-my-md(rounded outline to="/shopping") M O R E

  section.column.q-pa-xl.bg-pink
    h5.text-center 活動公告
    swiper(v-bind="swiperOptions")
      swiper-slide(v-for="event in events" )
        q-card.cursor-pointer(@click="router.push('/event/' + event._id)" data-aos="flip-left" data-aos-duration="500" data-aos-offset="100")
          q-img(:src="event.image")
          q-card-section
            .text-subtitle1.text-ellipsis {{ event.name }}
            .text-subtitle2 {{ event.dateStart + ' ~ ' + event.dateEnd }}

    //- q-parallax(speed="2" src="@/assets/images/stars.jpg" :height="300")

  section#footer.row.q-pa-xl
      .col-12.col-md-5
        q-form.q-mx-auto.q-mx-md-none(style="width: 80%")
          .row.justify-between
            .col-12.col-sm-5
              q-input.q-my-xs(label="account" v-model="form.account" clearable clear-icon="close" dense=true color="warning"
              :rules="[$rules.required('欄位必填')]")
            .col-12.col-sm-5
              q-input.q-my-xs(label="email" v-model="form.email" clearable clear-icon="close" color="warning"
                :rules="[$rules.required('欄位必填'), $rules.email('email 格式錯誤')]" dense=true)

          q-input.q-my-xs(label="內容" v-model="form.content" clearable clear-icon="close" dense=true color="warning"
          :rules="[$rules.required('欄位必填'), $rules.maxLength(200, '內容過長')]" maxlength="200")

          .text-center
            q-btn.full-width(type="submit" size="sm" outline style="color: #53C2BA") 送出

      .col-12.col-md-7.q-mt-xl.q-mt-md-none
        .map.row
          .col-6.col-md-3.column.items-start.content-center
            .text-body1 首頁
            router-link.text-body2(to="/news") 最新消息
            router-link.text-body2(to="/shopping") 周邊商品
            router-link.text-body2(to="/event") 活動公告

          .col-6.col-md-3.column.items-start.content-center
            .text-body1 關於地娛室
            router-link.text-body2(to="/about") 節目企劃
            router-link.text-body2(to="/about") 人物介紹
            router-link.text-body2(to="/about") 現場照片
            router-link.text-body2(to="/about") 影片合集

          .col-6.col-md-3.column.items-start.content-center
            .text-body1 會員專區
            router-link.text-body2(to="/cart") 購物車
            router-link.text-body2(to="/setting") 基本設定
            router-link.text-body2(to="/setting/order") 訂單明細
            router-link.text-body2(to="/setting/event") 報名管理

          .col-12.col-md-3.column.items-start.content-center
            .row.justify-center
              q-btn.col-md-6(round icon="mdi-facebook" @click="link('https://www.facebook.com/cjtvngo/')")
              q-btn.col-md-6(round icon="mdi-instagram" @click="link('https://www.instagram.com/earth_arcade/')")
              q-btn.col-md-6(round icon="mdi-twitter" @click="link('https://twitter.com/chtvn')")
              q-btn.col-md-6(round icon="mdi-youtube" @click="link('https://www.youtube.com/playlist?list=PLgbB1gJhmG7ADjyNmUhWAwXPTrLflCiqv')")
</template>

<script setup>
import { reactive, ref, nextTick } from 'vue'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar } from 'swiper'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import AOS from 'aos'

const modules = [Navigation, Pagination, Scrollbar]
const $q = useQuasar()
const router = useRouter()
const products = reactive([])
const events = reactive([])
const news = reactive([])
const form = reactive({
  account: '',
  email: '',
  title: '',
  content: ''
})

const link = (link) => {
  window.location.href = link
}

const swiperOptions = {
  modules: [Navigation, Pagination, Scrollbar],
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  autoplay: {
    delay: 2500
  },
  loop: true,
  scrollbar: {
    draggable: true,
    hide: true
  }
};

(async () => {
  try {
    const results = await Promise.all([api.get('/products/index'), api.get('/news/index'), api.get('/events')])
    products.push(...results[0].data.result)
    news.push(...results[1].data.result)
    events.push(...results[2].data.result)
    await nextTick()
    AOS.init()
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
#text .text-subtitle1 {
  text-indent: 2rem;
}

#new {
    list-style: none;
    .newInfo {
      margin: 5px auto;
      width: 90%;
      text-decoration: none;
      color: white;
      &:hover {
        background: $pink;
        transition: 0.3s;
      }

      @media (min-width: 576px) {
        width: 60%;
      }
    }
  }
#section2 {
  width: 100%;
  height: 100%;
  .q-img {
    height: 200px;
    border-radius: 10px;

    .mask {
      width: 100%;
      height: 100%;
      position: relative;
      background: transparent;
      opacity: 0;
      &:hover {
        opacity: 1;
        background: #3339;
        transition: 0.3s;
      }
    }
  }
}

.swiper {
  width: 100%;
  height: 400px;

  .text-subtitle1 {
    -webkit-line-clamp: 1;
  }
}

#info .row {
  margin: auto;
  width: 100%;
  height: 100%;
  .mask {
    width: 100%;
    height: 100%;
    position: relative;
    background: #3339;
    // background: transparent;
    // opacity: 0;
    &:hover {
      // opacity: 1;
      transition: 0.3s;
      cursor: pointer;
    }
  }
}

.event-card {
  span {
    -webkit-line-clamp: 2;
  }
}

#footer {
  .map {
    .text-body1{
      margin-bottom: 10px;

  }
  a {
    color: grey;
    margin-bottom: 10px;
  }
}
}
</style>
