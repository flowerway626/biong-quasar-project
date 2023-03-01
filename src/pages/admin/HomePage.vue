<template lang="pug">
.backH4.text-h4.text-center 會員管理
q-table.allUser-table.q-ma-md(:rows="users" :columns="columns" row-key="_id" :filter="filter")

  template(v-slot:body-cell-image="props")
    q-td(style="width: 10px")
      q-img.q-ma-md(:src="`https://source.boringavatars.com/beam/${props.row.account}?colors=53C2BA,C0538A,F4C752,060614,F5F5F4`" height="70px" width="70px")

  template(#body-cell-other="props")
    q-td.q-gutter-sm
      q-btn(icon="edit" round unelevated size="sm" color='pink' @click="dialogEdit(props.row._id)")

  template(v-slot:top-right)
    q-input.q-mr-md(borderless dense debounce='300' v-model='filter' placeholder='Search')
      template(v-slot:append)
        q-icon(name="search")

q-dialog(v-model="layout" persistent transition-show="fade" transition-hide="fade")
  q-card.edit-user-card.text-white
    q-form(@submit="editUser")
      q-card-section
        .text-h5.q-ma-sm.text-weight-bold.text-center 編輯資料
        q-input.q-my-xs(v-model="form.account" counter maxlength="20" dense label="account" color="warning"
              :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")

        q-input.q-my-xs(v-model="form.name" counter maxlength="20" dense label="name" color="warning" :rules="[$rules.required('欄位必填')]")

        q-input.q-my-xs(v-model="form.email" dense label="email" color="warning" :rules="[$rules.required('欄位必填'), $rules.email('email 格式錯誤')]")

        q-input.q-my-xs(v-model="form.phone" dense label="phone" color="warning" mask="#### - ### - ###"
        :rules="[$rules.required('欄位必填')]")

      q-card-actions(align="center")
        q-btn(label='submit' color='secondary' type="submit" @click="editUser")
        q-btn(label='cancel' color='pink' v-close-popup)

</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive, ref } from 'vue'
import { useQuasar, QSpinnerPie } from 'quasar'
import Swal from 'sweetalert2'

const $q = useQuasar()
const layout = ref(false)
const loading = ref(false)
const users = reactive([])
const filter = ref('')
const edit = ref(false)

const form = reactive({
  idx: '',
  _id: '',
  account: '',
  email: '',
  name: '',
  phone: ''
})

const columns = [
  {
    name: 'image',
    label: '圖片'
  },
  {
    name: 'name',
    required: true,
    label: 'NAME',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'account',
    required: true,
    label: 'ACCOUNT',
    field: row => row.account,
    sortable: true
  },
  {
    name: 'email',
    required: true,
    label: 'EMAIL',
    field: 'email'
  },
  {
    name: 'phone',
    label: 'PHONE',
    field: 'phone'
  },
  {
    name: 'other',
    label: '操作'
  }
]

// 編輯視窗
const dialogEdit = (id) => {
  layout.value = true
  form.idx = users.findIndex((user) => user._id === id)
  form._id = users[form.idx]._id
  form.name = users[form.idx].name
  form.account = users[form.idx].account
  form.email = users[form.idx].email
  form.phone = users[form.idx].phone
  console.log(form)
}

// 送出新增 / 編輯
const editUser = async () => {
  layout.value = false
  $q.loading.show({
    spinner: QSpinnerPie,
    spinnerColor: 'warning',
    spinnerSize: 100,
    backgroundColor: 'black',
    message: 'loading...',
    messageColor: 'white'
  })

  try {
    const { data } = await apiAuth.patch('/users/adminUser', form)
    users[form.idx] = data.result
    $q.notify({
      type: 'positive',
      color: 'pink',
      message: '編輯完成',
      position: 'top'
    })
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '發生錯誤！'
    })
  }
  $q.loading.hide()
};

(async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.push(...data.result)
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '使用者資料錯誤！'
    })
  }
})()

</script>

<style lang="sass">
.allUser-table
  max-height: calc(100vh - 150px)

  tr td
    text-align: center
    font-size: 14px

  tr th
    position: sticky
    z-index: 2
    background: #333
    font-size: 14px
    text-align: center

.edit-user-card
  width: 100%
  max-width: 500px
</style>
