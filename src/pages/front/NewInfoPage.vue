<template lang="pug">
#new-info
  q-breadcrumbs.text-warning.q-ma-md.q-pl-xl(active-color="grey")
    template(v-slot:separator)
      q-icon(size='1.5em' name='chevron_right' color='grey')
    q-breadcrumbs-el(label='首頁' icon='mdi-home' to="/")
    q-breadcrumbs-el(label='最新消息' icon='mdi-newspaper-variant-multiple-outline' to="/news")
    q-breadcrumbs-el(:label='newInfo?.title' icon='mdi-new-box')

  .row.q-mx-xl.q-my-md(v-if="!loading")
    .col-12.col-md-8.q-pa-md
      .text-center
        img(:src="newInfo?.image" style="max-width: 600px;max-height:400px")
      .text-h4.q-my-md {{ newInfo?.title }}
      p {{ new Date(newInfo?.date).toLocaleString() }}
      .text-body1.pre {{ newInfo?.content }}

    .col-12.col-md-4.q-px-md(v-if="!loading")
      .text-h6.q-my-md MORE ...
      #latesThree(v-for="lates in latesThree" :key="lates._id" @click="changeInfo(lates)")
        .text-body2 {{ new Date(lates?.date).toLocaleString() }}
        .text-body1.q-my-md {{ lates?.title }}
        .text-body2.pre.text-ellipsis {{ lates?.content }}
        q-separator.q-my-md

  .row.q-mx-xl.q-my-md(v-if="loading")
    .col-12.col-md-8.q-pa-md
      .text-center
        q-skeleton(width="600px" height="400px" style="margin:0 auto 20px ")
      q-skeleton(type="text" class="text-h2" width="70%")
      q-skeleton(type="text" class="p" width="20%" height="40px" style="margin-bottom: 20px")
      q-skeleton(type="text" class="p" width="50%" height="40px")
      q-skeleton(type="text" class="p" width="50%" height="40px")
      q-skeleton(type="text" class="p" width="50%" height="40px")

    .col-12.col-md-4.q-px-md(v-if="loading")
      .text-h6.q-my-md MORE ...
      #latesThree(v-for="lates in latesThree" :key="lates._id" @click="changeInfo(lates)")
        q-skeleton(type="text" class="p" width="50%" height="40px")
        q-skeleton(type="text" class="p" width="80%" height="40px")
        q-skeleton(type="text" class="p" width="50%" height="30px")
        q-skeleton(type="text" class="p" width="50%" height="30px")
        q-separator.q-my-md

</template>

<script setup>
import { api } from 'src/boot/axios'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const loading = ref(true)
const latesThree = reactive([])
const newInfo = reactive({
  title: '',
  content: '',
  date: '',
  image: undefined
});

(async () => {
  try {
    const results = await Promise.all([api.get('/news/' + route.params.id), api.get('/news/recom')])
    newInfo.title = results[0].data.result.title
    newInfo.content = results[0].data.result.content
    newInfo.date = results[0].data.result.date
    newInfo.image = results[0].data.result.image
    latesThree.push(...results[1].data.result)
    loading.value = false
    document.title = 'Biong Biong | ' + newInfo.title
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

// 更新頁面資料
const changeInfo = async (lates) => {
  const { data } = await api.get('/news/recom')
  router.push('/news/' + lates._id)
  newInfo.title = lates.title
  newInfo.content = lates.content
  newInfo.date = lates.date
  newInfo.image = lates.image
  document.title = 'Biong Biong | ' + newInfo.title
  latesThree.splice(0, latesThree.length)
  latesThree.push(...data.result)
}

</script>

<style lang="scss">
#new-info {
  .text-h4,
  .text-h6 {
    font-family: 'Cubic';
  }
}
#latesThree {
  color: lightgrey;
  text-decoration: none;
  .text-body2 {
    -webkit-line-clamp: 2;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

}
</style>
