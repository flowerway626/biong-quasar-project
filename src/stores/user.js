import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api, apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'

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
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '登入成功！'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤！'
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
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '登出成功！'
      })
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'success',
        title: '失敗',
        text: error?.data?.response?.message || '發生錯誤！'
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
