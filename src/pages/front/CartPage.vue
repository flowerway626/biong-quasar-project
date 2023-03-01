<template lang="pug">
#cart.q-pa-md
  .text-center.text-h4.backH4 購物車
  q-table.cart-table(:rows='carts' :columns='columns' row-key="_id" :filter="filter" virtual-scroll flat :loading="loading")
    q-btn(icon="delete" round unelevated size="sm" color='pink' @click='updateCart(props.row._id, props.row.quantity*-1)')

    template(v-slot:body-cell-image='props')
      q-td
        img(:src="props.row.p_id.image" :width="130" :height="100")

    template(v-slot:body-cell-quantity='props')
      q-td
        q-btn(v-if="edit" icon="mdi-minus" round outline unelevated size="sm" color='warning' @click='updateCart(props.row._id, -1)')
        span &nbsp;&nbsp; {{ props.row.quantity }} &nbsp;&nbsp;
        q-btn(v-if="edit" icon="mdi-plus" round outline unelevated size="sm" color='warning' @click='updateCart(props.row._id, 1)')

    template(v-slot:body-cell-other='props')
      q-td.q-gutter-x-sm
        q-btn(icon="delete" round unelevated size="sm" color='pink' @click='updateCart(props.row._id, props.row.quantity*-1)')

    template(v-slot:top-right)
      q-input.q-mr-md(borderless dense debounce='300' v-model='filter' placeholder='Search')
        template(v-slot:append)
          q-icon(name="search")
      q-btn(v-if="!edit" icon="edit" label="編輯" outline unelevated size="sm" color='secondary' @click="edit = !edit")
      q-btn(v-if="edit" icon="check" label="確認" outline unelevated size="sm" color='secondary' @click="edit = !edit")

  .flex.justify-around.items-center.q-mt-md.q-gutter-md
    .text-h5.text-weight-bold TOTAL： {{ totalPrice }} 元
    q-btn(icon="money" label="結帳 go" unelevated push size="lg" color='warning' text-color="black" @click="orderDialog = true")

q-dialog(v-model="orderDialog")
  q-card
    q-card-section(style="background: linear-gradient(135deg, #53C2BA 0%, #C0538A 100%)")
      .text-center.text-subtitle1 訂單確認
    q-card-section
      ul(style="padding-left: 20px")
        li(v-for="product in carts" :key="product._id")
          span {{ product.p_id.name + ' x ' + product.quantity }}
    q-card-section.text-center
      q-btn(label="送出訂單" push size="sm" color='secondary' @click="createOrder")
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const router = useRouter()
const $q = useQuasar()
const user = useUserStore()
const loading = ref(false)
const { editCart, checkOut } = user
const edit = ref(false)
const orderDialog = ref(false)
const filter = ref('')
const carts = reactive([]);

(async () => {
  try {
    loading.value = true
    const { data } = await apiAuth.get('/users/cart')
    carts.push(...data.result)
    loading.value = false
    console.log(carts)
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '購物車錯誤！'
    })
  }
})()

const columns = [
  {
    name: 'name',
    required: true,
    label: '商品名稱',
    align: 'center',
    field: row => row.p_id.name,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'image',
    required: true,
    label: '圖片',
    align: 'center',
    field: row => row.p_id.image
  },
  {
    name: 'price',
    required: true,
    label: '單價',
    align: 'center',
    field: row => row.p_id.price,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'quantity',
    required: true,
    label: '數量',
    align: 'center',
    field: row => row.quantity,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'total',
    required: true,
    label: '小計',
    align: 'center',
    field: row => row.p_id.price * row.quantity,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'other',
    required: true,
    label: '操作',
    align: 'center'
  }
]

// 傳入的是購物車_id 和 數量
const updateCart = async (_id, quantity) => {
  // 用購物車的 _id 撈出該筆商品的索引值
  const cartsIndex = carts.findIndex((cart) => cart._id === _id)
  await editCart({ _id: carts[cartsIndex].p_id._id, quantity })
  carts[cartsIndex].quantity += quantity

  // 數量 <= 0 時，把該項商品移出購物車陣列
  if (carts[cartsIndex].quantity <= 0) {
    carts.splice(cartsIndex, 1)
    $q.notify({
      type: 'positive',
      color: 'pink',
      message: '成功刪除商品',
      position: 'top'
    })
  } else {
    $q.notify({
      type: 'positive',
      color: 'warning',
      message: '修改數量完成',
      position: 'top'
    })
  }
}

// 購物車總金額
const totalPrice = computed(() => {
  return carts.reduce((total, current) => total + (current.p_id.price * current.quantity), 0)
})

// 建立訂單 / 清空購物車
const createOrder = async () => {
  loading.value = true
  await checkOut()
  carts.splice(0, carts.length)
  router.push('/setting/order')
  loading.value = false
}
</script>

<style lang="sass">
#cart
  min-height: calc(100vh - 58px)
  .cart-table
    max-height: calc(100vh - 150px)

    td:first-child
      background-color: #555 !important
    tr td
      text-align: center
      font-size: 14px

    tr th
      position: sticky
      z-index: 2
      background: #333
      font-size: 14px
      text-align: center
</style>
