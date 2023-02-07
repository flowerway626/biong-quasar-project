<template lang="pug">
#admin-product
q-dialog(v-model="layout" persistent transition-show="fade" @before-hide="close")
  q-card.my-card.text-white
    q-card-section(align="center")
      .text-h5.q-ma-sm.text-weight-bold 新增商品
      q-form.row(@submit="create")
        .col.q-px-md
          q-select.q-my-xs(v-model="form.category" label="分類"  :options="caterogies")
          q-input.q-my-xs(v-model="form.name" label="名稱" type="text"  :rules="[$rules.required('欄位必填')]")
          .flex
            q-input.q-my-xs(v-model.number="form.price" label="價格" type="number"  :rules="[$rules.required('欄位必填')]")
            q-checkbox.q-ml-md(v-model="form.sell" label="上架")
        .col.q-px-md
          q-input.q-my-xs(v-model="form.description" label="說明" type="textarea" rows="4" :rules="[$rules.required('欄位必填')]")
          //- q-file.q-my-xs(v-model="form.image" outlined)
    q-card-actions(align="center")
      q-btn(size="md" color="secondary" type="submit") 新增商品
      q-btn(size="md" color="pink" to="/admin/product") 取消

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
    products.push(...data.result)
    layout.value = false
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '新增成功'
    })
  } catch (error) {

  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 700px
</style>
