<template lang="pug">
.q-ma-md
  q-table(title="訂單管理" :rows="orders" :columns="columns" row-key="_id")
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'

const orders = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.push(...data.result)
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

const columns = [
  {
    name: '_id',
    label: '編號',
    required: true,
    field: '_id'
  },
  {
    name: 'date',
    required: true,
    label: '日期',
    field: 'date',
    format: val => `${new Date(val).toLocaleDateString()}`
  },
  {
    name: 'account',
    required: true,
    label: '使用者',
    field: row => row.u_id.account
  },
  {
    name: 'product',
    required: true,
    label: '商品',
    field: row => row.products.quantity
  }
]
</script>
