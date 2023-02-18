<template lang="pug">
#login
  q-dialog#loginDialog(v-model="layout" persistent transition-show="fade" @before-hide="() => router.push('/')")
    q-card.login-card
      q-btn(icon="close" flat round v-close-popup style="height: 24px;z-index: 7000;position: absolute;right: 0" to="/")

      q-card-section.flex.justify-center
        q-btn-toggle.q-mt-md(style="width: 85%" spread toggle-color="white" toggle-text-color="black" v-model="currentModel"
        :options="[{label: 'LOGIN', value: 'login'}, {label: 'REGISTER', value: 'register'}]" @click="isUser")

      q-card-section.flex.column.justify-center
        q-form(style="margin: auto;width: 90%" @submit="login")
          q-input(v-model="form.account" label="account" counter maxlength="20" color="warning"
                :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")
          q-input(v-model="form.password" label="password"  :type="isPwd ? 'password' : 'text'" counter maxlength="20"
                color="warning" :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")
            template(v-slot:append)
              q-icon.cursor-pointer(:name="isPwd ? 'visibility_off' : 'visibility'" @click="isPwd = !isPwd")
          q-btn.full-width.q-my-xl(type="submit" size="md" push color="secondary") 登入
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const layout = ref(true)
const isPwd = ref(true)
const currentModel = ref('login')
const router = useRouter()
const form = reactive({
  account: '',
  password: ''
})

const isUser = () => {
  currentModel.value === 'login' ? router.push('/login') : router.push('/register')
}

const login = async () => {
  await user.login(form)
}

</script>

<style lang="scss">
#loginDialog .q-dialog__inner--minimized > div {
  max-width: 350px;
  background: linear-gradient(135deg, #53C2BA 0%, #C0538A 100%);
  }
  .login-card {
    width: 100%;
  }

</style>
