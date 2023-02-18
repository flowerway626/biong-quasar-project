<template lang="pug">
.row.q-ma-xl
  .col
    p {{ eventInfo.dateStart + ' ~ ' +  eventInfo.dateEnd }}
    p {{ eventInfo.description }}
    p {{ eventInfo.number }}
    p {{ eventInfo.place }}
    q-btn(label="報名" @click="openDialog = !openDialog")
  .col
    q-img(:src="eventInfo.image" style="height: 500px;width:500px" )
    h3 {{ eventInfo.name }}

q-dialog(v-model='openDialog' persistent)
  q-card
    q-form(@submit="addEvent")
      q-toolbar
        q-toolbar-title
          span.text-weight-bold Check
      q-card-section
        p 活動報名後無法取消
        q-input(v-model='phone' autofocus @keyup.enter='prompt = false' color="warning" label="連絡電話")

      q-card-actions.text-primary(align='right')
        q-btn(flat label='Cancel' color="pink" v-close-popup)
        q-btn(flat label='Submit' color="secondary" type="submit" v-close-popup)

</template>

<script setup>
import { api } from 'src/boot/axios'
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'
import { useUserStore } from 'src/stores/user'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const user = useUserStore()
const route = useRoute()
const openDialog = ref(false)
const { addMember } = user
const phone = ref('')
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
    eventInfo.dateStart = data.result.dateStart
    eventInfo.dateEnd = data.result.dateEnd
    eventInfo.place = data.result.place
    eventInfo.image = data.result.image
    eventInfo.number = data.result.number
    eventInfo.member = data.result.member
    console.log(eventInfo)
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

const addEvent = async () => {
  try {
    await addMember(route.params.id.toString(), phone.value)
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
