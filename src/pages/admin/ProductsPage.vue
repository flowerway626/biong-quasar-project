<template lang="pug">
.q-pa-md
  q-table.product-table(title="商品管理" :rows='products' :columns='columns' row-key="_id"
          :filter="filter" virtual-scroll flat :loading="loading")
    template(v-slot:body-cell-image='props')
      q-td
        img(:src="props.row.image" :width="130" :height="100")

    template(v-slot:body-cell-category='props')
      q-td
        q-btn(:label="props.row.category" rounded)

    template(v-slot:body-cell-sell='props')
      q-td
        q-toggle(v-if="edit" v-model='props.row.sell' checked-icon='check' color='warning' unchecked-icon='clear')
        q-toggle(v-if="!edit" v-model='props.row.sell' disable checked-icon='check' color='warning' unchecked-icon='clear')

    template(v-slot:body-cell-other='props')
      q-td.q-gutter-sm
        q-btn(v-if="!edit" icon="edit" round unelevated size="sm" color='pink' @click="dialogEdit(props.row._id)")
        q-btn(v-if="edit" icon="check" round unelevated size="sm" color='pink' @click="edit = !edit")
        q-btn(icon="delete" color="pink" size="sm" round @click="delProduct(props.row._id)")

    template(v-slot:top-right)
      q-input.q-mr-md(borderless dense debounce='300' v-model='filter' placeholder='Search')
        template(v-slot:append)
          q-icon(name="search")
      q-btn(icon="mdi-shopping" label="新增商品" color="secondary" outline unelevated @click="dialogEdit(-1)")

q-dialog#admin-product(v-model="layout" persistent transition-show="fade" transition-hide="fade")
  q-card.my-card.text-white
    q-form(@submit="editProduct")
      q-card-section(align="center")
        .text-h5.q-ma-sm.text-weight-bold {{ form._id.length > 0 ? '編輯商品' : '新增商品' }}
          //- .col.q-px-md
        .row
          .col-6.q-pt-md
            q-input.q-my-xs(v-model="form.name" label="名稱" type="text" color="warning"  :rules="[$rules.required('欄位必填')]")
            q-select.q-my-xs(v-model="form.category" label="分類" color="warning"  :options="caterogies")
            .flex
              q-input.q-my-xs(v-model.number="form.price" label="價格" type="number" color="warning"  :rules="[$rules.required('欄位必填')]")
              q-checkbox.q-my-xs(v-model="form.sell" label="上架" color="warning")
          .col-6.q-pt-md
            q-img.q-my-sm(:src="form.image" width="150px")
            q-file.q-my-xs(v-model="form.image" outlined use-chips style="width:150px" label="PHOTO")
        q-input(v-model="form.description" label="說明" type="textarea" color="warning" rows="4"
          :rules="[$rules.required('欄位必填')]")

      q-card-actions(align="center")
        q-btn(type="submit" size="md" color="secondary" ) 確定
        q-btn(size="md" color="pink" v-close-popup) 取消

</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useQuasar, QSpinnerPie } from 'quasar'
import Swal from 'sweetalert2'

const filter = ref('')
const edit = ref(false)
const layout = ref(false)
const loading = ref(false)
const $q = useQuasar()
const products = reactive([])
const caterogies = ['服飾', '飾品', '食品', '其他']
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: undefined,
  category: '',
  sell: false,
  idx: -1
})

// 編輯視窗
const dialogEdit = (_id) => {
  const idx = products.findIndex((product) => product._id === _id)
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.price = 0
    form.description = ''
    form.image = undefined
    form.category = ''
    form.sell = false
  } else {
    form._id = products[idx]._id
    form.name = products[idx].name
    form.price = products[idx].price
    form.description = products[idx].description
    form.image = products[idx].image
    form.category = products[idx].category
    form.sell = products[idx].sell
    form.idx = idx
  }
  layout.value = true
}

// 送出新增 / 編輯
const editProduct = async () => {
  layout.value = true
  edit.value = true
  $q.loading.show({
    spinner: QSpinnerPie,
    spinnerColor: 'warning',
    spinnerSize: 100,
    backgroundColor: 'black',
    message: 'loading...',
    messageColor: 'white'
  })
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('price', form.price)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('category', form.category)
  fd.append('sell', form.sell)
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      $q.notify({
        type: 'positive',
        color: 'secondary',
        message: '新增成功',
        position: 'top'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      products[form.idx] = data.result
      $q.notify({
        type: 'positive',
        color: 'pink',
        message: '編輯成功',
        position: 'top'
      })
    }
    layout.value = false
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
  $q.loading.hide()
  edit.value = false
}

(async () => {
  try {
    loading.value = true
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
    loading.value = false
    layout.value = false
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '商品錯誤！'
    })
  }
})()

const columns = [
  // {
  //   name: 'indexs',
  //   required: true,
  //   label: '#',
  //   align: 'center',
  //   sortable: true,
  //   sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  // },
  {
    name: 'name',
    required: true,
    label: '名稱',
    align: 'center',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'image',
    required: true,
    label: '圖片',
    align: 'center',
    field: row => row.image
  },
  {
    name: 'price',
    required: true,
    label: '單價',
    align: 'center',
    field: row => row.price,
    format: val => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'sell',
    required: true,
    label: '上架狀態',
    align: 'center',
    field: row => row.sell,
    format: val => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'category',
    required: true,
    label: '類別',
    align: 'center',
    field: row => row.category,
    sortable: true
  },
  {
    name: 'other',
    required: true,
    label: '操作',
    align: 'center'
  }
]

// 刪除商品
const delProduct = async (_id) => {
  const idx = products.findIndex((product) => product._id === _id)
  loading.value = true
  try {
    await apiAuth.delete('/products/' + _id)
    products.splice([idx], 1)
    loading.value = false

    $q.notify({
      type: 'positive',
      color: 'secondary',
      message: '成功刪除商品',
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
      text: error?.response?.data?.message || '發生錯誤！'
    })
  }
}

</script>

<style lang="sass">
.product-table
  max-height: calc(100vh - 100px)

  td:first-child
    background-color: #555 !important
  tr td
    text-align: center
    font-size: 14px

  tr th
    position: sticky
    z-index: 2
    background: #333
    font-size: 14px
    font-weight: bold
    text-align: center

  thead tr:last-child th
    top: 48px
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0

.my-card
  width: 100%
  max-width: 700px
</style>
