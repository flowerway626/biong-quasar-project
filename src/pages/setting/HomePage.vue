<template lang="pug">
h4.text-center 基本設定
.text-h5 {{ account }}
//- q-btn(icon="mdi-shopping" flat to='')
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'
import { ref } from 'vue'

const account = ref('');

(async () => {
  try {
    const { data } = await apiAuth.get('/users/get')
    account.value = data.result.account
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'error',
      text: '取得失敗'
    })
  }
})()
</script>
