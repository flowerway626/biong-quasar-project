<template lang="pug">
h4.text-center 基本設定

q-form(@submit="editUser")
  .q-mx-auto(style="width: 50%")
    q-btn(v-if="!edit" label="編輯" icon="mdi-pen" color="secondary" outline @click="edit = !edit")
    q-btn(v-if="edit" label="儲存" icon="check" color="pink" outline @click="editCheck = !editCheck")

    .flex.justify-between.items-center
      .text-body1.q-py-md account
      .text-body1(v-if="!edit") {{ formEdit.account }}
      q-input.q-my-xs(v-if="edit" v-model="formEdit.account" counter maxlength="20" dense
              :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")

    .flex.justify-between.items-center
      .text-body1.q-py-md name
      .text-body1(v-if="!edit") {{ formEdit.name }}
      q-input.q-my-xs(v-if="edit" v-model="formEdit.name" counter maxlength="20" dense
              :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")

    .flex.justify-between.items-center
      .text-body1.q-py-md password
      .text-body1(v-if="!edit") {{ formEdit.password }}
      q-input.q-my-xs(v-if="edit" v-model="formEdit.password" counter maxlength="20" dense
              :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")

    .flex.justify-between.items-center
      .text-body1.q-py-md email
      .text-body1(v-if="!edit") {{ formEdit.email }}
      q-input.q-my-xs(v-if="edit" v-model="formEdit.email" dense :rules="[$rules.required('欄位必填'), $rules.email('email 格式錯誤')]")

    .flex.justify-between.items-center
      .text-body1.q-py-md phone
      .text-body1(v-if="!edit") {{ formEdit.phone }}
      q-input.q-my-xs(v-if="edit" v-model="formEdit.phone" dense :rules="[$rules.required('欄位必填')]")

  q-dialog(v-model='editCheck' persistent )
    q-card
      q-card-section.row.items-center
        q-avatar(icon='info' color='warning' text-color='black')
        span.q-ml-sm 送出後無法回復，是否儲存修改？

      q-card-actions(align='right')
        q-btn(flat label='取消' color='warning' v-close-popup @click="editCanel")
        q-btn(flat label='確定' color='warning' type="submit" @click="editUser")
</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/user'
import { storeToRefs } from 'pinia'

const user = useUserStore()
const { name } = storeToRefs(user)
const $q = useQuasar()
const edit = ref(false)
const editCheck = ref(false)
// 資料庫內的資料
const form = reactive({
  _id: '',
  account: '',
  password: '',
  email: '',
  name: '',
  phone: ''
})
// 修改的資料
const formEdit = reactive({
  _id: '',
  account: '',
  password: '●●●●●●●●',
  email: '',
  name: '',
  phone: ''
});

(async () => {
  try {
    const { data } = await apiAuth.get('/users/get')
    form._id = data.result._id
    form.account = data.result.account
    form.email = data.result.email
    form.name = data.result.name
    form.phone = data.result.phone
    formEdit._id = form._id
    formEdit.account = form.account
    formEdit.email = form.email
    formEdit.name = form.name
    formEdit.phone = form.phone
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

// 取消修改
const editCanel = () => {
  // 換回原設定
  edit.value = false
  formEdit._id = form._id
  formEdit.account = form.account
  formEdit.password = form.password
  formEdit.email = form.email
  formEdit.name = form.name
  formEdit.phone = form.phone
}

// 確認修改
const editUser = async () => {
  try {
    const { data } = await apiAuth.patch('/users/' + form._id, formEdit)
    formEdit._id = data.result._id
    formEdit.account = data.result.account
    formEdit.password = '●●●●●●●●'
    formEdit.email = data.result.email
    formEdit.name = data.result.name
    formEdit.phone = data.result.phone
    name.value = data.result.name

    $q.notify({
      type: 'positive',
      color: 'secondary',
      message: '修改成功',
      position: 'top'
    })
    editCheck.value = false
    edit.value = false
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: '編輯失敗！'
    })
  }
}
</script>
