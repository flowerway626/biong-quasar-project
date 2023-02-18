<template lang="pug">
q-page
  section#section1.row
    q-img(fit src="http://img.lifestyler.co.kr/uploads/programtemplate/20220614/f637908113779910034.jpg")

  section.q-pa-xl.bg-secondary.row.justify-around.items-center
    h4.text-center 最新消息
    ul
      li(v-for="newInfo in news.slice(0, 5).reverse()")
        q-btn(flat :to="'/news/' + newInfo._id").flex.justify-between
          .text-h6.q-mr-sm-xl {{ new Date(newInfo.date).toLocaleDateString() }}
          .text-h6.q-ml-sm-xl {{ newInfo.title }}
          q-icon.q-ml-sm-xl(name="mdi-arrow-top-right-bottom-left-bold")

  section#section2.row.q-pa-xl.q-mx-auto.justify-center
    .text-h5.col-12.text-center 周邊商品
    .col-12.row.flex-center
      .col-xs-12.col-sm-4.col-md-3.q-mx-lg.q-my-md(v-for="product in products.slice(0, 6)" :key="product.id")
          q-img(:src="product.image")
            .mask.flex.flex-center.column.absolute
              q-btn.q-ma-xs(label="詳情" push color="secondary" :to="'/shopping/' + product._id" style="width: 72px")
              q-btn.q-ma-xs(label="購物車" push color="pink" @click="addCart(product._id)")
    q-btn.q-my-md(rounded outline to="/shopping") M O R E

  section.column.reverse.row-sm.q-pa-xl.bg-pink
    .col
      swiper(:modules="modules" :space-between="50" :effect="'cards'" :grabCursor="true" navigation)
        swiper-slide(v-for="(event, idx) in events")
            div(@click="eventInfo(idx)")
              q-card
                q-img(:src="event.image")
                q-card-section
                  .text-subtitle1 {{ event.name }}
                  .text-subtitle2 {{ event.dateStart + ' ~ ' + event.dateEnd }}
    .col
      h5(v-if="!eventCard").text-center 活動公告
      q-card.event-card(v-if="eventCard" flat)
        q-card-section(horizontal)
          q-img.col-6(:src='events[eventIdx].image')
          q-card-section.row.column
            .text-h6 {{ events[eventIdx].name }}
            q-separator
            span {{ events[eventIdx].description }}
            span {{ events[eventIdx].dateStart + ' ~ ' + events[eventIdx].dateEnd }}
            q-btn(label="MORE >>>" :to="'/event/' + events[eventIdx]._id")

section.row.q-pa-xl
    .col
      .text-h6.text-center Contact Us
      q-form.q-mx-auto(style="width: 80%")
        .row.justify-between
          .col-5
            q-input.q-my-xs(label="account" v-model="form.account" clearable clear-icon="close" dense=true
            :rules="[$rules.required('欄位必填')]")
          .col-5
            q-input.q-my-xs(label="標題" v-model="form.title" type="text" clearable clear-icon="close" dense=true
            :rules="[$rules.required('欄位必填')]")

        q-input.q-my-xs(label="email" v-model="form.email" clearable clear-icon="close"
        :rules="[$rules.required('欄位必填'), $rules.email('email 格式錯誤')]" dense=true)

        q-input.q-my-xs(label="內容" v-model="form.content" clearable clear-icon="close" dense=true
        :rules="[$rules.required('欄位必填'), $rules.maxLength(200, '內容過長')]" maxlength="200")

        .text-center
          q-btn.full-width(type="submit" size="sm" outline style="color: #53C2BA") 送出
    .col
      .text-h5.text-center lorem
</template>

<script setup>
import { reactive, ref } from 'vue'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from 'src/stores/user'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, EffectCards } from 'swiper'
import { useQuasar } from 'quasar'
import 'swiper/css/bundle'
import 'swiper/css/effect-cards'

const modules = [Navigation, Pagination, Scrollbar, EffectCards]
const $q = useQuasar()
const router = useRouter()
const user = useUserStore()
const { editCart } = user
const eventCard = ref(false)
const eventIdx = ref(0)
const products = reactive([])
const events = reactive([])
const news = reactive([])
const form = reactive({
  account: '',
  email: '',
  title: '',
  content: ''
})

const eventInfo = (idx) => {
  eventIdx.value = idx
  eventCard.value = true
}

const addCart = async (_id) => {
  try {
    $q.notify({
      type: 'positive',
      color: 'secondary',
      message: '加入購物車',
      position: 'top'
    })
    await editCart({ _id, quantity: 1 })
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
}

(async () => {
  try {
    const { data: productsData } = await api.get('/products')
    const { data: newsData } = await api.get('/news')
    const { data: eventsData } = await api.get('/events')
    products.push(...productsData.result)
    news.push(...newsData.result)
    events.push(...eventsData.result)
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
.event-card {
  width: 100%;
  right: 100px;
}

.eventCard img {
  width: 100%;
  height: 200px;
}

.eventTable,
.eventCard {
  height: 350px;
  max-width: 500px;
}

.eventTable {
  td:first-child {
    background-color: #555 !important;
  }

  tr th {
    position: sticky;
    z-index: 2;
    background: #333;
  }

  thead tr:last-child th {
    top: 48px;
    z-index: 3;
  }

  thead tr:first-child th {
    top: 0;
    z-index: 1;
  }
  tr:first-child th:first-child {
    z-index: 3;
  }

  td:first-child {
    z-index: 1;
  }

  td:first-child,
  th:first-child {
    position: sticky;
    left: 0;
  }
}

li {
  list-style: none;
  }

section#section2 .q-img {
height: 200px;
border-radius: 10px;

.mask {
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  opacity: 0;
  &:hover {
      background: #3339;
      opacity: 1;
  }
}
}

.swiper {
  width: 240px;
  height: 400px;
}
</style>
