<template lang="pug">
#cart.q-pa-md
  .text-center.text-h4.backH4 購物車

  .row.justify-center
    .col-12.col-md-6.left
      q-separator.q-my-md(v-if="carts?.length === 0")
      .text-center.text-grey(v-if="carts?.length === 0") 購物車內沒有商品~
      .cartInfo.row.justify-center(v-for="(pd, idx) in carts" :key="pd._id")
        .col-auto
          q-img.text-center(:src="pd.p_id.image" style="width:100px")
        .col-7.q-ml-md
          .text-h6.q-mb-md {{ pd.p_id.name }}
          span 數量：
          q-btn(icon="mdi-minus" round outline unelevated size="sm" color='warning' @click='updateCart(idx, -1)')
          span &nbsp;&nbsp;{{ pd.quantity }} &nbsp;&nbsp;
          q-btn(icon="mdi-plus" round outline unelevated size="sm" color='warning' @click='updateCart(idx, 1)')
        .col-auto.column.items-end.q-ml-auto
          .col.text-h5 $ {{ pd.p_id.price }}
          .col
            q-btn(icon="delete" round unelevated size="10px" color='pink' @click='updateCart(idx, pd.quantity*-1)')

    .right.col-12.col-md-4.text-center.q-px-xl
      .card.flex.items-end
        q-input(v-model='card' borderless color="warning" label='Card' mask='#### #### #### ####' fill-mask='_' style="width:50%")
      .text-h5.text-weight-bold TOTAL： {{ totalPrice }} 元
      q-btn.q-mt-md.full-width.q-mx-md(icon="money" label="結帳 go" rounded push color='warning' text-color="black" @click="orderDialog = true")

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
const orderDialog = ref(false)
const carts = reactive([]);

(async () => {
  try {
    loading.value = true
    const { data } = await apiAuth.get('/users/cart')
    carts.push(...data.result)
    loading.value = false
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
const updateCart = async (idx, quantity) => {
  // 用購物車的 _id 撈出該筆商品的索引值
  // const idx = carts.findIndex((cart) => cart._id === _id)
  await editCart({ _id: carts[idx].p_id._id, quantity })
  carts[idx].quantity += quantity

  // 數量 <= 0 時，把該項商品移出購物車陣列
  if (carts[idx].quantity <= 0) {
    carts.splice(idx, 1)
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

<style lang="scss">
#cart {
  min-height: calc(100vh - 58px);
  .editBtn {
    margin-left: 20px;
  }

  .cartInfo {
    margin: 20px;
    background: #3338;
    padding: 20px;
    border-radius: 16px;
  }

  .card {
    max-width: 350px;
    height: 200px;
    background: #333;
    border-radius: 16px;
    margin:20px auto 48px;
    padding: 16px;
  }
}
</style>
