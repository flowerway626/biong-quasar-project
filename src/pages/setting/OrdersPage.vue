<template lang="pug">
h4.text-center 訂單管理
q-table(:columns="columns" :rows="orders" row-key="_id")
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'

const orders = reactive([])

const columns = [
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
];

(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result)
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
