<template lang="pug">
.text-h5.text-center 最新消息

//- ul
  li(v-for="info in events")
    q-btn(:to="'/event/' + info._id").flex
      .text-h6.q-mr-xl {{ new Date(info.date).toLocaleDateString() }}
      .text-h6.q-ml-xl {{ info.name }}
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'

const events = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/events')
    events.push(...data.result)
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

<style lang="scss">
li {
  list-style: none;
  }
</style>
