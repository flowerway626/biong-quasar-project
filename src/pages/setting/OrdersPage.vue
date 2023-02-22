<template lang="pug">
#setting-order.q-ma-md
  #backH4.text-h4.text-center 訂單管理
  q-table.order-table(:columns="columns" :rows="orders" row-key="_id" :filter="filter" flat)

    template(v-slot:top-right)
        q-input.q-mr-md(borderless dense debounce='300' v-model='filter' placeholder='Search')
          template(v-slot:append)
            q-icon(name="search")

    template(v-slot:body-cell-name="props")
      q-td
        template(v-for="product in props.row.products")
          ul
            li {{ product.quantity }} 個 &nbsp; &nbsp; {{ product.p_id.name }}
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'

const orders = reactive([])
const filter = ref('')
const columns = [
  {
    name: 'id',
    required: true,
    label: '訂單編號',
    align: 'center',
    field: '_id'
  },
  {
    name: 'date',
    required: true,
    label: '訂購日期',
    align: 'center',
    field: 'date',
    format: val => `${new Date(val).toLocaleDateString()}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'name',
    required: true,
    label: '商品',
    align: 'center',
    sortable: true
  },

  {
    name: 'total',
    required: true,
    label: '金額',
    align: 'center',
    field: 'totalPrice'
  }
];

(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((total, current) => total + current.p_id.price * current.quantity, 0)
      return order
    }))
    console.log(orders)
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '訂單錯誤！'
    })
  }
})()

</script>

<style lang="sass">
#setting-order .order-table
    max-height: calc(100vh - 170px)

    tr td
      text-align: center
      font-size: 14px
    tr td:nth-child(3)
      text-align: left

    tr th
      position: sticky
      z-index: 2
      background: #333
      font-size: 14px
      font-weight: bold
      text-align: center

    thead tr:last-child th
      top: 48px
      z-index: 3
    thead tr:first-child th
      top: 0
      z-index: 1
    tr:first-child th:first-child
      z-index: 3

    td:first-child
      z-index: 1

    td:first-child, th:first-child
      position: sticky
      left: 0
</style>
