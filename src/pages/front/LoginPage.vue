<template lang="pug">
#login
  q-dialog(v-model="layout" persistent transition-show="fade" @before-hide="() => router.push('/')")
    q-layout(container )
      q-btn(icon="close" round v-close-popup style="height: 24px;z-index: 7000;position: absolute;right: 0" to="/")

      q-header.bg-black.flex.justify-center
        q-btn-toggle.q-my-xl(style="width: 80%" spread toggle-color="white" toggle-text-color="black" v-model="currentModel"
        :options="[{label: 'LOGIN', value: 'login'}, {label: 'REGISTER', value: 'register'}]" @click="isUser")

      q-page-container.flex.justify-center
        q-form(style="width: 80%" @submit="login")
          q-input.q-my-xs(v-model="form.account" label="account" counter maxlength="20"
                :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")
          q-input.q-my-xs(v-model="form.password" label="password"  :type="isPwd ? 'password' : 'text'" counter maxlength="20"
                :rules="[$rules.required('欄位必填'), $rules.maxLength(20, '長度需為 4~20 個字元'), $rules.minLength(4, '長度需為 4~20 個字元')]")
            template(v-slot:append)
              q-icon.cursor-pointer(:name="isPwd ? 'visibility_off' : 'visibility'" @click="isPwd = !isPwd")
          q-btn.full-width.q-my-xl(type="submit" size="md" color="secondary") 登入
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
