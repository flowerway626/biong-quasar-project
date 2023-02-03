<template lang="pug">
h4 product
.row
  .col
    q-img(style="height: 500px;width:500px" :src="product.image")
  .col
    h2 {{product.name}}
    h4 $ {{ product.price }}
    p {{ product.description }}
    q-chip(v-model:selected="myLike" color="#fce5e5" icon="mdi-heart-plus" clickable) 收藏
    q-btn-group(outline)
      q-btn(color="brown" label="-")
      q-input(v-model.number="quantity" type="number")
      q-btn(color="brown" label="+")
    q-btn(color="brown" label="加入購物車" @click="submitCart")

  </template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import router from 'src/router'
import { useUserStore } from 'src/stores/user'

const user = useUserStore()
const { editCart } = user
const myLike = ref(false)
const route = useRoute()
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
  console.log(quantity.value)
  editCart({ _id: product._id, quantity: quantity.value })
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
