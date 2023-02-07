<template lang="pug">
.q-pa-md
  q-table.cart-table(title="購物車" :rows='carts' :columns='columns' row-key="_id"
  :filter="filter" virtual-scroll flat :loading="loading")
    q-btn(icon="delete" round unelevated size="sm" color='pink' @click='updateCart(props.row._id, props.row.quantity*-1)')

    //- template(v-slot:body-cell-index='props')
        q-td(:props="props")
          span {{ props }}
        //- q-btn(icon="edit" round unelevated size="sm" color='secondary' @click='editDialog(props.row)')

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
    q-btn(icon="money" label="結帳 go" unelevated size="lg" color='warning' text-color="black")
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const loading = ref(false)
const user = useUserStore()
const { editCart } = user
const edit = ref(false)
const filter = ref('')
const carts = reactive([]);

(async () => {
  try {
    loading.value = true
    const { data } = await apiAuth.get('/users/cart')
    carts.push(...data.result)
    console.log(data)
    console.log(carts)
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
  // {
  //   name: 'indexs',
  //   required: true,
  //   label: '#',
  //   align: 'center',
  //   sortable: true,
  //   sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  // },
  {
    name: 'name',
    required: true,
    label: '商品名稱',
    align: 'center',
    field: row => row.p_id.name,
    format: val => `${val}`,
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
    format: val => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'quantity',
    required: true,
    label: '數量',
    align: 'center',
    field: row => row.quantity,
    format: val => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'total',
    required: true,
    label: '小計',
    align: 'center',
    field: row => row.p_id.price,
    format: (val, row) => `${val * row.quantity}`,
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

const editCheck = (_id) => {
  edit.value = !edit.value
  // 用購物車的 _id 撈出該筆商品的索引值
  const cartsIndex = carts.findIndex((product) => product._id === _id)
}

// 傳入的是購物車_id 和 數量
const updateCart = async (_id, quantity) => {
  // 用購物車的 _id 撈出該筆商品的索引值
  const cartsIndex = carts.findIndex((product) => product._id === _id)
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
</script>

<style lang="sass">
.cart-table
  /* height or max-height is important */
  max-height: calc(100vh - 170px)

  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  // max-width: 600px

  td:first-child
    /* bg color is important for td; just specify one */
    background-color: #555 !important
  tr td
    text-align: center
    font-size: 14px

  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #333
    font-size: 14px
    font-weight: bold
    text-align: center

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0
</style>
