<template lang="pug">
//- .q-pa-md
  q-carousel(animated v-model="slide" arrows navigation infinite)
    q-carousel-slide(:name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg")
    q-carousel-slide(:name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg")
    q-carousel-slide(:name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg")
    q-carousel-slide(:name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg")
h5 周邊
.q-ma-auto
  .row
    .col-xs-12.col-sm-4.col-md-3.q-ma-lg(v-for="product in products" :key="product.id")
      ProductCard(v-bind="product")
</template>

<script setup>
import { reactive, ref } from 'vue'
import { api } from 'src/boot/axios'
import ProductCard from 'src/components/ProductCard.vue'
import Swal from 'sweetalert2'

const products = reactive([])
const slide = ref(1);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'error',
      text: error?.response?.data.message || '發生錯誤'
    })
  }
})()
</script>

<style lang="sass" scoped>
.product-Info
  width: 100%
</style>
