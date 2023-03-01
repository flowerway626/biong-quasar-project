<template lang="pug">
#user-event
  .backH4.text-h4.text-center 報名活動
  .q-pa-md.w-100.row
    router-link.eventInfo.col-12.col-md-5.q-pa-sm.q-mb-xl(v-for="event in events" :key="event._id" :to="'/event/' + event.e_id._id")
      .content(style="height: 100%")
        .row
          q-img.col.q-mr-md(:src='event.e_id?.image' height="100%")
          .col
            .text-subtitle2.q-mt-md {{ event.e_id?.dateStart + ' ~ ' + event.e_id?.dateEnd }}
            .text-subtitle1 {{ event.e_id?.name }}

</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const loading = ref(false)
const user = useUserStore()
const { editCart, checkOut } = user
const edit = ref(false)
const filter = ref('')
const events = reactive([]);

(async () => {
  try {
    loading.value = true
    const { data } = await apiAuth.get('/users/event')
    events.push(...data.result)
    loading.value = false
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

</script>

<style lang="scss">
#user-event .eventInfo {
  height: 150px;
  margin: 20px 0 30px 0;
  text-decoration: none;
  color: white;
  background: linear-gradient(135deg, #53C2BA 0%, #C0538A 100%);
  clip-path: polygon(20px 0%,calc(100% - 20px) 0%,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,20px 100%,0 100%,0% 20px);
  .q-img {
    clip-path: polygon(20px 0%,calc(100% - 20px) 0%,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,20px 100%,0 100%,0% 20px);
  }
  .content {
    background: #222;
    clip-path: polygon(20px 0%,calc(100% - 20px) 0%,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,20px 100%,0 100%,0% 20px);
  }

  @media (min-width: 600px) {
    margin: 20px 0 30px 50px;
  }
}
</style>
