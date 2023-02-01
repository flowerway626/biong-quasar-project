<template lang="pug">
#register
  q-dialog(v-model="layout" persistent transition-show="fade" @before-hide="close")
    q-layout.bg-black
      q-btn(icon="close" round v-close-popup style="height: 24px;z-index: 7000;position: absolute;right: 0" to="/")

      q-header.bg-black.flex.justify-center
        q-btn-toggle.q-my-xl(style="width: 80%" spread toggle-color="white" toggle-text-color="black" v-model="currentModel"
        :options="[{label: 'LOGIN', value: 'login'}, {label: 'REGISTER', value: 'register'}]" @click="isLogin")

      q-page-container.flex.justify-center
        q-form(style="width: 80%" @submit="register")
          q-input.q-my-xs(label="email" v-model="form.email" :rules="[$rules.required('欄位必填'), $rules.email('email 格式錯誤')]")

          .row.justify-between
            .col-5
              q-input.q-my-xs(label="name" v-model="form.name" counter maxlength="20"
              :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")
            .col-5
              q-input.q-my-xs(label="account" v-model="form.account" counter maxlength="20"
              :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")

          q-input.q-my-xs(label="password" v-model="form.password" type="password" counter maxlength="20"
          :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")
          q-input.q-my-xs(label="passwordConfirm" v-model="form.passwordConfirm" type="password"
          :rules="[$rules.required('欄位必填'), $rules.is(form.password, '密碼不一致')]" counter maxlength="20")

          .text-center
            q-btn(type="submit" size="large" color="primary") 註冊
</template>

<script setup>
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { api } from 'src/boot/axios'

const layout = ref(true)
const currentModel = ref('register')
const router = useRouter()
const form = reactive({
  email: '',
  name: '',
  account: '',
  password: '',
  passwordConfirm: ''
})

const close = () => {
  router.push('/')
}

const isLogin = () => {
  currentModel.value === 'login' ? router.push('/login') : router.push('/register')
}

const register = async () => {
  try {
    await api.post('/users/register', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功！'
    })
    await router.push('/login')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '註冊錯誤'
    })
  }
}
</script>
