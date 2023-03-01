<template lang="pug">
#product
  q-breadcrumbs.text-warning.q-ma-md.q-pl-xl(active-color="grey")
    template(v-slot:separator)
      q-icon(size='1.5em' name='chevron_right' color='grey')
    q-breadcrumbs-el(label='首頁' icon='mdi-home' to="/")
    q-breadcrumbs-el(label='周邊商品' icon='mdi-store' to="/shopping")
    q-breadcrumbs-el(:label="product.name" icon='mdi-shopping')

  #productInfo.flex.flex-center
    .info.text-black
      .row(v-if="!loading")
        .col-12.col-sm-6.text-center
          q-img(:src="product?.image")
        .col-12.col-sm-6.column.justify-between
          .text-h4.q-mb-md(style="font-family: 'Cubic';") {{ product?.name }}
          p.description.pre {{ product?.description }}
          q-scroll-area.scroll-area.q-my-md(visible :bar-style="{borderRadius: '5px', background: 'black'}")
            p.pre {{ product?.description }}

          .row.justify-around.items-center
            .text-h4(style="font-family: 'Cubic';") $ {{ product?.price }}
            .row.flex-center
              q-btn(color="secondary" round push label="-" @click="quantity--")
              q-input(v-model.number="quantity" type="number" style="width: 100px;font-size: 16px" input-class="text-center text-weight-bold  text-black")
              q-btn(color="secondary" round push label="+" @click="quantity++")
          q-btn.full-width.q-mt-md(rounded size="md" color="pink" push unelevated label="加入購物車" @click="submitCart")

      // 載入前
      .row(v-if="loading")
        .col-12.col-sm-6.text-center.q-my-auto
          q-skeleton(class="bg-grey" width="350px" height="350px" style="margin: auto")
        .col-12.col-sm-6.column.justify-between
          q-skeleton(class="bg-grey" type="text" class="text-h4" width="70%")
          q-skeleton(class="bg-grey" type="text" class="p" width="50%")
          q-skeleton(class="bg-grey" type="text" class="p" width="50%")
          q-skeleton(class="bg-grey" type="text" class="p" width="50%")

          .row.justify-around.items-center
            q-skeleton(class="bg-grey" type="text" class="text-h4" width="20%")
            .row.flex-center
              q-btn(color="secondary" round flat label="-" @click="quantity--")
              q-input(v-model.number="quantity" type="number" style="width: 100px;font-size: 16px" input-class="text-center text-weight-bold  text-black")
              q-btn(color="secondary" round flat label="+" @click="quantity++")
          q-btn.full-width.q-mt-md(rounded size="md" color="pink" flat label="加入購物車" @click="submitCart")

      .text-center.q-mt-xl
        q-btn.q-mb-md(label="你也許會喜歡..." outline rounded @click="changeRecom()")
        .row.justify-center
          .more.cursor-pointer(v-for="pd in recom" :key="pd._id" @click="changeInfo(pd)")
            .text-center
              q-img(:src="pd.image" to="'/'")
            .column.justify-between
              .text-body1.q-mb-md {{ pd.name }}
            //- q-separator(color="grey")

  </template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from 'src/stores/user'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const user = useUserStore()
const { editCart } = user
const route = useRoute()
const router = useRouter()
const quantity = ref(0)
const more = ref(false)
const recom = reactive([])
const loading = ref(true)
const product = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const submitCart = () => {
  if (quantity.value === 0) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: '請選擇商品數量！'
    })
  } else {
    editCart({ _id: product._id, quantity: quantity.value })
    quantity.value = 0
    $q.notify({
      type: 'positive',
      color: 'pink',
      message: '加入購物車',
      position: 'top'
    })
  }
}

// 更新頁面資料
const changeRecom = async (pd) => {
  const { data } = await api.get('/products/recom')
  recom.splice(0, recom.length)
  recom.push(...data.result)
  console.log(recom)
}

const changeInfo = (pd) => {
  router.push('/shopping/' + pd._id)
  product._id = pd._id
  product.name = pd.name
  product.price = pd.price
  product.description = pd.description
  product.image = pd.image
  product.category = pd.category
  product.sell = pd.sell
}

(async () => {
  try {
    const result = await Promise.all([api.get('/products/' + route.params.id), api.get('/products/recom')])
    product._id = result[0].data.result._id
    product.name = result[0].data.result.name
    product.price = result[0].data.result.price
    product.description = result[0].data.result.description
    product.image = result[0].data.result.image
    product.category = result[0].data.result.category
    product.sell = result[0].data.result.sell
    recom.push(...result[1].data.result)
    loading.value = false
    document.title = 'Biong Biong | ' + product.name
    setTimeout(() => {
      more.value = true
    }, 3000)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品失敗'
    })
    router.push('/shopping')
  }
})()

</script>

<style lang="scss">
#productInfo {
  margin: auto;
  height: calc(100vh - 90px - 30px);

  .info {
    width: 85%;
    background: #eeeeee;
    border-radius: 40px;
    box-shadow: 0px 0px 6px inset;
    padding: 24px;
    margin-bottom: 20px;

    .q-btn:nth-child(1) {
      margin-right: 13px;
    }

    .q-img {
      max-height: 250px;
      max-width: 250px;
      margin-bottom: 20px;
    }

    .text-h5 {
      font-weight: 700;
    }

    .scroll-area {
      height: 250px;
      display: none;
    }

    .more {
      text-decoration: none;
      width: 200px;
      .q-img {
        width: 100px;
        height: 100px;
      }
    }
  }

  @media (min-width: 600px) {
    .info .q-img {
      max-height: 350px;
      max-width: 350px;
    }
    .scroll-area {
      display: block !important;
    }
    .description {
      display: none;
    }
  }
}

</style>
