<template lang="pug">
#event-all.q-ma-md
  .text-center.q-ma-xl
    img(src="../../assets/images/活動公告v2_animated.svg")

    .q-mx-auto
      .row
        .event.q-ma-md.cursor-pointer(v-for="info in events" :key="info._id" @click="router.push('/event/' + info._id)")
          q-img(:src="info.image" height="180px")
          .row.q-pa-md.items-center
            .col-3
              .text-body2 {{ info.dateStart.replace(/-/g, '.').substr(5, 5) }}
              .text-body(style= "color: #F2C037") ▼
              .text-body2 {{ info.dateEnd.replace(/-/g, '.').substr(5, 5) }}
            .col-8
              .text-subtitle1.text-ellipsis.text-left {{ info.name }}
              .text-body2.text-ellipsis.text-justify {{ info.description }}
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
  .event {
    width: 330px;
    background: #eee;
    color: #000;
    border-radius: 30px;
    box-shadow: 0px 0px 5px inset;
    transition: .5s;
    .q-img {
      box-shadow: 0px 0px 10px inset;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
    }
      .text-subtitle1 {
        -webkit-line-clamp: 1;
      }
      .text-body2 {
        -webkit-line-clamp: 2;
        color: #555;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  </style>
