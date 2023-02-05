<template lang="pug">
h4.text-center 基本設定
div(style="width: 50%;margin: auto")
  q-btn(v-if="!edit" icon="mdi-pen" flat label="編輯" @click="edit = !edit")
  q-form(@submit="editUser")
    q-btn(v-if="edit" icon="check" type="submit" flat label="儲存" @click="edit = !edit")
  .flex.justify-between.items-center
    .text-body1.q-py-md name
    .text-body1(v-if="!edit") {{ form.name }}
    q-input.q-my-xs(v-if="edit" v-model="form.name" counter maxlength="20" dense
            :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")
  .flex.justify-between.items-center
    .text-body1.q-py-md account
    .text-body1(v-if="!edit") {{ form.account }}
    q-input.q-my-xs(v-if="edit" v-model="form.account" counter maxlength="20" dense
            :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")
  .flex.justify-between.items-center
    .text-body1.q-py-md email
    .text-body1(v-if="!edit") {{ form.email }}
    q-input.q-my-xs(v-if="edit" v-model="form.email" dense :rules="[$rules.required('欄位必填'), $rules.email('email 格式錯誤')]")

</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'

const form = reactive({
  _id: '',
  account: '',
  email: '',
  name: ''
})

const edit = ref(false)

const editUser = () => {
};

(async () => {
  try {
    const { data } = await apiAuth.get('/users/get')
    form._id = data.result._id
    form.account = data.result.account
    form.email = data.result.email
    form.name = data.result.name
    console.log(form)
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: '資料取得失敗！'
    })
  }
})()
</script>
