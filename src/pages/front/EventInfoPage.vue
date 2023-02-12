<template lang="pug">
.row
  .col
    q-img(:src="eventInfo.image" style="height: 500px;width:500px" )
  .col
    h3 {{ eventInfo.name }}
    p {{ new Date(eventInfo.date).toLocaleDateString() }}
    p {{ eventInfo.description }}
    p {{ eventInfo.number }}
    p {{ eventInfo.place }}
    q-btn(label="報名" @click="addMember(route.params.id.toString(), phone)")
</template>

<script setup>
import { api, apiAuth } from 'src/boot/axios'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'
import { useUserStore } from 'src/stores/user'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const user = useUserStore()
const { addMember } = user
const route = useRoute()
const eventInfo = reactive({
  name: '',
  description: '',
  date: '',
  place: '',
  image: undefined,
  number: 0,
  member: []
});

(async () => {
  try {
    const { data } = await api.get('/events/' + route.params.id)
    eventInfo.name = data.result.name
    eventInfo.description = data.result.description
    eventInfo.date = data.result.date
    eventInfo.place = data.result.place
    eventInfo.image = data.result.image
    eventInfo.number = data.result.number
    eventInfo.member = data.result.member
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

const editEvent = async () => {
  try {
    const phone = '0926490800'
    await addMember(route.params.id.toString(), phone)
    console.log('user')
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '報名錯誤！'
    })
  }
}

</script>
