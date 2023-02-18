<template lang="pug">
q-card.product-Info
  //- div.mask
  q-img.cursor-pointer(:src="image" height="200px" @click="() => router.push('/shopping/' + _id)")
    .absolute-bottom.text-h6 {{ name }}

  q-card-actions
    //- q-skeleton(type="QBtn")
    q-btn(icon="mdi-shopping" flat @click="addCart(_id)") 加入購物車
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useQuasar } from 'quasar'
import Swal from 'sweetalert2'

const addCart = async (_id) => {
  try {
    $q.notify({
      type: 'positive',
      color: 'secondary',
      message: '加入購物車',
      position: 'top'
    })
    await editCart({ _id, quantity: 1 })
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
}
defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false

  }
})
const user = useUserStore()
const { editCart } = user
const router = useRouter()
const $q = useQuasar()
</script>

<style lang="scss">
.mask {
  // &:hover {
  background: rgba(0, 0, 0, 0.5);
  // }
}
</style>
