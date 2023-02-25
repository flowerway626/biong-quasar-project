<template lang="pug">
#new-all
  .text-h4.text-center.q-pt-xl 最新消息
  .q-ma-sm(v-for="info in news" :key="info._id" @click="() => router.push('/news/' + info._id)")
    .news-info.row.q-pa-md.justify-center.justify-sm-between.justify-md-center
      .col-12.col-sm-3.q-mx-auto
        q-img(:src="info.image")
      .col-12.col-sm-8.column.justify-evenly
        .text-subtitle2 {{ new Date(info.date).toLocaleString() }}
        .text-h6 {{ info.title }}
        .text-subtitle1.text-ellipsis {{ info.content }}
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()
const news = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/news')
    news.push(...data.result)
    news.reverse()
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
#new-all {
  .news-info {
    border-radius: 20px;
    color: white;
    position: relative;
    width: 70%;
    box-shadow: 0px 0px 10px $warning;
    background: #2228;
    margin: 50px auto 0px;

    &:hover {
      background: linear-gradient(270deg, #b6f7f3 0%, #ffa6d3 100%);
      transition: 0.3s;
      color: #222;
      box-shadow: none;
      cursor: pointer;
      .q-img {
        top: -50px;
        transition: 0.3s;
      }
    }
  }
  .q-img {
    top: -35px;
    min-width: 200px;
    height: 200px;
  }

  .text-subtitle1 {
    -webkit-line-clamp: 2;
  }
}
</style>
