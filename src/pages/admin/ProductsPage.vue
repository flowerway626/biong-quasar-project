<template lang="pug">
#admin-product
q-dialog(v-model="layout" full-width transition-show="fade" @before-hide="close")
  q-layout.bg-black
    q-btn(icon="close" round v-close-popup style="height: 24px;z-index: 7000;position: absolute;right: 0")

    q-header
      h4 新增商品

    q-page-container.flex.justify-center
      q-form(style="width: 90%" @submit="create")
        q-input.q-my-xs(v-model="form.name" label="名稱" type="text"  :rules="[$rules.required('欄位必填')]")
        .justify-between.flex.row
          q-input.q-my-xs.col-5(v-model.number="form.price" label="價格" type="number"  :rules="[$rules.required('欄位必填')]")
          q-select.q-my-xs.col-5(v-model="form.category" label="分類"  :options="caterogies")
        q-input.q-my-xs(v-model="form.description" label="說明" type="textarea"  :rules="[$rules.required('欄位必填')]")
        q-file.q-my-xs(outlined v-model="form.image")
        .justify-around.flex
          q-checkbox(v-model="form.sell" label="上架")
          q-btn(type="submit" size="large" color="primary") 新增商品
          q-btn(size="large" color="primary" to="/admin") 取消
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'
const user = useUserStore()
const layout = ref(true)
const router = useRouter()
const caterogies = ['服飾', '飾品', '食品', '其他']
const form = reactive({
  name: '',
  price: 0,
  description: '',
  image: '',
  category: '',
  sell: false
})

const products = reactive([])

const close = () => {
  router.push('/')
}
const create = async () => {
  try {
    const fd = new FormData()
    fd.append('name', form.name)
    fd.append('price', form.price)
    fd.append('description', form.description)
    fd.append('image', form.image)
    fd.append('category', form.category)
    fd.append('sell', form.sell)

    const { data } = await apiAuth.post('/products', fd)
    console.log(products)
    products.push(...data.result)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '新增成功'
    })
  } catch (error) {

  }
}
</script>
