<template lang="pug">
#register
  q-dialog(v-model="layout" persistent transition-show="fade" @before-hide="close")
    q-card
      q-btn(icon="close" flat round v-close-popup style="height: 24px;z-index: 7000;position: absolute;right: 0" to="/")

      q-card-section.flex.justify-center
        q-btn-toggle.q-mt-md(style="width: 85%" spread toggle-color="white" toggle-text-color="black" v-model="currentModel"
        :options="[{label: 'LOGIN', value: 'login'}, {label: 'REGISTER', value: 'register'}]" @click="isLogin")

      q-card-section.flex.justify-center
        q-form(style="width: 90%" @submit="register")
          q-input(label="email" v-model="form.email" :rules="[$rules.required('欄位必填'), $rules.email('email 格式錯誤')]" color="warning")

          .row.justify-between
            .col-5
              q-input(label="name" v-model="form.name" counter maxlength="20" color="warning"
              :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")
            .col-5
              q-input(label="account" v-model="form.account" counter maxlength="20" color="warning"
              :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")

          q-input(label="password" v-model="form.password" :type="isPwd ? 'password' : 'text'" counter maxlength="20" color="warning"
          :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")
            template(v-slot:append)
                q-icon.cursor-pointer(:name="isPwd ? 'visibility_off' : 'visibility'" @click="isPwd = !isPwd")

          q-input(label="passwordConfirm" v-model="form.passwordConfirm" :type="isPwdConfirm ? 'password' : 'text'" color="warning"
          :rules="[$rules.required('欄位必填'), $rules.is(form.password, '密碼不一致')]" counter maxlength="20")
            template(v-slot:append)
                q-icon.cursor-pointer(:name="isPwdConfirm ? 'visibility_off' : 'visibility'" @click="isPwdConfirm = !isPwdConfirm")

          .text-center
            q-btn.full-width.q-my-lg(type="submit" size="md" push color="pink" @keydown.enter="login") 註冊
</template>

<script setup>
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'

const layout = ref(true)
const isPwd = ref(true)
const isPwdConfirm = ref(true)
const currentModel = ref('register')
const router = useRouter()
const $q = useQuasar()
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
    $q.notify({
      type: 'positive',
      color: 'info',
      message: '註冊成功',
      position: 'top'
    })
    await router.push('/login')
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '註冊錯誤！'
    })
  }
}
</script>

<style lang="scss">
.q-dialog__inner--minimized > div {
  max-width: 350px;
}
</style>
