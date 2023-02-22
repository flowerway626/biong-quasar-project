<template lang="pug">
q-breadcrumbs.text-warning.q-ma-md.q-pl-xl(active-color="grey")
  template(v-slot:separator)
    q-icon(size='1.5em' name='chevron_right' color='grey')
  q-breadcrumbs-el(label='HOME' icon='mdi-home' to="/")
  q-breadcrumbs-el(label='SHOPPING' icon='mdi-store' to="/shopping")
  q-breadcrumbs-el(:label="product.name" icon='mdi-shopping')

.row
  .col
    q-img(style="height: 500px;width:500px" :src="product.image")
  .col
    h4 {{product.name}}
    h5 $ {{ product.price }}
    p.pre {{ product.description }}
    q-btn-group(outline)
      q-btn(color="brown" label="-" @click="quantity--")
      q-input(v-model.number="quantity" type="number" style="width: 100px;font-size: 16px" input-class="text-center text-weight-bold")
      q-btn(color="brown" label="+" @click="quantity++")
    q-btn(color="brown" label="加入購物車" @click="submitCart")

  </template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from 'src/stores/user'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const user = useUserStore()
const { editCart } = user
const myLike = ref(false)
const route = useRoute()
const router = useRouter()
const quantity = ref(0)

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const submitCart = () => {
  if (quantity.value === 0) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: '請選擇商品數量！'
    })
  } else {
    editCart({ _id: product._id, quantity: quantity.value })
    quantity.value = 0
    $q.notify({
      type: 'positive',
      color: 'pink',
      message: '加入購物車',
      position: 'top'
    })
  }
}

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.description = data.result.description
    product.image = data.result.image
    product.category = data.result.category
    product.sell = data.result.sell
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品失敗'
    })
    router.push('/shopping')
  }
})()

</script>
