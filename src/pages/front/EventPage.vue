<template lang="pug">
#event-all
  .text-h5.text-center 最活動
  .flex
      q-card.q-ma-md.cursor-pointer(v-for="info in events" @click="router.push('/event/' + info._id)")
        q-card-section
          q-img(:src="info.image")
        q-card-section
          //- .text-subtitle2 {{ info.dateStart}}
          .text-h6 {{ info.name }}
        q-card-section.q-pt-none
          .text-subtitle1 {{ info.description }}
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
  .text-h6,
  .text-subtitle1 {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
  }
  .text-subtitle1 {
    -webkit-line-clamp: 3;
  }
}
  </style>
