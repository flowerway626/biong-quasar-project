<template lang="pug">
#event-info
  q-breadcrumbs.text-warning.q-ma-md.q-pl-xl(active-color="grey")
    template(v-slot:separator)
      q-icon(size='1.5em' name='chevron_right' color='grey')
    q-breadcrumbs-el(label='HOME' icon='mdi-home' to="/")
    q-breadcrumbs-el(label='EVENTS' icon='mdi-newspaper-variant-multiple-outline' to="/event")
    q-breadcrumbs-el(label='EVENTINFO' icon='mdi-new-box')

  .column.row-md.q-mx-xl.q-my-md(v-if="!loading")
    .col-12.col-md-6.q-pa-md.text-center
      img(:src="eventInfo?.image")
    .col-12.col-md-6.q-px-md
      .text-h4.q-my-md {{ eventInfo.name }}
      p {{ eventInfo.dateStart + ' ~ ' +  eventInfo.dateEnd }}
      p.description.pre {{ eventInfo.description }}
      q-scroll-area.scroll-area.q-my-md(visible :bar-style="{borderRadius: '5px', background: 'black'}")
        p.pre {{ eventInfo.description }}
      p(v-if="eventInfo.number !== 0") {{ '限制人數 | ' + eventInfo.number }}
      p(v-if="eventInfo.place !== '無'") {{ '地址 | ' + eventInfo.place }}
      q-btn.full-width(label="活動報名" rounded color="warning" text-color="black" @click="openDialog = !openDialog")

  .column.row-md.q-mx-xl.q-my-md(v-if="loading")
    .col-12.col-md-6.q-pa-md.text-center
      q-skeleton(width="450px" height="450px" style="margin: auto")
    .col-12.col-md-6.q-px-md
      q-skeleton( type="text" class="text-h1" width="60%")
      q-skeleton(type="text" class="text-h5" width="30%" style="margin-bottom: 20px")
      q-skeleton(type="text" class="p" height="30px" width="70%")
      q-skeleton(type="text" class="p" height="30px" width="70%")
      q-skeleton(type="text" class="p" height="30px" width="70%" style="margin-bottom: 200px")
      q-btn.full-width(label="活動報名" rounded color="warning" text-color="black" )

  q-dialog(v-model='openDialog' persistent)
    q-card
      q-form(@submit="addEvent")
        q-toolbar
          q-toolbar-title
            span.text-weight-bold Check
        q-card-section
          p 活動報名後無法取消
          q-input(v-model='phone' autofocus @keyup.enter='prompt = false' color="warning" label="連絡電話" mask="#### - ### - ###")

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
const visible = ref(true)
const openDialog = ref(false)
const loading = ref(true)
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
    loading.value = false
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

<style lang="scss">
#event-info {
  img {
    width: 100%;
  }

  .scroll-area {
    height: 350px;
    display: none;
  }
  @media (min-width: 600px) {
    height: calc(100vh - 70px);
    img {
      width: 80%;
  }
  .scroll-area {
      display: block;
    }
    .description {
      display: none;
    }
  }
}
</style>
