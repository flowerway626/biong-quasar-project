<template lang="pug">
#new-all
  .text-h5.text-center 最新消息
  q-card.q-ml-auto.q-pa-sm(v-for="info in news" style="margin-right: 100px")
    q-card-section
      .text-subtitle2 {{ new Date(info.date).toLocaleString() }}
    q-card-section.q-pt-none
      .text-h5 {{ info.title }}
    q-card-section.q-pt-none
      .text-subtitle1 {{ info.content }}
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
    console.log(news)
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

  li {
    list-style: none;
  }

  .q-card {
    max-width: 800px;
    max-height: 200px;

    .text-subtitle1 {
      /* 標題文字超過兩行時，超過的文字隱藏並顯示... */
      /* 要使用 webkit-line-clamp 須將 display 轉成 -webkit-box*/
      display: -webkit-box;
      /* 使超出 h4 寬度的文字隱藏 */
      overflow: hidden;
      /* 超出 h4 寬度的文字須由上而下垂直排列才可執行 webkit-line-clamp */
      -webkit-box-orient: vertical;
      /* 限制 h4 中文字超過 2 行時 */
      -webkit-line-clamp: 2;
      /* 有溢出文字時最後方加上省略號... */
      text-overflow: ellipsis;
    }
  }
}
</style>
