<template lang="pug">
#new-all
  .text-h5.text-center 最新消息
  router-link.q-ma-sm(v-for="info in news" :key="info._id" :to="'/news/' + info._id")
    .news-info
      q-img.absolute(:src="info.image")
      .absolute.text-subtitle2 {{ new Date(info.date).toLocaleString() }}
      .absolute.text-h5 {{ info.title }}
      .absolute.text-subtitle1.text-ellipsis {{ info.content }}
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'
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
  background-image: url('../../assets/images/stars.jpg');
  background-position: center;
  background-attachment: fixed;
  .news-info {
    border-radius: 20px;
    text-decoration: none;
    color: white;
    position: relative;
    width: 80%;
    height: 180px;
    border: 2px solid $warning;
    background: #5558;
    margin: 50px auto 0px;
    &:hover {
      background: linear-gradient(270deg, #b6f7f3 0%, #ffa6d3 100%);
      transition: 0.3s;
      color: #222;
      transform: scale(1.1);
    }
  }
  .q-img {
    left: 50px;
    top: -35px;
    width: 200px;
    height: 200px;
  }
  .text-subtitle2 {
    top: 20px;
    left: 300px;
  }
  .text-h5 {
    top: 50px;
    left: 300px;
  }
  .text-subtitle1 {
    -webkit-line-clamp: 2;
    top: 100px;
    left: 300px;
    width: 65%;
  }
}
</style>
