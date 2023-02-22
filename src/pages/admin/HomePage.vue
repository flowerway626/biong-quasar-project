<template lang="pug">
.backH4.text-h4.text-center 會員管理
q-table.allUser-table.q-ma-md(:rows="users" :columns="columns" row-key="_id")
  template(v-slot:body-cell-image="props")
    q-td(style="width: 10px")
      q-img.q-ma-md(:src="`https://source.boringavatars.com/beam/${props.row.account}?colors=53C2BA,C0538A,F4C752,060614,F5F5F4`" height="70px" width="70px")
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'
const users = reactive([])

const columns = [
  {
    name: 'image',
    label: '圖片'
  },
  {
    name: 'name',
    required: true,
    label: 'NAME',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'account',
    required: true,
    label: 'ACCOUNT',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'email',
    required: true,
    label: 'EMAIL',
    field: 'email',
    sortable: true
  },
  {
    name: 'phone',
    required: true,
    label: 'PHONE',
    field: 'phone',
    sortable: true
  }
];

(async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.push(...data.result)
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '使用者資料錯誤！'
    })
  }
})()

</script>

<style lang="sass">
.allUser-table
  max-height: calc(100vh - 170px)
  tr td
    text-align: center
    font-size: 14px

  tr th
    position: sticky
    z-index: 2
    background: #333
    font-size: 14px
    text-align: center

  thead tr:first-child th
    top: 0
    z-index: 1
  // width: 30px
</style>
