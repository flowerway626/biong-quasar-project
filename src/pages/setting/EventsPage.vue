<template lang="pug">
h4.text-center 活動管理

.q-pa-md.row
    .col-xs-12.col-sm-4.col-md-3.q-mx-lg(v-for="event in events")
      q-card.my-card
        q-img(:src='event.image')
          .absolute-bottom
            .text-h6 {{ event.name }}
            .text-subtitle2 {{ new Date(event.date).toLocaleDateString() }}
        q-card-section
          p 地點 {{ event.place }}

//- q-table.order-table(title="活動管理" :rows='events' :columns='columns' row-key="_id"
    :filter="filter" virtual-scroll flat :loading="loading" grid)
    //- q-btn(icon="delete" round unelevated size="sm" color='pink' @click='updateCart(props.row._id, props.row.quantity*-1)')

    //- template(v-slot:body-cell-index='props')
        q-td(:props="props")
          span {{ props }}
        //- q-btn(icon="edit" round unelevated size="sm" color='secondary' @click='editDialog(props.row)')

    template(v-slot:body-cell-image='props')
      q-td
        img(:src="props.row.image" :width="130" :height="100")

    //- template(v-slot:body-cell-quantity='props')
      q-td
        q-btn(v-if="edit" icon="mdi-minus" round outline unelevated size="sm" color='warning' @click='updateCart(props.row._id, -1)')
        span &nbsp;&nbsp; {{ props.row.quantity }} &nbsp;&nbsp;
        q-btn(v-if="edit" icon="mdi-plus" round outline unelevated size="sm" color='warning' @click='updateCart(props.row._id, 1)')

    //- template(v-slot:body-cell-other='props')
      q-td.q-gutter-x-sm
        q-btn(icon="delete" round unelevated size="sm" color='pink' @click='updateCart(props.row._id, props.row.quantity*-1)')

    template(v-slot:top-right)
      q-input.q-mr-md(borderless dense debounce='300' v-model='filter' placeholder='Search')
        template(v-slot:append)
          q-icon(name="search")
      q-btn(v-if="!edit" icon="edit" label="編輯" outline unelevated size="sm" color='secondary' @click="edit = !edit")
      q-btn(v-if="edit" icon="check" label="確認" outline unelevated size="sm" color='secondary' @click="edit = !edit")

  //- .flex.justify-around.items-center.q-mt-md.q-gutter-md
    .text-h5.text-weight-bold TOTAL： {{ totalPrice }} 元
    q-btn(icon="money" label="結帳 go" unelevated size="lg" color='warning' text-color="black" @click="createOrder")
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const loading = ref(false)
const user = useUserStore()
const { editCart, checkOut } = user
const edit = ref(false)
const filter = ref('')
const events = reactive([]);

(async () => {
  try {
    loading.value = true
    const { data } = await apiAuth.get('/events')
    events.push(...data.result)
    console.log(events)
    loading.value = false
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
})()

// const columns = [
//   // {
//   //   name: 'indexs',
//   //   required: true,
//   //   label: '#',
//   //   align: 'center',
//   //   sortable: true,
//   //   sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
//   // },
//   {
//     name: 'name',
//     required: true,
//     label: '活動名稱',
//     align: 'center',
//     field: 'name'
//   },
//   {
//     name: 'image',
//     required: true,
//     label: '圖片',
//     align: 'center',
//     field: 'image'
//   },
//   {
//     name: 'date',
//     required: true,
//     label: '單價',
//     align: 'center',
//     field: 'date',
//     sortable: true,
//     sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
//   },
//   {
//     name: 'description',
//     required: true,
//     label: 'description',
//     align: 'center',
//     field: 'description',
//     sortable: true,
//     sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
//   },
//   {
//     name: 'place',
//     required: true,
//     label: 'place',
//     align: 'center',
//     field: 'place',
//     sortable: true,
//     sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
//   }
// ]

// 傳入的是購物車_id 和 數量

// 購物車總金額

// 建立訂單 / 清空購物車

</script>

<style lang="sass">
.my-card
  width: 100%
  max-width: 300px
</style>
