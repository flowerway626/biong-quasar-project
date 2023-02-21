<template lang="pug">
#backH4.text-h4.text-center 會員管理
.row.q-px-xl
  .q-pa-md.items-start.col-xs-12.col-sm-6.col-md-4(v-for="user in users")
    q-card.my-card
      q-card-section(horizontal)
        q-img.q-ma-md(:src="`https://source.boringavatars.com/beam/${user.account}?colors=53C2BA,C0538A,F4C752,060614,F5F5F4`" width="70px" height="70px")
        .row.column
          .text-h5.col.q-my-md {{ user.name }}
            .text-subtitle2 @ {{ user.account }}
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'
const users = reactive([]);

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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
