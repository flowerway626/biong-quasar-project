<template lang="pug">
.q-pa-md
  q-table.cart-table(title="商品管理" :rows='products' :columns='columns' row-key="_id" :filter="filter" virtual-scroll flat :loading="loading")
    template(v-slot:body-cell-image='props')
      q-td
        img(:src="props.row.image" :width="130" :height="100")

    template(v-slot:body-cell-sell='props')
      q-td
        q-toggle(v-if="edit" v-model='props.row.sell' checked-icon='check' color='warning' unchecked-icon='clear')
        q-toggle(v-if="!edit" v-model='props.row.sell' disable checked-icon='check' color='warning' unchecked-icon='clear')

    template(v-slot:body-cell-other='props')
      q-td.q-gutter-sm
        q-btn(v-if="!edit" icon="edit" round unelevated size="sm" color='pink' @click="edit = !edit")
        q-btn(v-if="edit" icon="check" round unelevated size="sm" color='pink' @click="edit = !edit")
        q-btn(icon="delete" color="pink" size="sm" round @click="delProduct(props.row._id)")

    template(v-slot:top-right)
      q-input.q-mr-md(borderless dense debounce='300' v-model='filter' placeholder='Search')
        template(v-slot:append)
          q-icon(name="search")
      q-btn(icon="mdi-shopping" label="新增商品" color="secondary" outline unelevated to='/admin/create')
</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const filter = ref('')
const edit = ref(false)
const loading = ref(false)
const products = reactive([]);

(async () => {
  try {
    loading.value = true
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
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
    label: '狀態',
    align: 'center',
    field: row => row.sell,
    format: val => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'other',
    required: true,
    label: '操作',
    align: 'center'
  }
]

// 傳入的是商品 _id 和 數量
const delProduct = async (_id) => {
  await apiAuth.delete('/products' + _id)
  // 商品數量 <= 0 時，把該項商品移出商品陣列
  // if (products[productsIndex].quantity <= 0) {
  //   products.splice(productsIndex, 1)

  $q.notify({
    type: 'positive',
    color: 'pink',
    message: '成功刪除商品',
    position: 'top'
  })
}
</script>

<style lang="sass">
.cart-table
  /* height or max-height is important */
  max-height: calc(100vh - 100px)

  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  // max-width: 600px

  td:first-child
    /* bg color is important for td; just specify one */
    background-color: #555 !important
  tr td
    text-align: center
    font-size: 14px

  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #333
    font-size: 14px
    font-weight: bold
    text-align: center

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0
</style>
