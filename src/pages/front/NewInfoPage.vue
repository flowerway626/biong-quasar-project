<template lang="pug">

</template>

<script setup>
import { api } from 'src/boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'

const route = useRoute()
const newInfo = reactive({
  title: '',
  content: '',
  date: '',
  image: undefined
});

(async () => {
  try {
    console.log(route.params.id)
    const { data } = await api.get('/news/' + route.params.id)
    console.log(data.result)
    newInfo.title = data.result.title
    newInfo.content = data.result.content
    newInfo.date = data.result.date
    newInfo.image = data.result.image
    console.log(newInfo)
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '最新消息錯誤！'
    })
  }
})()
</script>
