<template lang="pug">
#event-all
  .text-center.q-ma-xl
    img(src="../../assets/images/活動公告v2_animated.svg")
  .flex
    q-card.q-ma-md.cursor-pointer(v-for="info in events" :key="info._id" @click="router.push('/event/' + info._id)")
      q-card-section
        q-img(:src="info.image")
      q-card-section
        .text-subtitle1.text-ellipsis {{ info.name }}
      q-card-section.q-pt-none
        .text-subtitle2.text-ellipsis.text-justify {{ info.description }}
</template>

<script setup>
import { api } from 'src/boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const router = useRouter();

(async () => {
  try {
    const { data } = await api.get('/events')
    events.push(...data.result)
    console.log(events)
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '取得活動錯誤！'
    })
  }
})()

const events = reactive([])
</script>

<style lang="scss">
#event-all {

  li {
    list-style: none;
  }

  .q-card {
    width: 250px;

  }
  .text-subtitle1 {
    -webkit-line-clamp: 1;
  }
  .text-subtitle2 {
    -webkit-line-clamp: 3;
  }
}
  </style>
