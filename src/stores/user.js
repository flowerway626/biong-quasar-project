import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api, apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'
import { Notify } from 'quasar'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment () {
      this.counter++
    }
  }
})

export const useUserStore = defineStore('user', () => {
  const account = ref('')
  const name = ref('')
  const email = ref('')
  const cart = ref('')
  const token = ref('')
  const role = ref(0)

  const login = async (form) => {
    try {
      const { data } = await api.post('/users/login', form)
      account.value = data.result.account
      name.value = data.result.name
      email.value = data.result.email
      cart.value = data.result.cart
      token.value = data.result.token
      role.value = data.result.role
      Notify.create({
        type: 'positive',
        color: 'info',
        message: '登入成功',
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
        text: error?.response?.data?.message || '登入發生錯誤！'
      })
    }
  }

  const logout = async () => {
    try {
      await apiAuth.delete('/users/logout')
      account.value = ''
      name.value = ''
      email.value = ''
      cart.value = ''
      token.value = ''
      role.value = 0
      Notify.create({
        type: 'warning',
        color: 'warning',
        message: '已登出',
        position: 'top'
      })
    } catch (error) {
      Swal.fire({
        toast: true,
        showConfirmButton: false,
        timer: 2000,
        color: 'black',
        background: '#F5ABA5',
        icon: 'success',
        text: error?.data?.response?.message || '登出發生錯誤！'
      })
    }
  }

  const getUser = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/get')
      account.value = data.result.account
      name.value = data.result.name
      email.value = data.result.email
      cart.value = data.result.cart
      role.value = data.result.role
    } catch (error) {
      console.log(error)
      logout()
    }
  }

  const isLogin = computed(() => {
    return token.value.length > 0
  })

  const isAdmin = computed(() => {
    return role.value === 1
  })

  return {
    account,
    name,
    email,
    cart,
    token,
    role,
    login,
    logout,
    isLogin,
    isAdmin,
    getUser
  }
},
{
  persist: {
    key: 'BigongTest',
    paths: ['token']
  }
})
