<template lang="pug">
q-page
  section#section1.row
    q-img(fit src="http://img.lifestyler.co.kr/uploads/programtemplate/20220614/f637908113779910034.jpg")

  section#section2.row.q-pa-xl.q-mx-auto
    .col-12
      h5.text-center 周邊商品
    .col-12.row
      .col-xs-12.col-sm-4.col-md-3.q-mx-lg(v-for="product in products" :key="product.id")
          q-img(:src="product.image")
            .mask.flex.flex-center.column.absolute
              q-btn.q-ma-xs(label="詳情" outline color="secondary" :to="'/shopping/' + product._id")
              q-btn.q-ma-xs(label="購物車" outline color="pink" @click="editCart({_id: product._id, quantity: 1})")
                //- q-skeleton(type="QBtn")

  section.q-pa-xl
    .text-h5.text-center 最新消息
    ul
      li(v-for="eventInfo in events")
        q-btn(flat :to="'/event/' + eventInfo._id").flex.justify-between
          .text-h6.q-mr-xl {{ new Date(eventInfo.date).toLocaleDateString() }}
          .text-h6.q-ml-xl {{ eventInfo.name }}
          q-icon.q-ml-xl(name="mdi-arrow-top-right-bottom-left-bold")

  section.row.flex-center.q-pa-xl
    .col-12
      h5.text-center 活動公告
    .col-6
      swiper(:modules="modules" :slides-per-view="3" :space-between="50" navigation
      :pagination="{ clickable: true }" :scrollbar="{ draggable: true }")
        swiper-slide(v-for="eventInfo in events")
          q-card
            img(:src="eventInfo.image")
            q-card-section
              .text-h6 {{ eventInfo.name }}
              .text-subtitle2 {{ new Date(eventInfo.date).toLocaleDateString() }}
            //- q-card-section.q-pt-none
              .text-subtitle2 2023/2/5 ~ 2023/2/10
              .text- loremloremloremloremloremloremloremloremloremloremloremlorem

  section.row.q-pa-xl
    .col
      .text-h6.text-center Contact Us
      q-form.q-mx-auto(style="width: 80%" @submit="contactUs")
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar } from 'swiper'

import 'swiper/css/bundle'

const modules = [Navigation, Pagination, Scrollbar]

const user = useUserStore()
const { editCart } = user
const products = reactive([])
const events = reactive([])
const form = reactive({
  account: '',
  email: '',
  title: '',
  content: ''
})

const columns = reactive([
  {
    name: 'newsId',
    // required: true,
    label: 'newsId',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: 'date',
    label: 'date',
    field: 'date',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'title',
    align: 'center',
    label: 'title',
    field: 'title',
    sortable: true
  }
])

const rows = reactive([
  {
    name: 'Frozen Yogurt',
    title: 159,
    date: '24'
  },
  {
    name: 'Ice cream sandwich',
    title: 237,
    date: '1%'
  },
  {
    name: 'Eclair',
    title: 262,
    date: '7%'
  },
  {
    name: 'Cupcake',
    title: 305,
    date: '8%'
  },
  {
    name: 'Gingerbread',
    title: 356,
    date: '16%'
  },
  {
    name: 'Jelly bean',
    title: 375,
    date: '0%'
  }
])

const contactUs = () => {
  console.log('表單送出')
}

(async () => {
  try {
    const { data: productData } = await api.get('/products')
    const { data: eventsData } = await api.get('/events')
    products.push(...productData.result)
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
  }
  &:hover {
    .mask {
      background: #3339;
      opacity: 1;
    }
  }
}
</style>
