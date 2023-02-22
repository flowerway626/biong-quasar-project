<template lang="pug">
#new-info
  q-breadcrumbs.text-warning.q-ma-md.q-pl-xl(active-color="grey")
    template(v-slot:separator)
      q-icon(size='1.5em' name='chevron_right' color='grey')
    q-breadcrumbs-el(label='HOME' icon='mdi-home' to="/")
    q-breadcrumbs-el(label='NEWS' icon='mdi-newspaper-variant-multiple-outline' to="/news")
    q-breadcrumbs-el(label='NEWINFO' icon='mdi-new-box')

  .row.q-mx-xl.q-my-md
    .col-12.col-md-8.q-pa-md
      .text-center
        img(:src="newInfo.image" style="max-width: 600px;max-height:400px")
      .text-h4.q-my-md {{ newInfo.title }}
      p {{ new Date(newInfo.date).toLocaleString() }}
      .text-body1.pre {{ newInfo.content }}
    .col-12.col-md-4.q-px-md
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
    const { data } = await api.get('/news/' + route.params.id)
    newInfo.title = data.result.title
    newInfo.content = data.result.content
    newInfo.date = data.result.date
    newInfo.image = data.result.image
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
