import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { api, apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'
import { Notify, Loading, QSpinnerPie } from 'quasar'

export const useUserStore = defineStore('user', () => {
  const account = ref('')
  const name = ref('')
  const email = ref('')
  const cart = ref(0)
  const token = ref('')
  const role = ref(0)
  const phone = ref('')
  const event = reactive([])

  // 登入
  async function login (form) {
    try {
      const { data } = await api.post('/users/login', form)
      account.value = data.result.account
      name.value = data.result.name
      email.value = data.result.email
      cart.value = data.result.cart
      token.value = data.result.token
      role.value = data.result.role
      phone.value = data.result.phone
      event.push(...data.result.event)
      Notify.create({
        type: 'positive',
        color: 'info',
        message: '登入成功',
        position: 'top'
      })
      if (role.value === 1) {
        this.router.push('/admin')
      } else {
        this.router.push('/')
      }
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

  // 登出
  const logout = async () => {
    try {
      await apiAuth.delete('/users/logout')
      account.value = ''
      name.value = ''
      email.value = ''
      cart.value = ''
      token.value = ''
      phone.value = ''
      event.value = []
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

  // 取得使用者資料
  const getUser = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/get')
      account.value = data.result.account
      name.value = data.result.name
      email.value = data.result.email
      cart.value = data.result.cart
      phone.value = data.result.phone
      event.push(...data.result.event)
      role.value = data.result.role
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
      logout()
    }
  }

  // 判斷是否登入
  const isLogin = computed(() => {
    return token.value.length > 0
  })

  // 判斷是否為管理者
  const isAdmin = computed(() => {
    return role.value === 1
  })

  // 頭貼
  const avatar = computed(() => {
    return `https://source.boringavatars.com/beam/256/${account.value}?colors=53C2BA,C0538A,F4C752,060614,F5F5F4`
  })

  // 使用者 編輯 / 加入購物車
  async function editCart ({ _id, quantity }) {
    if (token.value.length === 0) {
      Swal.fire({
        toast: true,
        timer: 1000,
        showConfirmButton: false,
        background: '#F5ABA5',
        icon: 'error',
        color: 'black',
        text: '請先登入！'
      })
      this.router.push('/login')
      return
    }
    try {
      const { data } = await apiAuth.post('/users/cart', { p_id: _id, quantity })
      cart.value = data.result
    } catch (error) {
      Swal.fire({
        toast: true,
        timer: 1000,
        showConfirmButton: false,
        background: '#F5ABA5',
        icon: 'error',
        color: 'black',
        text: error?.response?.data?.message || '購物車錯誤！'
      })
    }
  }

  const checkOut = async () => {
    try {
      await apiAuth.post('/orders')
      cart.value = 0
      Notify.create({
        type: 'positive',
        color: 'secondary',
        message: '訂單建立成功',
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
        text: error?.response?.data?.message || '購物車錯誤！'
      })
    }
  }

  async function addMember (eventId, userPhone) {
    if (token.value.length === 0) {
      Swal.fire({
        toast: true,
        timer: 1000,
        showConfirmButton: false,
        background: '#F5ABA5',
        icon: 'error',
        color: 'black',
        text: '請先登入！'
      })
      this.router.push('/login')
      return
    }
    Loading.show({
      spinner: QSpinnerPie,
      spinnerColor: 'warning',
      spinnerSize: 100,
      backgroundColor: 'black',
      message: 'loading...',
      messageColor: 'white'
    })
    try {
      await apiAuth.patch('/users/event/' + eventId, { phone: userPhone })
      await apiAuth.patch('/events/user/' + eventId)
      Notify.create({
        type: 'positive',
        color: 'pink',
        message: '報名成功',
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
        text: error?.response?.data?.message || '報名錯誤！'
      })
    }
    Loading.hide()
  }

  return {
    account,
    name,
    email,
    cart,
    token,
    role,
    phone,
    event,
    login,
    logout,
    isLogin,
    isAdmin,
    getUser,
    editCart,
    avatar,
    checkOut,
    addMember
  }
},
{
  persist: {
    key: 'BigongTest',
    paths: ['token']
  }
})
